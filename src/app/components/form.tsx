"use client"

import { useState } from "react"
import { Toaster, toast } from 'sonner'

export const Form = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)

  const onFieldChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value: typeof formData[keyof typeof formData] = event.target.value
    setFormData({...formData, [event.target.id]: value})
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setLoading(true)

    const body = {
      email: formData.email,
      message: formData.message,
    }

    const promise = fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })

    toast.promise(promise, {
      loading: 'Enviando formulario de contacto...',
      success: (response) => {
        if(!response.ok)
          throw new Error()
        return 'Formulario de contacto enviado';
      },
      error: 'Error al enviar el formulario de contacto',
      finally: () => setLoading(false),
    })

  }

  return (
    <article className="grow">
      <form 
        onSubmit={handleSubmit}
        className="flex flex-col gap-2"
      >
        <div className="flex flex-col">
          <label htmlFor="email">
            <span className="font-semibold">
              Correo<span className="text-red-600">*</span>
            </span>
          </label>
          <input
            onChange={onFieldChange}
            value={formData.email}
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            required
            className="p-2 focus:outline-none focus:outline-green-500 bg-[#f2f2f2ff] dark:focus:outline-red-700 dark:bg-[#1a1a1aff]"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message">
            <span className="font-semibold">
              Mensaje<span className="text-red-600">*</span>
            </span>
          </label>
          <textarea
            onChange={onFieldChange}
            value={formData.message}
            id="message"
            name="message"
            required
            className="p-2 resize-none h-64 focus:outline-none focus:outline-green-500 bg-[#f2f2f2ff] dark:focus:outline-red-700 dark:bg-[#1a1a1aff]"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className='bg-green-400 p-2 dark:bg-red-600 enabled:hover:bg-green-500 enabled:dark:hover:bg-red-700 disabled:opacity-50 disabled:cursor-wait'
        >
          Enviar
        </button>
      </form>
      <Toaster richColors />
    </article>
  )
}

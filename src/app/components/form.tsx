export const Form = () => {
  return (
    <article className="grow">
      <form className="flex flex-col gap-2">
        <div className="flex flex-col">
          <label htmlFor="email">
            <span className="font-semibold">
              Correo<span className="text-red-600">*</span>
            </span>
          </label>
          <input 
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            required
            className="p-2 focus:outline-none border-2 border-black bg-transparent focus:bg-white"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="body">
            <span className="font-semibold">
              Mensaje<span className="text-red-600">*</span>
            </span>
          </label>
          <textarea
            id="body"
            name="body"
            required
            className="p-2 resize-none h-64 focus:outline-none border-2 border-black bg-transparent focus:bg-white"
          />
        </div>
        <button
          type="submit"
          className="bg-yellow-300 p-2 hover:bg-yellow-400"
        >
          Enviar
        </button>
      </form>
    </article>
  )
}

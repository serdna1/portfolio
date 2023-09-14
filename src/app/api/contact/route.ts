import { mailOptions, transporter } from "@/config/nodemailer-config"
 
export async function POST(req: Request) {
  const {email, message} = await req.json()

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: `Contact form submission from ${email}`,
      html: `
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
      `
    })

    return new Response('Mail sent', {
      status: 200,
    })
  } catch (error) {
    return new Response('Could not send the mail', {
      status: 500,
    })
  }

}

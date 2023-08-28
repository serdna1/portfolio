import { email } from "./config";

const nodemailer = require('nodemailer');

const user = process.env.NODEMAILER_FROM_EMAIL
const pass = process.env.NODEMAILER_FROM_PASSWORD

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user,
    pass,
  },
})

export const mailOptions = {
  from: user,
  to: email
}

 
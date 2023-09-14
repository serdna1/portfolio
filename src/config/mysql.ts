import mysql from 'serverless-mysql'

export const getHost = () => {
  if (process.env.NODE_ENV === 'development')
    return process.env.LOCAL_HOST
  else if (process.env.NODE_ENV === 'production')
    return process.env.PRODUCTION_HOST

  return undefined
}

const dev = process.env.NODE_ENV === 'development'
const prod = process.env.NODE_ENV === 'production'

const host = dev && process.env.DEV_DB_HOST || prod && process.env.PROD_DB_HOST || undefined
const user = dev && process.env.DEV_DB_USERNAME || prod && process.env.PROD_DB_USERNAME || undefined
const password =dev && process.env.DEV_DB_PASSWORD || prod && process.env.PROD_DB_PASSWORD || undefined
const port = parseInt(dev && process.env.DEV_DB_PORT || prod && process.env.PROD_DB_PORT || undefined)
const database = dev && process.env.DEV_DB_NAME || prod && process.env.PROD_DB_NAME || undefined

export const conn = mysql({
  config: {
    host,
    user,
    password,
    port,
    database,
    ssl: {
      rejectUnauthorized: false
    }
  }
})
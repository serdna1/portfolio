export const email = process.env.EMAIL

export const getHost = () => {
  if (process.env.NODE_ENV === 'development')
    return process.env.LOCAL_HOST
  else if (process.env.NODE_ENV === 'production')
    return process.env.PRODUCTION_HOST

  return undefined
} 

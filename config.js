import dotenv from 'dotenv';
dotenv.config()

export const MONGODB_URI   = process.env.MONGODB_URI
export const CL_CLIUD_NAME = process.env.CL_CLIUD_NAME
export const CL_API_KEY    = process.env.CL_API_KEY
export const CL_API_SECRET = process.env.CL_API_SECRET
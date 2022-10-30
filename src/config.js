import {config} from 'dotenv'

config()

export const PORT = process.env.PORT || 3000

export const DB_HOST = process.env.DB_HOST || '191.102.105.2'
export const DB_USER = process.env.DB_USER  || 'laura'
export const DB_PASSWORD = process.env.DB_PASSWORD || 'sofia'
export const DB_PORT = process.env.DB_PORT || 3306
export const DB_DATABASE = process.env.DB_DATABASE ||'8180001921'

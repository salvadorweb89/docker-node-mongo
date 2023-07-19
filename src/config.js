import { config } from "dotenv";
config();

export const PORT = process.env.NODE_LOCAL_PORT;
export const MONGODB_URI = `${process.env.MONGODB_URI}${process.env.MONGODB_DBNAME}`;
export const DEFAULT_USER_NAME = process.env.DEFAULT_USER_NAME;
export const DEFAULT_USER_EMAIL = process.env.DEFAULT_USER_EMAIL;
export const DEFAULT_USER_PASSWORD = process.env.DEFAULT_USER_PASSWORD;
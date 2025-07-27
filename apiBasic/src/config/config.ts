import dotenv from "dotenv";

dotenv.config();

export const DEVELOPMENT = process.env.ENV === "development";
export const TEST = process.env.ENV === "test";

export const HOST_NAME = process.env.HOST_NAME || "localhost";
export const PORT = process.env.PORT || 3000;

export const SERVER = {
  HOST_NAME,
  PORT,
};

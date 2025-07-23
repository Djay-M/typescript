import dotenv from "dotenv";

dotenv.config();

export const DEVELOPMENT = process.env.ENV === "development";
export const TEST = process.env.ENV === "test";

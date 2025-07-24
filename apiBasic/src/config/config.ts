import dotenv from "dotenv";

dotenv.config();

export const DEVELOPMENT = process.env.ENV === "development";
export const TEST = process.env.ENV === "test";

exports.HOST_NAME = process.env.HOST_NAME || "localhost";
exports.PORT = process.env.PORT || 4000;

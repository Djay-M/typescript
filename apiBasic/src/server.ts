import http from "http";
import express from "express";
import "./config/logging";
import { loggingHandler } from "./middleware/loggingHandler";
import { corsHandler } from "./middleware/corsHandler";
import { PORT, SERVER } from "./config/config";

export const application = express();
export let httpServer: ReturnType<typeof http.createServer>;

export const Main = () => {
  logging.info("-----------------------");
  logging.info("Initializing API");
  logging.info("-----------------------");

  application.use(express.urlencoded({ extended: true }));
  application.use(express.json());

  logging.info("-----------------------");
  logging.info("Logging and Configurations");
  logging.info("-----------------------");
  application.use(loggingHandler);
  application.use(corsHandler);

  application.get("/status", (req, res, next) => {
    return res.json({ statusCode: 200, message: "Server Up Running" });
  });

  httpServer = http.createServer(application);
  httpServer.listen(SERVER.PORT, () => {
    logging.info("-----------------------");
    logging.info(`Started Server: ${SERVER.HOST_NAME}:${SERVER.PORT}`);
    logging.info("-----------------------");
  });
};

export const shutdown = (callback: any) => {
  httpServer && httpServer.close(callback);
};

Main();

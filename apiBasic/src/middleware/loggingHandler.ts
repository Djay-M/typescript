import { Request, Response, NextFunction } from "express";

export function loggingHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  logging.log(
    `Incoming - Method: ${req.method} - URL: ${req.path} - IP: ${req.socket.remoteAddress}`
  );

  res.on("finish", () => {
    logging.log(
      `Outgoing - Method: ${req.method} - URL: ${req.path} - Status: ${res.statusCode}`
    );
  });

  next();
}

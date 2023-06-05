import compression from "compression";
import express, { Express } from "express";
import expressRateLimit from "express-rate-limit";
import helmet from "helmet";
import "reflect-metadata";
import { PORT } from "./config/constants";
import routes from "./routes";

export const createApp = (): Express => {
  const app = express();
  app.set(PORT, process.env.PORT || 8000);

  app.use(expressRateLimit({ windowMs: 60 * 1000, max: 30 }));
  app.use(helmet());
  app.use(compression());
  app.use(express.json());
  return app;
};

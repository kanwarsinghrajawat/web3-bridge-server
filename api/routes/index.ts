import express, { Application } from "express";
import paramsRouter from "./paramsRoute";
import quotesRouter from "./quotesRoute";
import tokensRouter from "./tokensRoute";

const routes = (app: Application) => {
  app.use("/api", paramsRouter);
  app.use("/api", quotesRouter);
  app.use("/api", tokensRouter);
};

export default routes;

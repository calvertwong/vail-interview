import express from "express";
import { invokeMiddlewares } from "./middlewares";
import { invokeRoutes } from "./routes";

export const server: express.Application = express();

/**
 * stored all middlewares in the middlewares folder to keep server.ts file clean
 * call invokeMiddlewares() to server.use() all middlewares
 */
invokeMiddlewares();

/**
 * stored all routes in the routes folder to keep server.ts file clean
 * call invokeRoutes() to server.use() all routes
 */
invokeRoutes();


server.listen(30000, () => {
  console.log(`Server is running on port 30000.......`);
});

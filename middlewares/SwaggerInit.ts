import { server } from "../server";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json";

// auto generate swagger
export function swaggerInit(): void {
  server.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

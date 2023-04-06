import { expressParser } from "./ExpressParser";
import { swaggerInit } from "./SwaggerInit";

export function invokeMiddlewares() {
  expressParser();
  swaggerInit();
}

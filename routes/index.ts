import { server } from "../server";
import { postRouter } from "./postRoutes";

export function invokeRoutes(){
  server.use("/api", postRouter);
}
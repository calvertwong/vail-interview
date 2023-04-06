import express from "express";
import { postRouter } from "./routes/post/ping";
import { expressParser } from "./middlewares/ExpressParser";

export const server: express.Application = express();

expressParser();

server.use("/api", postRouter);

server.listen(30000, () => {
  console.log(`Server is running on port 30000.......`);
});

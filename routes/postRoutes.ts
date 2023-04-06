import { PingRequest } from "../controllers/pingRequest/PingRequest";
import express, { Router } from "express";

export const postRouter: Router = express.Router();

postRouter.post("/ping", PingRequest);

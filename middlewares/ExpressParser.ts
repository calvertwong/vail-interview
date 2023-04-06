import express from "express";
import { server } from "../server";

export function expressParser(): void {
  server.use(express.json());
  server.use(
    express.urlencoded({
      extended: true,
    })
  );
}

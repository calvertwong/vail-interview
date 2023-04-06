import { Request, Response } from "express";
import axios from "axios";
require("dotenv").config();
import packageJson from "../../package.json";

export const PingRequest = async (req: Request, res: Response) => {
  const { message }: { message: string } = req.body;

  axios
    .get(`https://postman-echo.com/get?message=${message}`)
    .then((response) => {

      const finalResponse: {
        data: any;
        env: string;
        timeStamp: string;
        buildVer: string;
      } = {
        data: response.data,
        env: process.env.ENV || "development",
        timeStamp: Math.floor(Date.now() / 1000).toString(),
        buildVer: packageJson.version,
      };

      res.status(200).json(finalResponse);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

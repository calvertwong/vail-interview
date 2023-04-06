import { Request, Response } from "express";
import axios from "axios";
require("dotenv").config();
import packageJson from "../../package.json";
import { FinalResponseType } from "entities/FinalResponse";

export const PingRequest = async (req: Request, res: Response) => {
  try {
    const { message }: { message: string } = req.body;

    const response = await axios.get(
      `https://postman-echo.com/get?message=${message}`
    );
    const finalResponse: FinalResponseType = {
      output: response.data,
      env: process.env.ENV || "development",
      timeStamp: Math.floor(Date.now() / 1000).toString(),
      buildVer: packageJson.version,
    };

    res.status(200).json(finalResponse);
  } catch (error) {
    res.status(400).json(error);
  }
};

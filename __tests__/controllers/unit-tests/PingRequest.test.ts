import axios from "axios";
import { Request, Response } from "express";
import { PingRequest } from "../../../controllers/pingRequest/PingRequest";

jest.mock("axios");

describe("PingRequest Unit test", () => {
  let mockReq: Partial<Request>;
  let mockRes: Partial<Response>;

  beforeEach(() => {
    mockReq = { body: { message: "Hello" } };
    mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("Unit test happy path", async () => {
    const mockResponse = { data: "Hello" };
    (axios.get as jest.Mock).mockResolvedValueOnce(mockResponse);

    await PingRequest(mockReq as Request, mockRes as Response);

    expect(axios.get).toHaveBeenCalledWith(
      "https://postman-echo.com/get?message=Hello"
    );
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith({
      output: mockResponse.data,
      env: process.env.ENV || "development",
      timeStamp: Math.floor(Date.now() / 1000).toString(),
      buildVer: expect.any(String),
    });
  });

  it("Unit test sad path", async () => {
    const mockError = new Error("Connection error");
    (axios.get as jest.Mock).mockRejectedValueOnce(mockError);

    await PingRequest(mockReq as Request, mockRes as Response);

    expect(axios.get).toHaveBeenCalledWith(
      "https://postman-echo.com/get?message=Hello"
    );
    expect(mockRes.status).toHaveBeenCalledWith(400);
    expect(mockRes.json).toHaveBeenCalledWith(mockError);
  });
});

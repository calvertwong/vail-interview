import axios, { AxiosResponse } from "axios";

describe("Integration test ping request", () => {
  // success response
  it("Integration test happy path", async () => {
    const body = { message: "Hello" };
    const response: AxiosResponse = await axios.post(
      "http://localhost:30000/api/ping",
      body
    );
    expect(response.status).toBe(200);
    expect(response.data.output.args.message).toBe("Hello");
  });

  // it("Test sad path", async () => {
  // not available because there is no available way to force a bad request with the Postman echo endpoint
  // });
});

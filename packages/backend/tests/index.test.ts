import supertest from "supertest";
import { server } from "../src";

const request = supertest(server);

afterAll(() => {
  server.close();
});

describe("GET /", () => {
  it("responds with 200", async () => {
    const response = await request.get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello World!");
  });
});

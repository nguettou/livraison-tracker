const request = require("supertest");
const express = require("express");

const app = express();
app.use(express.json());

app.get("/test", (req, res) => {
  res.status(200).json({ message: "Server is running" });
});

describe("GET /test", () => {
  it("should return a message", async () => {
    const res = await request(app).get("/test");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("message", "Server is running");
  });
});

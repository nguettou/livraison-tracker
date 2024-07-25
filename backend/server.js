// backend/server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/test", (req, res) => {
  res.status(200).json({ message: "Server is running" });
});

app.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});

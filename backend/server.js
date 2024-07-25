const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});

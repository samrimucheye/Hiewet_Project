const express = require("express");
const colors = require("colors");
const { createServer } = require("http");
const { config } = require("dotenv");
config();

const app = express();

const server = createServer(app);

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

server.listen(port, () => {
  console.log(
    `Server Running on Port:http://localhost:${port}`.bgYellow.underline
  );
});

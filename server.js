const express = require("express");
const server = express();
const bodyParser = require("body-parser");

const createResponse = require("./Marusya10");

server
  .use(bodyParser.json())
  .post("/cottage-cheese", (req, res) => res.json(createResponse(req.body)))
  .listen(process.env.PORT || 5000);
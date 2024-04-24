const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser"); // Import body-parser

require("dotenv").config();
const db = require("./MongoDBConnection");
const auth = require("./auth");
const post = require("./PostAuth");
const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "20mb" })); // Set payload size limit to 10 megabytes

app.use(express.json());
app.listen(5000, () => {
  console.log("server running");
});
app.use((req, res, next) => {
  console.log(`${req.method} request received for ${req.url}`);
  res.on("finish", () => {
    console.log(`${req.method} response sent for ${req.url}`);
  });
  next();
});
//routers
app.use("/user", auth);
app.use("/posts", post);

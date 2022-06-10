require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
var path = require("path");
var rfs = require("rotating-file-stream");
const cors = require("cors");
const app = express();
const db = require("./app/models");

var corsOptions = {
  origin: "http://localhost:8081",
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// create a rotating write stream
var accessLogStream = rfs.createStream("access.log", {
  interval: "1d", // rotate daily
  path: path.join(__dirname, "log"),
});

// log only 4xx and 5xx responses to console
app.use(
  morgan("dev", {
    skip: function (req, res) {
      return res.statusCode < 400;
    },
  })
);
// setup the logger
app.use(morgan("combined", { stream: accessLogStream }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Amahus api." });
});

// use only to drop the database and re-sync
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});
// db.sequelize.sync();

// set port, listen for requests
const PORT = process.env.PORT || 8080;
require("./app/routes/tutorial.routes")(app);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

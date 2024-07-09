const express = require("express");

const Router = express.Router();

const student = require("../controllers/student.controller");

Router.get("/", student.studentDashboard);

Router.get("/home", function (req, res) {
  res.sendFile(__dirname + "/home.html");
});

Router.get("/dashboard", function (req, res) {
  res.sendFile(__dirname + "/dashboard.html");
});

module.exports = Router;

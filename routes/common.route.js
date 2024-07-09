const express = require("express");

const Router = express.Router();

const message = require("../constant/message");

const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";

const dbConnect = async () => {
  const connect = await MongoClient.connect(url);
  console.log("connect", connect);

  const db = await connect.db("Realstate");//database connect

  const collection = db.collection("users");//collection join with db

  console.log("collection", collection);

  return collection;//return collection as users
};


// const student = require("../controllers/student.controller");

Router.post("/api/login", function (req, res) {
  console.log("req data", req);
  console.log("req body data", req.body);
  const { username, password } = req.body;
  if (username && password) {
    res.send({
      message: message.success.loginMessage,
      status: 1,
      data: { username, password },
    });
  } else {
    res.send({ message: message.error.loginMessage, status: 0 });
  }
  //json data response
});

Router.post("/api/register", async function (req, res) {
  console.log("req data", req);
  console.log("req body data", req.body);
  const { firstname, lastname, username, password } = req.body;
  if (firstname && lastname && username && password) {

    const users=await dbConnect();
    const insertUser=users.insertOne({firstname, lastname, username, password});
    if(insertUser){
      res.send({
        message: message.success.registerMessage,
        status: 1,
        data: { firstname, lastname, username, password },
      });
    }
    else{
      res.send({
        message: "User registrationm failed",
        status: 0,
      });
    }
   
  } else {
    res.send({ message: message.error.registerMessage, status: 1 });
  }
  //json data response
});
module.exports = Router;

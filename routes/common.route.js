const express = require("express");

const Router = express.Router();

const message = require("../constant/message");

const dbConnect=require("../db/dbConnect");



// const student = require("../controllers/student.controller");

Router.post("/api/login", async function (req, res) {
  console.log("req body data", req.body);
  const { username, password } = req.body;
  if (username && password) {
    const users=await dbConnect();
    const userFind=await users.findOne({username});
    if(userFind){
      if(userFind.password==password){
        res.send({message:"user login successfully",status:1});
      }
      else{
        res.send({message:"entered email or password is invalid,please check again",status:0});
      }
    }
    else{
      res.send({
        message: "user not found, please register first",
        status: 0
      });
    }
  } else {
    res.send({ message: message.error.loginMessage+"all fields are mandatory", status: 0 });
  }
});

Router.post("/api/register", async function (req, res) {
  console.log("req data", req);
  console.log("req body data", req.body);
  const { firstname, lastname, username, password,role } = req.body;
  if (firstname && lastname && username && password) {
    const users = await dbConnect();

    const userFind = await users.findOne({ username });

    console.log("userFind", userFind);

    if (userFind) {
      res.send({ message: "user already registered please login", status: 0 });
    } else {
      const insertUser = users.insertOne({
        firstname,
        lastname,
        username,
        password,
        role
      });
      if (insertUser) {
        res.send({
          message: message.success.registerMessage,
          status: 1,
          data: { firstname, lastname, username, password },
        });
      } else {
        res.send({
          message: "User registrationm failed",
          status: 0,
        });
      }
    }
  } else {
    res.send({ message: message.error.registerMessage, status: 0 });
  }
  //json data response
});


//get role api
Router.get("/api/get-role/:email",async (req,res)=>{
  const email=req.params.email;
  const users = await dbConnect();
  const userFind = await users.findOne({ username:email });
  if(userFind){
    res.send({message:"User role fetched successfully",status:1,role:userFind.role})
  }
  else{
    res.send({message:"User role not fetched",status:0});
  }
})


//user delete

Router.get("/api/delete/:email",async (req,res)=>{
  const email=req.params.email;
  const users = await dbConnect();
  const userDelete = await users.deleteOne({ username:email });
  if(userDelete){
    res.send({message:"User Deleted successfully",status:1,})
  }
  else{
    res.send({message:"User not Deleted",status:0});
  }
})
module.exports = Router;

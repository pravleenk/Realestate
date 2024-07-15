const { MongoClient } = require("mongodb");
const mongoose=require("mongoose");

const url = "mongodb://127.0.0.1:27017/Realstate";

// const dbConnect = async () => {
//   const connect = await MongoClient.connect(url);

//   const db = await connect.db("Realstate"); //database connect

//   const collection = db.collection("users"); //collection join with db

//   return collection; //return collection as users
// };

const dbConnect = async () => {
  mongoose
    .connect(url)
    .then(() => {
      console.log("database connected successfully");
    })
    .catch((err) => {
      console.log("database not connected", err.message);
    });
};

module.exports = dbConnect;

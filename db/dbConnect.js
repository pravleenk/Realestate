const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";

const dbConnect = async () => {
  const connect = await MongoClient.connect(url);

  const db = await connect.db("Realstate"); //database connect

  const collection = db.collection("users"); //collection join with db

  return collection; //return collection as users
};


module.exports=dbConnect;
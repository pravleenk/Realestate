const express = require("express");
const bodyParser = require("body-parser"); //parse the req.body.parameter or parse the incoming request
const studentRouter = require("./routes/student.route");
const commonRouter=require("./routes/common.route");
const userRouter = require("./routes/user.route");
const port = 9000;
const app = express();
const dbConnect=require("./db/dbConnect");
dbConnect();
const User=require("./models/user.model");
console.log("user",User);
const Property=require("./models/property.model");
console.log("Property",Property);

const data=new User({
  firstname:"Durgesh",
  lastname:"Prajapat",
  username:"durgesh@gmail.com",
  password:"123@123",
  status:1,
  credits:1000
})

 data.save();
// parse incoming body data in the form of application/json
app.use(bodyParser.json());

//common router endpoint
app.use("/",commonRouter);

//student router endpoint
app.use("/student",studentRouter);

//user router endpoint
app.use("/user",userRouter);

app.listen(port, function () {
  console.log(`listening on port http://localhost:${port}`);
});

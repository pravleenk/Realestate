const express = require("express");
const path=require("path");
const hbs=require('hbs');

const bodyParser = require("body-parser"); //parse the req.body.parameter or parse the incoming request
const studentRouter = require("./routes/student.route");
const commonRouter=require("./routes/common.route");
const userRouter = require("./routes/user.route");
const port = 9000;
const app = express();

//set view-engine
app.set('view-engine','hbs');
app.set('views','views');

const dbConnect=require("./db/dbConnect");
dbConnect();
const Property=require("./models/property.model");
console.log("Property",Property);


// parse incoming body data in the form of application/json
app.use(bodyParser.json());

app.get("/loginpage",(req,res)=>{
  res.render("login.hbs",{data:{name:"Durgesh",address:"Indore,(M.P.)"}});
})

//common router endpoint
app.use("/",commonRouter);

//student router endpoint
app.use("/student",studentRouter);

//user router endpoint
app.use("/user",userRouter);

app.listen(port, function () {
  console.log(`listening on port http://localhost:${port}`);
});

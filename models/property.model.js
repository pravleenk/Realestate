const mongoose = require("mongoose");
const propertySchema = new mongoose.Schema({
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  properyDetails:{
    type:String
  },
  benefits:{
    type:String
  },
  services:{
    type:String
  },
  images:{
    type:String
  },
  area:{
    type:String
  },
  price:{
    type:Number
  },
  sellerId: {
    type: String,
  },
  address: {
    type: String,
  },
  contactNumer: {
    type: String,
  },
  status: {
    type: String,
  },
  createdAt:{
    type:Date
  },
  updatedAt:{
    type:Date
  }
});

const Property = new mongoose.model("Property", propertySchema);

module.exports = Property;

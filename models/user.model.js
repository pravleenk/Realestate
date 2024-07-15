const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    firstname:{
        type:String,
    },
    lastname:{
        type:String,
    },
    username:{
        type:String,
    },
    password:{
        type:String,
    },
    credits:{
        type:Number
    },
    status:{
        type:Boolean
    }
})

const User=new mongoose.model("User",userSchema);

module.exports=User;
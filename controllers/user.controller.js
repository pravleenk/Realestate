const users = require("../data/user.data");
const emailSend = require("../helper/email-send");
const otpGenerator = require("otp-generator");
const getUsers = async (req, res) => {
  res.send({
    message: "all users data fetched successfully",
    status: 1,
    users: users,
  }); //json data response
};

const getUserById = async (req, res) => {
  console.log("req.params.id", req.params.id);
  const user = users.filter((data) => {
    return data.id == req.params.id;
  });
  if (user.length > 0) {
    res.send({
      message: "specific user fetched successfully",
      status: 1,
      user: user,
    });
  } else {
    res.send({ message: `user not found with id ${req.params.id}`, status: 0 });
  }
};

const userDelete = function (req, res) {
  console.log("req.params.id", req.params.id);
  let isFind = false; //false
  for (var i in users) {
    if (req.params.id == users[i].id) {
      isFind = true;
      break;
    }
  }
  if (isFind) {
    const user = users.filter((data) => {
      return data.id != req.params.id;
    });
    if (user.length > 0) {
      res.send({
        message: "delete specific user successfully",
        status: 1,
        user: user,
      });
    }
  } else {
    res.send({ message: `user not found with id ${req.params.id}`, status: 0 });
  }
};

const resetPassword = async function (req, res) {
  const email = req.body.email;
  const otp = otpGenerator.generate(4, {
    upperCaseAlphabets: false,
    specialChars: false,
    lowerCaseAlphabets: false,
  });
  console.log("otp", otp);
  const message = await emailSend(email, otp, "reset");
  if (message) {
    res.send({
      message: "otp sent in your email address,please check",
      status: 1,
    });
  }
};

const userEmailSend = async function (req, res) {
  const email = req.body.email;
  const message = await emailSend(email, "", "welcome");
  if (message) {
    res.send({ message: "message sent in your email address", status: 1 });
  }
};

const userUpload = async (req, res) => {
  console.log("req", req.file);
  if(req.file.filename){
    res.send({ message: "file uloading success", status: 1 });
  }
  else res.send({ message: "failed to upload file", status: 0 });
};

module.exports = {
  getUsers,
  getUserById,
  userDelete,
  resetPassword,
  userEmailSend,
  userUpload,
};

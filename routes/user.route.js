const express = require("express");
const userController = require("../controllers/user.controller");
const Router = express.Router();

const multer = require("multer"); //multer is a middleware
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

Router.get("/", function (req, res) {
  res.send({
    message: "welcome to the user root",
    status: 1,
  }); //json data response
});

Router.get("/api/get-users", userController.getUsers);

Router.get("/api/user/:id", userController.getUserById);

Router.get("/api/user/delete/:id", userController.userDelete);

Router.post("/api/reset-password", userController.resetPassword);

Router.post("/api/emailsend", userController.userEmailSend);

Router.post("/api/upload", upload.single("image"), userController.userUpload);

module.exports = Router;

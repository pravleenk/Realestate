const nodemailer = require("nodemailer");
const emailSend = async (user,otp,type) => {
  try {
    const email = "12365ak@gmail.com";
    console.log("email in /api/emailsend api", email);
    var transport = nodemailer.createTransport({
      host: "smtp.gmail.com", //gmail hostname
      port: 465,
      auth: {
        user: "durgeshuniversal1037@gmail.com", //user email address
        pass: "tidcpbqyntbxhhif", //app password
      },
    });
    const info = await transport.sendMail({
      from: "durgeshuniversal1037@gmail.com", // sender address
      to: user, // list of receivers
      subject: type=="reset"?"Reset Password ✔":"Welcome Message", // Subject line
      text: "Hello all , student this is mern stack class by durgesh?", // plain text body
      html: type=="reset"?`<b>Hello user , your otp is ${otp}.</b>`:`<b>Hello welcome user</b>`, // html body
    });
    console.log("info", info);
    return info;
  } catch (error) {
    console.log("server error", error.message);
  }
};


module.exports =emailSend

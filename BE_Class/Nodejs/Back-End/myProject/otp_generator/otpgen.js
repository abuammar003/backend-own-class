// const express = require("express");
// const cors = require("cors");
// const app = express();

// app.use(express.json());
// app.use(
//   cors({
//     origin: "*",
//   })
// );

// function otpGenerate() {
//   return Math.floor(100000 + Math.random() * 999999);
// }

// console.log(otpGenerate());

// let currentOtp = null;
// let currentPhone = null;

// app.post("/request-otp", (req, res) => {
//     const {phone} = req.body;

//     if(!phone || phone.length !== 10) {
//         return res.json({
//             success: false,
//             message: "Enter a Valid Number!"
//         });
//     }

//   currentPhone = phone;  
//   currentOtp = otpGenerate();

//   res.json({
//     success: false,
//     message: "OTP Genrated Successfully!",
//     currentOtp,
//   });
// });


// app.post("/verify-otp", (req, res) => {
//   const { otp } = req.body;

//   if (otp === String(currentOtp)){
//      return res.json({
//         success: true,
//         message: "OTP Verified Successfully!"
//     });
//   }

//   if (otp !== currentOtp) {
//       return res.json({
//         success: false,
//         message: "OTP does'nt Match!"
//     });
//   } 
  
// });


// app.listen("8080", () => {
//   console.log("The OTP Generator Server is On");
// });





// Practice OTP Gen =>

const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors({
  origin: "*"
}));

let currentOtp = null;
let curruntPhone = null;

function generateOTP() {
  return Math.floor(100000 + Math.random() * 999999)
}

console.log(generateOTP());

app.post("/request-otp", (req, res) => {

  const {phone} = req.body;
  if(!phone) {
    return res.json({
      success: false,
      message: "Enter Phone Number!"
    });
  }

  if(phone.length != 10) {
    return res.json({
      success: false,
      message: "Enter a Valid Number!"
    });
  }

  currentOtp = generateOTP();
  curruntPhone = phone;

  res.json({
    success: true,
    message: "OTP Generated Successfully!",
    currentOtp
  });

});

app.post("/verify-otp", (req, res) => {

  const {otp} = req.body;

  if (otp === String(currentOtp)) {
    return res.json({
      success: true,
      message: "OTP Verified Successfully!"
    });
  }

  if(otp !== currentOtp) {
    return res.json({
      success: false,
      message: "OTP Does Not Match!"
    });
  }

});

app.listen("8080", () => {
  console.log("OTP Generator Server is Active!");
});
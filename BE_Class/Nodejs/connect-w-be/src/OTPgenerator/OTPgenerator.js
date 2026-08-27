import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./OTPgenerator.css";
import { requestOtp, verifyOtp } from "./api";

function OTPgenerator() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [genOtp, setGenOTP] = useState("");
  const [showOtpPage, setshowOtpPage] = useState(false);
  const [showPhonePage, setShowPhonePage] = useState(true);
  console.log(otp);

  const inputRef = useRef([]);
 
  const requestOTP = async () => {
    try {
    const response =  await requestOtp(phone);
    setGenOTP(response.data.currentOtp);
    // toast.success(response.data.message);

    const {success, message} = response.data;  
    if(success) {
      toast.success(message);
      setShowPhonePage(false);
      setshowOtpPage(true);
      setPhone("")
    } else {
      toast.error(message)
    }

    } catch(error) {
      toast.error("Something Went's Wrong!");
    }
  }

  const handleVerifyOtp = async () => {
    try{
      const res = await verifyOtp(otp.join(""));
      // toast.success(res.data.message);
      const {success, message} = res.data;
      if(success) {
        toast.success(message);
        setShowPhonePage(true);
        setshowOtpPage(false);
        setOtp("")
      } else {
        toast.error(message);
      }

    } catch (error) {
      toast.error("Error in Verifying OTP");
    }
  }

  const handleChange = (index, e) => {
    const value = e.target.value;
    
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if(value && index < otp.length -1) {
      inputRef.current[index + 1].focus();
    }

  }

  const backtoPhoneNum = () => {
    setshowOtpPage(false);
    setShowPhonePage(true);
    setOtp("");
  }


  return (

    <div className="main"> 
      <h1>OTP Verification</h1>
      {/* <p>{message}</p> */}
      <ToastContainer position="top-center" autoClose={2000}/>

      <div className="form">

        {showPhonePage && <div className="phone-form">
          <h3>Enter a Valid Phone Number</h3>
          <input
            type="text"
            placeholder="Mobile Number"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
          <button onClick={requestOTP}>Request OTP</button>
        </div>}


        {showOtpPage && <div className="otp-form">
          <h3>OTP Sent to Registered Mobile Number</h3>
          <h2>OTP: {genOtp}</h2>
          <div className="otpInputs">
            {otp.map((value, index) => (
              <input
              key={index}
              type="text"
              maxLength={1}
              id="otp"
              ref={(element) => (inputRef.current[index] = element)}
              value={value}
              onChange={(e) => handleChange(index, e)}
              />
            ))}
          </div>

          {/* <input type="number" id="otp" placeholder="Enter OTP" onChange={(e) => setOtp(e.target.value)} value={otp} /> */}
          <div className="otp_Btns">
            <button onClick={handleVerifyOtp} className="otp_Submit">Submit</button>
            <button onClick={backtoPhoneNum} className="back_toPhone">Back</button>
          </div>  

        </div>}

      </div>
    </div>
    
  );
}

export default OTPgenerator;




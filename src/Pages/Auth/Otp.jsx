import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import OTPInput from "react-otp-input";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { forgotPassword } from "../../redux/apiSlice/Authentication/forgotPasswordSlice";
import { otpVerify } from "../../redux/apiSlice/Authentication/otpVerifySlice";

const Otp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const { email } = useParams();

  const handleResendEmail = () => {
    dispatch(forgotPassword(email))

  };
  const handleVerifyOtp=()=>{
    dispatch(otpVerify({emailVerifyCode: otp, email: email}))
    .then((response)=>{
      if(response?.type === "otpVerify/fulfilled"){
        Swal.fire({
          position: "center",
          icon: "success",
          title: response?.payload,
          showConfirmButton: false,
          timer: 1500
        }).then((response)=>{
          navigate(`/update-password/${email}`)
        }) 
      }else{
        Swal.fire({
          position: "center",
          icon: "error",
          title: response?.payload,
          showConfirmButton: false,
          timer: 1500
        })
      }
    });
  }

  return (
    <div
      style={{
        width: "100%",
        background: "#BFF2EE",
        height: "100vh",
        display:"flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <div style={{width: "630px",  background: "white", borderRadius: "12px", padding: "90px 57px"}}>
        <h1 style={{fontSize: "32px", color: "#6A6D7C", marginBottom: "13px", textAlign: "center"}}>Check your email</h1>
        <p style={{width: "380px", color: "#B8B8B8",  margin: "0 auto 0 auto"}}>
          We sent a reset link to <span style={{color: "#545454"}}> contact@dscode...com </span>
          enter 6 digit code that mentioned in the email
        </p>
        <div style={{display: "flex", alignItems: "center", justifyContent: "center", marginTop: "30px",}}>
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            inputStyle={{
              height: "44px",
              width: "44px",
              borderRadius: "8px",
              marginRight: "16px",
              fontSize: "20px",
              border: "1px solid #A9A9A9",
              color: "#2B2A2A",
              outline: "none"
            }}
            renderInput={(props) => <input {...props} />}
          />
        </div>
        <Button
          onClick={handleVerifyOtp}
              block
              htmlType="submit"
              style={{
                height: "52px",
                fontWeight: "400px",
                fontSize: "18px",
                color: "white",
                background: "#2FD5C7",
                marginTop: "30px",
                border: "none",
                outline: "none",
                marginBottom: "20px"
              }}
            >
              Verify
        </Button>
        <p style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
          Didn’t receive code?
          <p onClick={handleResendEmail} style={{color: "#2FD5C7", textDecoration: "underline", cursor: "pointer"}}>Resend </p>
        </p>
      </div>
    </div>
  );
};

export default Otp;

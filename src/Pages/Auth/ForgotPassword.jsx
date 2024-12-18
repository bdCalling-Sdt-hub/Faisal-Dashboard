import { Button, Form, Input, Typography } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { forgotPassword } from "../../redux/apiSlice/Authentication/forgotPasswordSlice";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const onFinish = (values) => {
    dispatch(forgotPassword(values))
    .then((response)=>{
      if(response?.type === "forgotPassword/fulfilled"){
        Swal.fire({
          position: "center",
          icon: "success",
          title: response?.payload,
          showConfirmButton: false,
          timer: 1500
        }).then((response)=>{
          navigate(`/otp/${values.email}`)
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
  };


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
      <Form 
        name="normal_login"
        className="password-form"
        initialValues={{
          remember: true,
        }}
        style={{width: "630px", background: "white", borderRadius: "12px", padding: "90px 57px"}}
        
        onFinish={onFinish}
      >
        <h1 style={{fontSize: "32px", marginBottom: "54px", color: "#494949", textAlign: "center"}}>Forgot Password</h1>

          <div style={{marginBottom: "24px"}}>
            <label htmlFor="email" style={{display: "block", marginBottom: "5px" }}> Email Address</label>
            <Form.Item
              style={{marginBottom: 0}}
              name="email"
              id="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input
                placeholder="Enter your email address"
                type="email"
                style={{
                  border: "1px solid #E0E4EC",
                  height: "52px",
                  background: "white",
                  borderRadius: "8px",
                  outline: "none",
                }}

              />
            </Form.Item>
          </div>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              block
              style={{
                height: "45px",
                fontWeight: "400px",
                fontSize: "18px",
                background: "#2FD5C7",
                color: "white",
                alignSelf: "bottom",
                marginTop: "30px",
              }}
            >
              Send a Code
            </Button>
          </Form.Item>
      </Form>
    </div>
  );
};

export default ForgotPassword;

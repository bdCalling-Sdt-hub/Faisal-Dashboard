import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { resetPassword } from "../../redux/apiSlice/Authentication/resetPasswordSlice";
import { useDispatch } from "react-redux";

const UpdatePassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [err, setErr] = useState("");
  const { email } = useParams()


  const onFinish = (values) => {
    if(values.password !== values.confirmPassword){
      return setErr("Password Doesn't Match")
    }else{
      setErr("")
    }

    dispatch(resetPassword({...values, email: email}))
    .then((response)=>{
      if(response?.type === "resetPassword/fulfilled"){
        Swal.fire({
          position: "center",
          icon: "success",
          title: response?.payload,
          showConfirmButton: false,
          timer: 1500
        }).then((response)=>{
          navigate(`/login`)
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
        className="login-form"
        initialValues={{
          remember: true,
        }}
        style={{width: "630px", background: "white", borderRadius: "12px", padding: "90px 57px"}}
        onFinish={onFinish}
      >
        <h1 style={{fontSize: "32px", color: "#6A6D7C", marginBottom: "13px", textAlign: "center"}}>Set a new password</h1>
        <p style={{width: "275px", color: "#6A6D7C", fontSize: "14px", fontWeight: 400,  margin: "0 auto 0 auto"}}>
          Create a new password. Ensure it differs from
          previous ones for security
        </p>
    
        <div style={{margin: "45px 0 20px 0"}}>
            <label style={{display: "block", color:"#6A6D7C", marginBottom: "5px" }} htmlFor="">New Password</label>
            <Form.Item
                name="password"
                rules={[
                    {
                    required: true,
                    message: "Please input your New Password!",
                    },
                ]}
                style={{marginBottom: 0}}
            >
                <Input.Password
                    type="password"
                    placeholder="Enter New password"
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
    
        <div style={{marginBottom: "40px"}}>
            <label style={{display: "block", color:"#6A6D7C", marginBottom: "5px" }} htmlFor="email">Confirm Password</label>
            <Form.Item
                style={{marginBottom: 0}}
                name="confirmPassword"
                rules={[
                    {
                    required: true,
                    message: "Please input your Confirm Password!",
                    },
                ]}
            >
                <Input.Password
                    type="password"
                    placeholder="Enter Confirm password"
                    style={{
                    border: "1px solid #E0E4EC",
                    height: "52px",
                    background: "white",
                    borderRadius: "8px",
                    outline: "none",
                    }}
                />
            </Form.Item>
            { err && <label style={{display: "block", color: "red"}} htmlFor="error">{err}</label>}
        </div>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            style={{
              border: "none",
              height: "51px",
              background: "#2FD5C7",
              color: "white",
              borderRadius: "8px",
              outline: "none",
              marginTop: ""
            }}
          >
            UPDATE
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UpdatePassword;

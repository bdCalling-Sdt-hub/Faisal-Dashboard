import { Button, Form, Input } from "antd";
import React, { useState } from "react";

const UpdatePassword = () => {
  const [newPassError, setNewPassError] = useState("");
    const [conPassError, setConPassError] = useState("");
    const [curPassError, setCurPassError] = useState("");
  const [err, setErr] = useState("");
  const onFinish = (values) => {
    const { password, confirmPassword } = values;

    if (password.length < 8) {
      setErr("Password must be 8 character");
      return;
    }
    if (password !== confirmPassword) {
      setErr("Please enter the same password!");
      return;
    }
    if (!password || !confirmPassword) {
      setErr("Please give your changes password");
      return;
    }
    if (!/(?=.*[!@#$&*])/.test(password)) {
      setErr("Ensure string has one special case letter.");
      return;
    }
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setErr("Ensure string has two uppercase letters.");
      return;
    }
    if (!/(?=.*[a-z].*[a-z].*[a-z])/.test(password)) {
      setErr("Ensure string has three lowercase letters.");
      return;
    }
    if (!/(?=.*[0-9].*[0-9])/.test(password)) {
      setErr("Ensure string has two digits");
      return;
    }
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
        <p style={{width: "300px", color: "#B8B8B8", marginBottom: "40px", margin: "0 auto 0 auto"}}>
          Create a new password. Ensure it differs from
          previous ones for security
        </p>
    
        <div style={{marginBottom: "20px"}}>
            <label style={{display: "block", marginBottom: "5px" }} htmlFor="">New Password</label>
            <Form.Item
                name="new_password"
                rules={[
                    {
                    required: true,
                    message: "Please input your new Password!",
                    },
                ]}
                style={{marginBottom: 0}}
            >
                <Input.Password
                    type="password"
                    placeholder="Enter password"
                    style={{
                    border: "1px solid #E0E4EC",
                    height: "52px",
                    background: "white",
                    borderRadius: "8px",
                    outline: "none",
                    }}
                />
            </Form.Item>
            { newPassError && <label style={{display: "block", color: "red"}} htmlFor="error">{newPassError}</label>}
        </div>
    
        <div style={{marginBottom: "40px"}}>
            <label style={{display: "block", marginBottom: "5px" }} htmlFor="email">Re-Type Password</label>
            <Form.Item
                style={{marginBottom: 0}}
                name="confirm_password"
                rules={[
                    {
                    required: true,
                    message: "Please input your Re-type Password!",
                    },
                ]}
            >
                <Input.Password
                    type="password"
                    placeholder="Enter password"
                    style={{
                    border: "1px solid #E0E4EC",
                    height: "52px",
                    background: "white",
                    borderRadius: "8px",
                    outline: "none",
                    }}
                />
            </Form.Item>
            { conPassError && <label style={{display: "block", color: "red"}} htmlFor="error">{conPassError}</label>}
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

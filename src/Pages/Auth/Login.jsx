import { Button, Checkbox, Form, Input } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { login } from "../../redux/apiSlice/Authentication/loginSlice";
import Swal from "sweetalert2";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector(state=> state.login)


  const onFinish = (values) => {
    dispatch(login(values)).then((response)=>{
        if(response?.type === "login/fulfilled" && (response?.payload?.role === "ADMIN" || response?.payload?.role === "SUPER ADMIN") ){
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Logged in Successfully",
            showConfirmButton: false,
            timer: 1500
          }).then(()=>{
            navigate("/")
          }) 
        }else{
          Swal.fire({
            position: "center",
            icon: "error",
            title: response?.payload?.role === "USER" ?  "Unauthorized User" : response?.payload,
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
          <h1 style={{fontSize: "32px", color: "#6A6D7C", textAlign: "center"}}>Login in to Account</h1>
          <div style={{marginBottom: "24px"}}>
            <label htmlFor="email" style={{display: "block", marginBottom: "5px" }}> Email </label>
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

          <div style={{marginBottom: "24px"}}>
            <label style={{display: "block", marginBottom: "5px" }} htmlFor="password">Password</label>
            <Form.Item
              style={{marginBottom: 0}}
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input.Password
                type="password"
                placeholder="Enter your password"
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


          <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox style={{color: "#6A6D7C"}}>Remember me</Checkbox>
            </Form.Item>
            <a
              className="login-form-forgot"
              style={{ color: "#6A6D7C" }}
              href="/forgot-password"
            >
              Forgot password
            </a>
          </div>

          <Form.Item
            style={{marginBottom: 0}}
          >
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              block
              style={{
                height: "52px",
                fontWeight: "400px",
                fontSize: "18px",
                background: "#2FD5C7",
                marginTop: "56px",
              }}
            >
              {loading ? "Loading" : "Sign In"}
            </Button>
          </Form.Item>
        </Form>
    </div>
  );
};

export default Login;

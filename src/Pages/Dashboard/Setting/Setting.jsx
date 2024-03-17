import { Button, Form, Input, Modal, Switch, Typography } from "antd";
import React, { useState } from "react";
import { LiaAngleRightSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";

const { Paragraph, Title, Text } = Typography;

const Setting = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [openChangePassModel, setOpenChangePassModel] = useState(false);
  const [verify, setVerify] = useState(false);
  const [updatePassword, setUpdatePassword] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [newPassError, setNewPassError] = useState("");
  const [conPassError, setConPassError] = useState("");
  const [curPassError, setCurPassError] = useState("");

  const style = {
    formContainer: {
      background: "white",
      padding: "30px",
      borderRadius: "10px",
    },
    btn: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: "45px",
      marginBottom: "10px",
    },
    notification: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: "45px",
      marginTop: "10px",
      backgroundColor: "#ffffff",
      border: "1px solid #d9d9d9",
      boxShadow: "0 2px 0 rgba(0, 0, 0, 0.02)",
      borderRadius: "6px",
      padding: "4px 15px",
    },
    input: {
      height: "45px",
    },
    otpInput: {
      width: "50px",
      height: "70px",
    },
  };
  const menuItems = [
    {
      key: "1",
      title: "Personal Information",
      link: "personal-information",
    },
    {
      key: "2",
      title: "Change Password",
      link: "change-password",
    },
    
    
    {
      key: "8",
      title: "Privacy Policy",
      link: "privacy-policy",
    },
    {
      key: "9",
      title: "Terms and Condition",
      link: "terms-condition",
    },
    {
      key: "10",
      title: "About Us",
      link: "about-us",
    },
  ];

  const [err, setErr] = useState("");
  const handleUpdated = (values) => {
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

  const handleNavigate = (value) => {
    if (value == "renti-percentage") {
      setOpenModal(true);
    } else if (value === "change-password") {
      setOpenChangePassModel(true);
    } else {
      navigate(`/setting/${value}`);
    }
  };

  const handleNotification = (e) => {
    console.log(e);
  };

  const setPercentage = () => {
    alert("tushar");
    setOpenModal(false);
  };

  const handleChangePassword = (values) => {
    if(values?.currentPassword === values.newPassword){
      setNewPassError("The New password is semilar with old Password");
    }else{
      setNewPassError("")
    }
    if(values?.password !== values.newPassword){
      setConPassError("New Password and Confirm Password Doesn't Matched");
    }else{
      setConPassError("")
    }

    const response = false;
    if(response){
      setCurPassError("Current Password is in-currect");
    }else{
      setCurPassError("")
    }



    console.log("Received values of form: ", values);
  };

  return (
    <div style={{ padding: "0 60px" }}>
      <h2 style={{ marginBottom: "20px", fontWeight: "normal" }}>Settings</h2>
      <div style={style.formContainer}>
        {menuItems.map((item) => (
          <Button
            onClick={() => handleNavigate(item.link)}
            key={item.key}
            block
            style={style.btn}
          >
            <span>{item.title}</span>
            <LiaAngleRightSolid fontSize={20} />
          </Button>
        ))}

        {/* change password*/}
        <Modal
          title={<p style={{ marginBottom: "30px", fontSize: "20px", color :"#ffb7d5" }}>Change password</p>}
          centered
          open={openChangePassModel}
          onCancel={() => setOpenChangePassModel(false)}
          width={500}
          footer={[]}
        >
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={handleChangePassword}
          >
            <div style={{marginBottom: "16px"}}>
              <label style={{display: "block", marginBottom: "5px" }} className={style.label}>
                Current Password
              </label>
              <Form.Item
                style={{marginBottom: 0}}
                name="currentPassword"
                rules={[
                  {
                    required: true,
                    message: "Please input your current password!",
                  },
                ]}
              >
                <Input.Password
                  placeholder="Enter Password"
                  type="password"
                  style={style.input}
                />
              </Form.Item>
              { curPassError && <label style={{display: "block", color: "red"}} htmlFor="error">{curPassError}</label>}
            </div>

            <div style={{marginBottom: "16px"}}>
              <label style={{display: "block", marginBottom: "5px" }} htmlFor="">New Password</label>
              <Form.Item
                name="newPassword"
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
                  style={style.input}
                />
              </Form.Item>
              { newPassError && <label style={{display: "block", color: "red"}} htmlFor="error">{newPassError}</label>}
            </div>

            <div style={{marginBottom: "16px"}}>
              <label style={{display: "block", marginBottom: "5px" }} htmlFor="email" className={style.label}>
                Re-Type Password
              </label>
              <Form.Item
                style={{marginBottom: 0}}
                name="password"
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
                  style={style.input}
                />
              </Form.Item>
              { conPassError && <label style={{display: "block", color: "red"}} htmlFor="error">{conPassError}</label>}
            </div>


            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <p
                
                style={{ color: "#ffb7d5", cursor: "pointer" }}
                onClick={() => (setForgotPassword(true), setOpenChangePassModel(false))}
              >
                Forgot password
              </p>
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
                  background: "#ffb7d5",
                  marginTop: "60px",
                }}
              >
                Confirm
              </Button>
            </Form.Item>
          </Form>
        </Modal>
        

        {/* forgot Password */}
        <Modal
          title={
            <Title
              level={2}
              style={{
                color: "#ffb7d5",
                fontWeight: "normal",
                marginBottom: "30px",
                textShadow: "#bfbfbf 2px 2px 4px",
              }}
            >
              Forgot Password
            </Title>
          }
          centered
          open={forgotPassword}
          onCancel={() => {
            setForgotPassword(false);
          }}
          width={500}
          footer={[]}
        >
          <div>
            <Paragraph style={{ marginBottom: "30px" }}>
              We'll send a verification code to your email. Check your inbox and
              enter the code here.
            </Paragraph>
              <Input
                  placeholder="Enter Your Email"
                  type="text"
                  style={style.input}
                />

            <Button
              block
              onClick={() => (setVerify(true), setForgotPassword(false))}
              style={{
                height: "45px",
                fontWeight: "400px",
                fontSize: "18px",
                background: "#ffb7d5",
                color: "#fff",
                alignSelf: "bottom",
                marginTop: "30px",
                borderColor: "transparent"
              }}
            >
              Continue
            </Button>
          </div>
        </Modal>

        {/* Verify Password */}
        <Modal
          title={
            <Title
              level={2}
              style={{
                color: "#ffb7d5",
                fontWeight: "normal",
                marginBottom: "30px",
                textShadow: "#bfbfbf 2px 2px 4px",
              }}
            >
              Verify OTP
            </Title>
          }
          centered
          open={verify}
          onCancel={() => {
            setVerify(false);
          }}
          width={500}
          footer={[]}
        >
          <div>
            <Paragraph style={{ marginBottom: "30px" }}>
              We'll send a verification code to your email. Check your inbox and
              enter the code here.
            </Paragraph>

            <Input.Group
              style={{
                display: "flex",
                gap: "10px",
                marginBottom: "10px",
              }}
            >
              <Input style={{ width: "50px", height: "70px" }} />
              <Input style={style.otpInput} />
              <Input style={style.otpInput} />
              <Input style={style.otpInput} />
              <Input style={style.otpInput} />
              <Input style={style.otpInput} />
            </Input.Group>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Text>Don't received code?</Text>

              <a
                className="login-form-forgot"
                style={{ color: "#ffb7d5" }}
                href=""
              >
                Resend
              </a>
            </div>

            <Button
              block
              onClick={() => (setUpdatePassword(true), setVerify(false))}
              style={{
                height: "45px",
                fontWeight: "400px",
                fontSize: "18px",
                background: "#ffb7d5",
                color: "#fff",
                alignSelf: "bottom",
                marginTop: "30px",
                borderColor: "transparent"
              }}
            >
              Continue
            </Button>
          </div>
        </Modal>


        {/* Update Password */}
        <Modal
          title={
            <Title
              level={2}
              style={{
                color: "#ffb7d5",
                fontWeight: "normal",
                marginBottom: "30px",
                textShadow: "#bfbfbf 2px 2px 4px",
              }}
            >
              Update Password
            </Title>
          }
          centered
          open={updatePassword}
          onCancel={() => {
            setUpdatePassword(false);
          }}
          width={500}
          footer={[]}
        >
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={handleUpdated}
          >
            <div>
              <label style={{display: "block", marginBottom: "10px"}} htmlFor="">New Password</label>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please enter new password!",
                  },
                ]}
              >
                <Input.Password type="text" placeholder="Password" style={style.input} />
              </Form.Item>
            </div>

            <div>
              <label style={{display: "block", marginBottom: "10px"}} htmlFor="">Re-type Password</label>
              <Form.Item
                name="confirmPassword"
                rules={[
                  {
                    required: true,
                    message: "Please enter confirm Password!",
                  },
                ]}
              >
                <Input.Password
                  type="text"
                  placeholder="Confirm password"
                  style={style.input}
                />
              </Form.Item>
            </div>

            {/* showing error */}
            <label  style={{ color: "red", display: "block", marginTop: "10px" }}>{err}</label>

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
                  background: "#ffb7d5",
                  marginTop: "30px",
                  borderColor: "transparent"
                }}
              >
                Confirm
              </Button>
            </Form.Item>
          </Form>
        </Modal>

        {/*Set Percentage*/}
        <Modal
          title="Set Ranti's Percentage"
          centered
          open={openModal}
          onOk={() => setPercentage()}
          okText="Confirm"
          onCancel={() => setOpenModal(false)}
          okButtonProps={{
            style: {
              width: "100%",
              backgroundColor: "#000b90",
              height: "40px",
              marginLeft: "-20px",
            },
          }} // Adjust the width here
          cancelButtonProps={{ style: { display: "none" } }}
          width={500}
        >
          <Input
            placeholder="set your percentage"
            style={{ height: "50px", margin: "20px 0px" }}
          />
        </Modal>
      </div>
    </div>
  );
};

export default Setting;

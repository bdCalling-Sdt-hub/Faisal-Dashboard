import React, { useState } from 'react'
import BackButton from "../../Pages/Dashboard/BackButton"
import { Button, Form, Input } from 'antd'
import { useDispatch } from 'react-redux';
import { changePassword } from "../../redux/apiSlice/Authentication/changePasswordSlice"
import Swal from 'sweetalert2';

const ChangePassword = () => {
    const [newPassError, setNewPassError] = useState("");
    const [conPassError, setConPassError] = useState("");

    const dispatch = useDispatch();


    const validatePasswordChange = (values) => {
        let errors = {};
    
        if (values?.currentPass === values.newPass) {
            errors.newPassError = "The New password is similar to the old Password";
            setNewPassError(errors.newPassError);
        } else {
            setNewPassError("");
        }
    
        if (values?.newPass !== values.confirmPass) {
            errors.conPassError = "New Password and Confirm Password Don't Match";
            setConPassError(errors.conPassError);
        } else {
            setConPassError("");
        }
    
        return errors;
    };

    const handleChangePassword = (values) => {
        let errors = validatePasswordChange(values);
    
        if (Object.keys(errors).length === 0) {
            dispatch(changePassword(values)).then((response) => {
                if (response?.type === "changePassword/fulfilled") {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Password Updated Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                } else {
                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: response?.payload,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });
        }
    };

    const handleReset=()=>{
        window.location.reload()
    }

    return (
        <div>
            <div style={{margin: "30px 0"}}>
                <BackButton link="/" />
            </div>
            <div style={{display: "flex",  alignItems: "center", justifyContent: "center"}}>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    style={{width: "543px", height: "fit-content"}}
                    onFinish={handleChangePassword}
                >

                    <div style={{marginBottom: "20px"}}>
                        <label style={{display: "block", marginBottom: "5px" }}>Current Password</label>
                        <Form.Item
                            style={{marginBottom: 0}}
                            name="currentPass"
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
    
                    <div style={{marginBottom: "20px"}}>
                        <label style={{display: "block", marginBottom: "5px" }} htmlFor="">New Password</label>
                        <Form.Item
                            name="newPass"
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
                            name="confirmPass"
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

                    <div style={{width: "100%", display: "flex", gap: "16px", alignItems: "center"}}>
                        <div style={{width: "100%"}}>
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
                        </div>
                        <div style={{width: "100%"}}>
                            <Form.Item>
                                <Button
                                    onClick={handleReset}
                                    block
                                    style={{
                                        border: "none",
                                        height: "51px",
                                        background: "#BFF2EE",
                                        color: "#2FD5C7",
                                        borderRadius: "8px",
                                        outline: "none",
                                    }}
                                >
                                    RESET
                                </Button>
                            </Form.Item>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default ChangePassword
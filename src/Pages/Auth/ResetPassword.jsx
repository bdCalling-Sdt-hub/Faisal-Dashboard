import { Button } from 'antd'
import React from 'react'

const ResetPassword = () => {
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
            <div
                style={{width: "630px", background: "white", borderRadius: "12px", padding: "90px 57px"}}
            >
                <h1 style={{fontSize: "32px", color: "#6A6D7C", marginBottom: "17px", textAlign: "center"}}>Password reset</h1>
                <p style={{width: "350px", color: "#6A6D7C", marginBottom: "80px", fontSize: "16px", fontWeight: 400, margin: "0 auto 0 auto"}}>
                    Your password has been successfully reset. click confirm to set a new password
                </p>
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
                    Confirm
                </Button>
            </div>
        </div>
    )
}

export default ResetPassword
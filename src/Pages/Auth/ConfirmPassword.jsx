import { Button } from 'antd';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const ConfirmPassword = () => {
    const navigate = useNavigate();
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
                <div 
                    style={{
                        width: "409px"
                    }}
                >
                    <h1 style={{fontSize: "32px", color: "#6A6D7C", marginBottom: "17px", textAlign: "center"}}>Successfully</h1>
                    <p style={{color: "#6A6D7C",  fontSize: "16px", fontWeight: 400, margin: "0 auto 0 auto"}}>
                        Your password has been successfully reset. click confirm to set a new password
                    </p>
                </div>
                
                <Button
                    onClick={()=>navigate("/update-password")}
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
                        cursor: "pointer",
                        marginTop: "80px"
                    }}
                >
                    Confirm
                </Button>
            </div>
        </div>
    )
}

export default ConfirmPassword
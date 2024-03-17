import React from 'react'
import { Form, Button, Input } from "antd"
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { useNavigate} from "react-router-dom"
const EditSubscription = () => {
    const navigate = useNavigate();
    const initialFormValues = {
        package_name: "Basic",
        package_duration: 6,
        package_features: ["add", "done", "pro"],
        price: 200,
        gigs: 15
    };
    const handleUpdate=(values)=>{
        console.log(values)
    }
    return (
        <div>
            <div>
                <h1 
                    onClick={()=>navigate("/subscription")} 
                    style={{
                        marginBottom: "30px", 
                        width: "fit", 
                        display: "flex", 
                        alignItems: "center", 
                        gap: "15px",
                        cursor: "pointer"
                    }}
                > 
                    <MdOutlineArrowBackIosNew /> 
                    Edit Subscription
                </h1>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={initialFormValues} 
                    onFinish={handleUpdate}
                >   
                    <div style={{display: "flex", width: "100%", gap: "30px"}}>
                        <div style={{width: "100%"}}>
                            <label htmlFor="" style={{display: "block", marginBottom: "10px"}}>Packeage Name</label>
                            <Form.Item  
                                name="package_name"
                                style={{marginBottom: "24px"}}
                            >
                                <Input
                                    size="large"
                                    style={{
                                        width: "100%",
                                        height: "52px",
                                        border: "1px solid #ffb7d5",
                                        borderRadius: "8px",
                                        padding : "16px",
                                        color: "black",
                                        outline: "none",
                                        backgroundColor: "#E9EAEC",
                                    }}
                                />
                            </Form.Item>
                        </div>   
                        
                        <div style={{width: "100%"}}>
                            <label htmlFor="" style={{display: "block", marginBottom: "10px"}}>Packeage Duration</label>
                            <Form.Item
                                name="package_duration"
                                style={{marginBottom: "24px"}}
                            >
                                <Input
                                    size="package_duration"
                                    style={{
                                        width: "100%",
                                        height: "52px",
                                        border: "1px solid #ffb7d5",
                                        borderRadius: "8px",
                                        padding : "16px",
                                        color: "black",
                                        outline: "none",
                                        backgroundColor: "#E9EAEC",
                                    }}
                                />
                            </Form.Item>
                        </div>
                    </div>

                    <label htmlFor="" style={{display: "block", marginBottom: "10px"}}>Packeage Price</label>
                    <Form.Item 
                        name="price"
                        style={{marginBottom: "24px"}}
                    >  
                        <Input
                            size="large"
                            style={{
                                width: "100%",
                                height: "52px",
                                border: "1px solid #ffb7d5",
                                borderRadius: "8px",
                                padding : "16px",
                                color: "black",
                                outline: "none",
                                backgroundColor: "#E9EAEC",
                            }}
                        />
                    </Form.Item>



                    <label htmlFor="" style={{display: "block", marginBottom: "10px"}}>How Many GiG photo Do you need ?</label>
                    <Form.Item 
                        name="gigs"
                        style={{marginBottom: "24px"}}
                    >  
                        <Input
                            size="large"
                            style={{
                                width: "100%",
                                height: "52px",
                                border: "1px solid #ffb7d5",
                                borderRadius: "8px",
                                padding : "16px",
                                color: "black",
                                outline: "none",
                                backgroundColor: "#E9EAEC",
                            }}
                            type='number'
                        />
                    </Form.Item>
                    
                    <label htmlFor="" style={{display: "block", marginBottom: "10px"}}>Packeage Features</label>

                    <Form.Item
                        name="package_features"
                        style={{marginBottom: "24px"}}
                    >    
                        <Input
                            size="large"
                            placeholder='Add, like, This with comma'
                            style={{
                                width: "100%",
                                height: "52px",
                                border: "1px solid #ffb7d5",
                                borderRadius: "8px",
                                padding : "16px",
                                color: "black",
                                outline: "none",
                                backgroundColor: "#E9EAEC",
                            }}
                            readOnly
                        />
                    </Form.Item>

                    <Form.Item
                        name="package_features"
                        style={{marginBottom: "24px"}}
                    >    
                        <Input
                            size="large"
                            placeholder='Add, like, This with comma'
                            style={{
                                width: "100%",
                                height: "52px",
                                border: "1px solid #ffb7d5",
                                borderRadius: "8px",
                                padding : "16px",
                                color: "black",
                                outline: "none",
                                backgroundColor: "#E9EAEC",
                            }}
                            readOnly
                        />
                    </Form.Item>

                    <Form.Item
                        name="package_features"
                        style={{marginBottom: "24px"}}
                    >    
                        <Input
                            size="large"
                            placeholder='Add, like, This with comma'
                            style={{
                                width: "100%",
                                height: "52px",
                                border: "1px solid #ffb7d5",
                                borderRadius: "8px",
                                padding : "16px",
                                color: "black",
                                outline: "none",
                                backgroundColor: "#E9EAEC",
                            }}
                            readOnly
                        />
                    </Form.Item>




                    <Form.Item>
                        <Button 
                            block
                            htmlType='submit'
                            style={{
                                width: "100%",
                                height: "56px",
                                backgroundColor: "#ffb7d5",
                                color: "white",
                                border: "none",
                                borderRadius: "8px"
                            }} 
                        >
                            UPDATE
                        </Button>
                    </Form.Item>
                </Form>  
            </div>
        </div>
    )
}

export default EditSubscription
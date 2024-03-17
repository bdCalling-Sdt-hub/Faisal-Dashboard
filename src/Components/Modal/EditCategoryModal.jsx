import React, { useEffect, useState } from 'react';
import { Button, Modal, Upload, ColorPicker,Table } from 'antd';
import { CiCamera } from "react-icons/ci";

const EditCategoryModal = ({editCategory, handleValue }) => {
    const [img, setImg] = useState();
    const category = JSON?.parse(localStorage.getItem('category'));
    const [imageUrl, setImageUrl] = useState("");
    console.log(imageUrl)

    const onChange = (e) => {
        const file= e.target.files[0];
        const imgUrl = URL.createObjectURL(file);
        setImageUrl(imgUrl);
        setImg(file)
    };
    
    return (
        <Modal
            centered
            open={editCategory}
            onCancel={handleValue}
            width={500}
            footer={false}
        >
                <div>
                    <h1 style={{marginBottom: "12px"}}>Edit Category</h1>
                    <form >
                        <div>
                            <label style={{marginBottom : "12px"}}>Category name</label>
                            <div style={{
                                marginTop: "10px",
                                marginBottom: "10px"                            
                            }}>
                                <input 
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
                                    value={editCategory?.name}
                                    type="text" 
                                    placeholder="Enter Category name"
                                    name="category_name"
                                    // onChange={(e)=>setName(e.target.value)}
                                />
                            </div>


                            <label style={{marginBottom : "12px"}}>Primary Color</label>
                            <div style={{
                                marginTop: "10px",
                                marginBottom: "10px"                            
                            }}>
                                <ColorPicker defaultValue="#1677ff" size="large" showText />
                            </div>

                            <label style={{marginBottom : "12px"}}>Seceondary Color</label>
                            <div style={{
                                marginTop: "10px",
                                marginBottom: "10px"                            
                            }}>
                                <ColorPicker defaultValue="#1677ff" size="large" showText />
                            </div>
                        </div>

                        <div>
                            <div style={{marginBottom : "12px"}}>
                                <label >Category Picture</label>
                            </div>
                            <div>
                                <input style={{display: "none"}} onChange={onChange}  type="file" name="" id="img" />
                                <label 
                                    htmlFor="img" 
                                    style={{
                                        width: "100%",
                                        height: "190px",
                                        borderRadius: "8px",
                                        border: "1px solid #ffb7d5",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "#ffb7d5",
                                        cursor: "pointer",
                                        backgroundImage: `url(${imageUrl ? imageUrl : category?.image})`, // Replace 'your-image-url.jpg' with your actual image URL
                                        backgroundSize: "cover", // Adjust according to your image size preference
                                        backgroundPosition: "center"
                                    }}>
                                        <CiCamera size={40} /> 
                                        <h3>Upload Photo</h3>
                                </label>
                            </div>
                        </div>
                        <Button
                            type="primary"
                            htmlType="submit"
                            block
                            style={{
                                width : "100%",
                                height: "45px",
                                fontWeight: "400px",
                                fontSize: "18px",
                                background: "#ffb7d5",
                                color: "white",
                                marginTop : "44px",
                                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"
                            }}
                        >
                            UPDATE
                        </Button>
                    </form>
                </div>
        </Modal>
    )
}

export default EditCategoryModal;
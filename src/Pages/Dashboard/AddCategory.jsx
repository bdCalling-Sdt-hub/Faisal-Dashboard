import React, { useState } from 'react'
import BackButton from './BackButton'
import { CiCamera, CiCircleMinus, CiCirclePlus } from 'react-icons/ci'
import { Button, Form, Input, Select } from 'antd'
import { createCategory } from "../../redux/apiSlice/Category/createCategorySlice"
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
const { Option } = Select;

function transformData(data) {
    const transformedData = {
        categoryName: data.category_name,
        someExtraField: []
    };

    const keys = Object.keys(data);
    
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];

        if (key.startsWith('name')) {
            const index = key.slice(4);

            transformedData.someExtraField.push({
                name: data[key],
                type: data[`type${index}`],
                option: data[`option${index}`]
            });
        }
    }
    
    return transformedData;
}



const AddCategory = () => {
    const [image, setImage] = useState();
    const [number, setNumber] = useState(1);
    const dispatch = useDispatch();

    const handleSubmit=(values)=>{
        const newData = transformData(values);
        const formData = new FormData();

        formData.append("categoryImage", image)
        formData.append("categoryName", newData.categoryName)
        if(newData !== "" || newData){
            formData.append("someExtraField", JSON.stringify(newData.someExtraField))
        }

        dispatch(createCategory(formData)).then((response)=>{
            if(response.type === "createCategory/fulfilled"){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Category Created Successfully",
                    showConfirmButton: false,
                    timer: 1500
                }).then(()=>{
                    window.location.replace("/category")
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
        })
    
    }

    const handleImage=(e)=>{
        const file = e.target.files[0];
        setImage(file);
    }
    return (
        <div>
            <div style={{marginBottom: "16px"}}>
                <BackButton link="/category" />
            </div>
            <Form onFinish={handleSubmit} layout='vertical'>
                <div 
                    style={{
                        background: "white", 
                        height: "100%", 
                        width: "100%",
                        padding: 24,
                        borderRadius: 8,
                        display: "flex",
                        flexDirection: "row",
                        gap: 24
                    }}
                >

                    <div style={{width: "100%"}}>

                        <div style={{marginBottom: 16}}>
                            <label style={{marginBottom : 5, display: "block"}}>Category name</label>
                            <Form.Item 
                                style={{marginBottom: 0}}
                                name={"category_name"}
                                rules={[
                                    {
                                        required: true,
                                        message: "Please Enter Category Name!"
                                    }
                                ]}
                            >
                                <Input
                                    placeholder='Enter Category Name'
                                    style={{ 
                                        width: "100%",
                                        height: "44px",
                                        border: "none",
                                        borderRadius: "8px",
                                        padding : "16px",
                                        color: "black",
                                        outline: "none",
                                        backgroundColor: "#E9EAEC"
                                    }}
                                />
                            </Form.Item>
                        </div>

                        <>
                            <label style={{marginBottom : 5, display: "block"}}>Category Picture</label>
                            <input onChange={handleImage} style={{display: "none"}}  type="file" name="" id="img" />
                            <label 
                                htmlFor="img" 
                                style={{
                                    width: "100%",
                                    height: "190px",
                                    borderRadius: "8px",
                                    border: "1px solid #E9EAEC",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "black",
                                    cursor: "pointer",
                                    backgroundImage:    `url(${ image ? URL.createObjectURL(image) :"https://img.freepik.com/free-photo/paper-textured-background_53876-30486.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709596800&semt=ais"})`, // Replace 'your-image-url.jpg' with your actual image URL
                                    backgroundSize: "cover",
                                    backgroundPosition: "center"
                                }}
                            >
                                <CiCamera size={40} /> 
                                <h3>Upload Photo</h3>
                            </label>
                        </>


                    </div>

                    <div style={{width: "100%"}}>
                        <label htmlFor="" style={{marginBottom: 24, display: "block"}}>Some Extra Field</label>
                        
                        {
                            [...Array(number)].map((item, index)=>{
                                return (
                                    <div key={index} style={{borderBottom: "1px solid #E9EAEC",  marginBottom: 24}}>
                                        <Form.Item 
                                            style={{marginBottom: 24}}
                                            name={`name${index}`}
                                            label="Field Name"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: "Please Enter Extra Field Name"
                                                }
                                            ]}
                                        >
                                            <Input
                                                placeholder='Enter Extra Field Name'
                                                style={{ 
                                                    width: "100%",
                                                    height: "44px",
                                                    border: "none",
                                                    borderRadius: "8px",
                                                    padding : "16px",
                                                    color: "black",
                                                    outline: "none",
                                                    backgroundColor: "#E9EAEC"
                                                }}
                                            />
                                        </Form.Item>

                                        <Form.Item 
                                            style={{marginBottom: 24}}
                                            name={`type${index}`}
                                            label="Type"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: "Please Select Type"
                                                }
                                            ]}
                                        >
                                            <Select
                                                style={{
                                                    width: "100%",
                                                    height: 48,
                                                    border: "1px solid #E7EBED",
                                                    outline: "none",
                                                    borderRadius: 8,
                                                    background:"#E9EAEC"
                                                }}
                                            >
                                                <Option value="CHECKBOX">CHECKBOX</Option>
                                                <Option value="RADIO">RADIO</Option>
                                                <Option value="CHOOSE">CHOOSE</Option>
                                                <Option value="INPUT">INPUT</Option>
                                            </Select>
                                        </Form.Item>

                                        <label htmlFor="" style={{marginBottom: 24, display: "block"}}>Option</label>  
                                        <Form.List name={`option${index}`} label="Option" initialValue={[""]}>
                                            {
                                                (fields, { add, remove }) => 
                                                <>
                                                    {
                                                        fields.map((field, idx) => {
                                                            
                                                            return (
                                                                <Form.Item
                                                                    required={false}
                                                                    key={idx}
                                                                >
                                                                    <div style={{display: "flex", alignItems: "center", gap: 8}}>
                                                                        <Form.Item
                                                                            {...field}
                                                                            validateTrigger={['onChange', 'onBlur']}
                                                                            style={{
                                                                                marginBottom : 0, 
                                                                                width: "100%"
                                                                            }}
                                                                        >
                                                                            <Input
                                                                                placeholder='Enter Extra Field Name'
                                                                                style={{
                                                                                    width: "100%",
                                                                                    height: "44px",
                                                                                    border: "none",
                                                                                    borderRadius: "8px",
                                                                                    padding : "16px",
                                                                                    color: "black",
                                                                                    outline: "none",
                                                                                    backgroundColor: "#E9EAEC"
                                                                                }}
                                                                            />
                                                                        </Form.Item>

                                                                        <CiCircleMinus
                                                                            style={{display: fields.length > 1 ? "block" : "none", cursor: "pointer" }}
                                                                            size={40}
                                                                            color='red'
                                                                            onClick={() => remove(field.name)}
                                                                        />

                                                                        <CiCirclePlus 
                                                                            style={{cursor: "pointer" }}
                                                                            size={40}
                                                                            onClick={() => add()}
                                                                            color='#23A095'
                                                                        />
                                                                    </div>
                                                                </Form.Item>
                                                            )
                                                        })
                                                    }
                                                </>       
                                            }
                                        </Form.List> 
                                    </div>
                                )
                            })
                        }

                        <Button
                            onClick={()=>setNumber(number + 1)}
                            block
                            style={{
                                width : "100%",
                                height: "45px",
                                fontWeight: "400px",
                                fontSize: "18px",
                                background: "#23A095",
                                color: "white",
                                marginTop : "44px",
                                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"
                            }}
                        >
                            Add More
                        </Button>
                                              
                    </div>
                </div>





                <Form.Item 
                    style={{marginBottom: 0}}
                >
                    <Button
                        htmlType='submit'
                        block
                        style={{
                            width : "100%",
                            height: "45px",
                            fontWeight: "400px",
                            fontSize: "18px",
                            background: "#23A095",
                            color: "white",
                            marginTop : "44px",
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"
                        }}
                    >
                        Save
                    </Button>
                </Form.Item>
                
            </Form>
        </div>
    )
}

export default AddCategory
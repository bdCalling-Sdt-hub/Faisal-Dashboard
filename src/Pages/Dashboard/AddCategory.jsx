import React, { useState } from 'react'
import BackButton from './BackButton'
import { CiCamera, CiCircleMinus, CiCirclePlus } from 'react-icons/ci'
import { Button, Form, Input } from 'antd'
import {  PlusOutlined } from '@ant-design/icons';

const AddCategory = () => {
    const [selectedField, setSelectedField] = useState();
    const [selectedFieldName, setSelectedFieldName] = useState();
    console.log(selectedField);
    const handleSubmit=(values)=>{
        console.log(values)
    }
    return (
        <div>
            <div style={{marginBottom: "16px"}}>
                <BackButton link="/category" />
            </div>
            <Form onFinish={handleSubmit}>
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
                            <input style={{display: "none"}}  type="file" name="" id="img" />
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
                                    backgroundImage: `url(${"https://img.freepik.com/free-photo/paper-textured-background_53876-30486.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709596800&semt=ais"})`, // Replace 'your-image-url.jpg' with your actual image URL
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

                        <Form.Item 
                                style={{marginBottom: 0}}
                                name={"name"}
                                rules={[
                                    {
                                        required: true,
                                        message: "Please Enter "
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

                        <label style={{marginBottom : 5, display: "block"}}>Add Some Extra Field</label>
                        <Form.List name="features">
                            {
                                (fields, { add, remove }) => 
                                <>
                                    {
                                        fields.map((field, index) => (
                                            <Form.Item
                                                required={false}
                                                key={field.key}
                                            >
                                                <div>
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
                                                                onClick={()=>(setSelectedFieldName(field.name), setSelectedField(index))}
                                                                color='#23A095'
                                                            />
                                                        </div>
                                                        
                                                        <div 
                                                            style={{
                                                                display: selectedField === index ? "block" : "none",
                                                                width: "50%",
                                                                margin: "10px 0 10px auto",
                                                            }}
                                                        >
                                                            <Form.List name="featuressss">
                                                                {
                                                                    (nestedFields, { add, remove }) => 
                                                                    <>
                                                                        {
                                                                            nestedFields.map((nestedField, nestedIndex) => (
                                                                                <Form.Item
                                                                                    {...field}
                                                                                    required={false}
                                                                                    key={nestedField.key}
                                                                                    validateTrigger={['onChange', 'onBlur']}
                                                                                >
                                                                                    <div style={{display: "flex", alignItems: "center", gap: 8}}>
                                                                                                <Form.Item
                                                                                                    
                                                                                                    
                                                                                                    // validateTrigger={['onChange', 'onBlur']}
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
                                                                                                    style={{display: nestedFields.length > 1 ? "block" : "none", cursor: "pointer" }}
                                                                                                    size={40}
                                                                                                    color='red'
                                                                                                    onClick={() => remove(nestedField.key)}
                                                                                                />

                                                                                                <CiCirclePlus 
                                                                                                    style={{display: nestedFields.length === ( nestedIndex + 1 ) ? "block" : "none", cursor: "pointer" }}
                                                                                                    size={40}
                                                                                                    onClick={()=> add()}
                                                                                                    color='#23A095'
                                                                                                />
                                                                                    </div>
                                                                                </Form.Item>
                                                                            ))
                                                                        }

                                                                        <Form.Item style={{display: nestedFields.length > 0 ? "none" : "block"}}>
                                                                            <Button
                                                                                onClick={() => add()}
                                                                                style={{
                                                                                    width: "100%",
                                                                                    height: "45px",
                                                                                    fontWeight: "400px",
                                                                                    fontSize: "18px",
                                                                                    background: "transparent",
                                                                                    border: "1px solid #23A095",
                                                                                    color: "#23A095"
                                                                                }}
                                                                                icon={<PlusOutlined />}
                                                                            >
                                                                                Add field
                                                                            </Button>
                                                                        </Form.Item>
                                                                    </>       
                                                                }
                                                            </Form.List> 
                                                            
                                                            {/* <Form.List name={`features[${index}]`} >
                                                                {
                                                                    (nestedFields, { add, remove }) => 
                                                                    <>
                                                                        {
                                                                            nestedFields.map((nestedField, nestedIndex) => (

                                                                                
                                                                                <Form.Item
                                                                                    required={false}
                                                                                    key={nestedField.key}
                                                                                    style={{marginBottom: 0, width: "100%",}}
                                                                                >
                                                                                        <div style={{display: "flex", alignItems: "center", marginBottom: 8, gap: 8, }}>
                                                                                            <Form.Item
                                                                                                {...nestedField}
                                                                                                key={nestedField.key}
                                                                                                validateTrigger={['onChange', 'onBlur']}
                                                                                                style={{
                                                                                                    marginBottom : 0, 
                                                                                                    width: "100%"
                                                                                                }}
                                                                                            >
                                                                                                <Input
                                                                                                    placeholder='Enter Extra Field Value '
                                                                                                    style={{
                                                                                                        width: "100%",
                                                                                                        height: "38px",
                                                                                                        border: "none",
                                                                                                        borderRadius: "8px",
                                                                                                        padding : "16px",
                                                                                                        color: "black",
                                                                                                        outline: "none",
                                                                                                        backgroundColor: "#E9EAEC"
                                                                                                    }}
                                                                                                    // name={`features[${index}].values[${nestedIndex}]`}
                                                                                                />
                                                                                            </Form.Item>
                                                                                        <CiCircleMinus
                                                                                            style={{cursor: "pointer" }}
                                                                                            size={35}
                                                                                            color='red'
                                                                                            onClick={() => remove(nestedField.name)}
                                                                                        />
                                                                                            
                                                                                        <CiCirclePlus
                                                                                            style={{display: nestedFields.length === ( nestedIndex + 1 ) ? "block" : "none", cursor: "pointer" }}
                                                                                            size={35}
                                                                                            color='#23A095'
                                                                                            onClick={() => add()}
                                                                                        />
                                                                                    </div>
                                                                                </Form.Item>
                                                                            ))
                                                                        }
                                                                        <Form.Item style={{display: nestedFields.length > 0 ? "none" : "block"}}>
                                                                            <Button
                                                                                onClick={() => add()}
                                                                                style={{
                                                                                    width: "100%",
                                                                                    height: "45px",
                                                                                    fontWeight: "400px",
                                                                                    fontSize: "18px",
                                                                                    background: "transparent",
                                                                                    border: "1px solid #23A095",
                                                                                    color: "#23A095"
                                                                                }}
                                                                                icon={<PlusOutlined />}
                                                                            >
                                                                                Add field
                                                                            </Button>
                                                                        </Form.Item>
                                                                    </>       
                                                                }
                                                            </Form.List> */}
                                                        </div>
                                                </div>
                                            </Form.Item>
                                        ))
                                    }

                                    <Form.Item>
                                        <Button
                                            onClick={() => add()}
                                            style={{
                                                width: "100%",
                                                height: "45px",
                                                fontWeight: "400px",
                                                fontSize: "18px",
                                                background: "transparent",
                                                border: "1px solid #23A095",
                                                color: "#23A095"
                                            }}
                                            icon={<PlusOutlined />}
                                        >
                                            Add field
                                        </Button>
                                    </Form.Item>
                                </>       
                            }
                        </Form.List>                       
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
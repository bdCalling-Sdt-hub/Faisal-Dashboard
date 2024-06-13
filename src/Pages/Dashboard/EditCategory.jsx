import { Button, Form, Input, Select } from 'antd';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { getCategory } from "../../redux/apiSlice/Category/getSingleCategorySlice";
import { editCategory } from "../../redux/apiSlice/Category/editCategorySlice";
import { useParams } from 'react-router-dom';
import BackButton from './BackButton';
import { CiCamera, CiCircleMinus, CiCirclePlus } from 'react-icons/ci'
import { ImageConfig } from '../../../Config';
const { Option } = Select;

const EditCategory = () => {
    const [image, setImage] = useState();
    const [imageURL, setImageURL] = useState(null)
    const [number, setNumber] = useState(0);
    const [value, setValue] = useState("")
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const { id } = useParams()
    const { category } = useSelector(state => state.getSingleCategory);

    const handleSubmit=(values)=>{
        const formData = new FormData();
        if(image){
            formData.append("categoryImage", image)
        }
        formData.append("categoryName", values.categoryName)
        formData.append("someExtraField", JSON.stringify(values.someExtraField))
        const value = {
            id: id,
            data: formData
        }

        dispatch(editCategory(value)).then((response)=>{
            if(response.type === "editCategory/fulfilled"){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Category Updated Successfully",
                    showConfirmButton: false,
                    timer: 1500
                }).then((response)=>{
                    window.location.replace("/category")
                })
            }
        })
    
    }

    useEffect(()=>{
        dispatch(getCategory(id))
    }, [dispatch, id])

    useEffect(()=>{
        if(category){
            const initialValues = {
                categoryName: category?.categoryName,
                someExtraField: category?.someExtraField?.map((item, index) => ({
                    name: item.name,
                    type: item.type,
                    option: item.option
                }))
            };
            form.setFieldsValue(initialValues);
            setNumber(category?.someExtraField?.length)
            setImage(category?.categoryImage)
        }
    }, [category, form])

    const handleImage=(e)=>{
        const file = e.target.files[0];
        setImage(file);
        const url = URL.createObjectURL(file)
        setImageURL(url)
    }
    return (
        <div>
            <div style={{marginBottom: "16px"}}>
                <BackButton link="/category" />
            </div>
            <Form onFinish={handleSubmit} form={form} layout='vertical'>
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
                                name="categoryName"
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
                                    backgroundImage:    `url(${ imageURL ? imageURL : `${ImageConfig}/${category?.categoryImage}` })`,
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
                                            name={['someExtraField', index, 'name']}
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
                                            name={['someExtraField', index, 'type']}
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
                                                onChange={(e)=>setValue([e, index])}
                                            >
                                                <Option value="CHECKBOX">CHECKBOX</Option>
                                                <Option value="RADIO">RADIO</Option>
                                                <Option value="CHOOSE">CHOOSE</Option>
                                                <Option value="INPUT">INPUT</Option>
                                            </Select>
                                        </Form.Item>
                                        
                                        <>
                                            
                                                <div 
                                                    style={{
                                                        display: value[0] === "IMAGE" || value[0] === "DATE" || value[0] === "INPUT" && index === value[1] ? "none" : "block"
                                                    }}
                                                >
                                                    <label htmlFor="" style={{marginBottom: 24, display: "block"}}>Option</label>  
                                                    <Form.List name={['someExtraField', index, 'option']} label="Option">
                                                        {
                                                            (fields, { add, remove }) => 
                                                            <>
                                                                {
                                                                    fields.map((field, index) => {
                                                                        
                                                                        return (
                                                                            <Form.Item
                                                                                required={false}
                                                                                key={index}
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
                                        </> 
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

export default EditCategory
import { Form, Input, Modal, Table, Button } from 'antd';
import React, { useEffect, useState } from 'react'
import { MdOutlineDelete } from 'react-icons/md';
import BackButton from './BackButton';
import { useDispatch, useSelector } from 'react-redux';
import { getAdmins } from "../../redux/apiSlice/Admin/getAdminListSlice";
import { makeAdmin } from "../../redux/apiSlice/Admin/makeAdminSlice";
import { deleteAdmin } from "../../redux/apiSlice/Admin/deleteAdminSlice";
import Swal from 'sweetalert2';

  
const MakeAdmin = () => {
    const [openAddModel, setOpenAddModel] = useState(false);
    const dispatch = useDispatch();
    const { admins } = useSelector(state => state.getAdmins);
    
    useEffect(()=>{ dispatch(getAdmins()) }, [dispatch])

    

    const handleDelete=async(id)=>{
        Swal.fire({
            title: "Are you sure to delete this User?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            showCancelButton: "No",
            confirmButtonText: "Yes",
        }).then(async(result) => {
            if (result.isConfirmed) {
                dispatch(deleteAdmin(id)).then((response)=>{
                    if(response.type === "deleteAdmin/fulfilled"){
                        Swal.fire({
                            position: "center",
                            title: "Deleted!",
                            text: "User Deleted Successfully",
                            icon: "success",
                            timer: 1500,
                            showConfirmButton: false,
                        }).then(()=>{
                            dispatch(getAdmins());
                        })
                    }
                });
                        
            }
        }); 

    }


    const columns = [
        {
          title: 'Full Name',
          dataIndex: 'name',
          key: 'name',
          render: (_, record) => <p>{record?.fullName}</p>,
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: 'User Type',
          dataIndex: 'userType',
          key: 'userType',
        },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <MdOutlineDelete onClick={()=>handleDelete(record._id)} className='cursor-pointer' size={25} color='red'/>
          ),
        },
    ];

    const handleSubmit=(values)=>{
        dispatch(makeAdmin({...values, termAndCondition: true}))
        .then((response)=>{
            if(response?.type === "admins/fulfilled"){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Admin Created Successfully",
                    showConfirmButton: false,
                    timer: 1500
                }).then((response)=>{
                    dispatch(getAdmins())
                    setOpenAddModel(false)
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
        });

    }



    return (
        <div >
            <div style={{margin: "24px 0"}}>
                <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%"}} >
                    <BackButton link="/" />
                    <button 
                        onClick={()=>setOpenAddModel(true)}
                        style={{
                            width: "164px",
                            height: "36px",
                            borderRadius:"8px",
                            color:"white",
                            backgroundColor:"#2FD5C7",
                            border:"none",
                            outline: "none",
                            cursor: "pointer"
                        }}
                    >
                        Make Admin
                    </button>
                </div>
            </div>
            <Table columns={columns} dataSource={admins} pagination={false} />

            <Modal
                centered
                open={openAddModel}
                onCancel={() => setOpenAddModel(false)}
                width={500}
                footer={false}
            >
                <div>
                    <h1 style={{marginBottom: "12px"}}>Make Admin</h1>
                    <Form
                        name="normal_login"
                        initialValues={{role:"ADMIN"}}

                        onFinish={handleSubmit}
                    >
                        <div style={{marginBottom: "16px"}}>
                            <label style={{display: "block", marginBottom: "5px" }}>Full Name</label>
                            <Form.Item
                                style={{marginBottom: 0}}
                                name="fullName"
                                rules={[
                                    {
                                    required: true,
                                    message: "Please input User Full Name",
                                    },
                                ]}
                            >
                                <Input
                                    placeholder="Enter Full Name"
                                    type="text"
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
            
                        <div style={{marginBottom: "16px"}}>
                            <label style={{display: "block", marginBottom: "5px" }} htmlFor="">Email </label>
                            <Form.Item
                                name="email"
                                rules={[
                                    {
                                    required: true,
                                    message: "Please input User Email",
                                    },
                                ]}
                                style={{marginBottom: 0}}
                            >
                                <Input
                                    type="text"
                                    placeholder="Enter User Email"
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
            
                        <div style={{marginBottom: "16px"}}>
                            <label style={{display: "block", marginBottom: "5px" }} htmlFor="password">Password</label>
                            <Form.Item
                                style={{marginBottom: 0}}
                                name="password"
                                rules={[
                                    {
                                    required: true,
                                    message: "Please input User Password!",
                                    },
                                ]}
                            >
                                <Input.Password
                                    type="password"
                                    placeholder="Enter User password"
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


                        <div style={{marginBottom: "16px"}}>
                            <label style={{display: "block", marginBottom: "5px" }} htmlFor="password">Confirm Password</label>
                            <Form.Item
                                style={{marginBottom: 0}}
                                name="confirmPass"
                                rules={[
                                    {
                                    required: true,
                                    message: "Please input admin Confirm Password!",
                                    },
                                ]}
                            >
                                <Input.Password
                                    type="password"
                                    placeholder="Enter User Confirm password"
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

                        <div style={{marginBottom: "16px"}}>
                            <label style={{display: "block", marginBottom: "5px" }} htmlFor="password">Admin Mobile Number</label>
                            <Form.Item
                                style={{marginBottom: 0}}
                                name="mobileNumber"
                            >
                                <Input
                                    type="Text"
                                    placeholder="Enter Admin Mobile Number"
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
                        
                        <div style={{marginBottom: "16px"}}>
                            <label style={{display: "block", marginBottom: "5px" }} htmlFor="password">Location </label>
                            <Form.Item
                                style={{marginBottom: 0}}
                                name="location"
                            >
                                <Input
                                    type="Text"
                                    placeholder="Enter Admin Location"
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

                        <div style={{marginBottom: "16px"}}>
                            <label style={{display: "block", marginBottom: "5px" }} htmlFor="password">User Type</label>
                            <Form.Item
                                style={{marginBottom: 0}}
                                name="role"
                            >
                                <Input
                                    type="Text"
                                    placeholder="Enter User password"
                                    style={{
                                        border: "1px solid #E0E4EC",
                                        height: "52px",
                                        background: "white",
                                        borderRadius: "8px",
                                        outline: "none",
                                    }}
                                    readOnly
                                />
                            </Form.Item>
                        </div>
            
                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                block
                                style={{
                                    border: "none",
                                    height: "52px",
                                    background: "#2FD5C7",
                                    color: "white",
                                    borderRadius: "8px",
                                    outline: "none",
                                }}
                            >
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Modal>
        </div>
    )
}

export default MakeAdmin
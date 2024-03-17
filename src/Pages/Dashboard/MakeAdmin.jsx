import { Form, Input, Modal, Table, Button } from 'antd';
import React, { useState } from 'react'
import { MdOutlineDelete } from 'react-icons/md';
import BackButton from './BackButton';


const data = [
    {
        key: "1",
        fullName: "Tushar",
        email: "tushar@gmail.com",
        userType: "ADMIN",
    },
    {
        key: "2",
        fullName: "Rahman",
        email: "rahman@gmail.com",
        userType: "ADMIN",
    },
    {
        key: "3",
        fullName: "Rafsan",
        email: "rafsan@gmail.com",
        userType: "ADMIN",
    },
    {
        key: "4",
        fullName: "jusef",
        email: "jusef@gmail.com",
        userType: "ADMIN",
    },
    {
        key: "5",
        fullName: "Asad",
        email: "asad@gmail.com",
        userType: "ADMIN",
    },
    {
        key: "6",
        fullName: "Fahim",
        email: "fahim@gmail.com",
        userType: "ADMIN",
    },
    {
        key: "7",
        fullName: "Nadir",
        email: "nadir@gmail.com",
        userType: "ADMIN",
    }
  ];
  
const MakeAdmin = () => {
    const [openAddModel, setOpenAddModel] = useState(false);
    const [reFresh, setReFresh] = useState("");

    if(reFresh){
        setTimeout(()=>{
            setReFresh("")
        }, 1500)
    }

    const handleDelete=async(value)=>{
        /* Swal.fire({
            title: "Are you sure to delete this User?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            showCancelButton: "No",
            confirmButtonText: "Yes",
        }).then(async(result) => {
            if (result.isConfirmed) {
                const response = await baseURL.get(`/delete-admin/${value?.id}`,
                    {
                        headers: {
                            authorization: `Bearer ${localStorage.getItem('token')}`
                        }
                    }
                )
                if(response.status === 200){
                    Swal.fire({
                        position: "center",
                        title: "Deleted!",
                        text: "User Deleted Successfully",
                        icon: "success",
                        timer: 1500,
                        showConfirmButton: false,
                    }).then(()=>{
                        dispatch(AllAdmin());
                    })
                }
                        
            }
        });  */

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
            <MdOutlineDelete onClick={()=>handleDelete(record)} className='cursor-pointer' size={25} color='red'/>
          ),
        },
    ];
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
            <Table columns={columns} dataSource={data} pagination={false} />

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
                        initialValues={{
                            remember: true,
                        }}
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
                            <label style={{display: "block", marginBottom: "5px" }} htmlFor="password">User Type</label>
                            <Form.Item
                                style={{marginBottom: 0}}
                                name="userType"
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
                                    defaultValue="ADMIN"
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
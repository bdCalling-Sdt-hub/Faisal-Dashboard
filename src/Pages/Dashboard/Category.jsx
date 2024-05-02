import React, { useState } from 'react';
import BackButton from './BackButton';
import { Button, Modal, Upload, ColorPicker,Table } from 'antd'
import { FaRegEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { CiCamera } from 'react-icons/ci';
import { Link } from 'react-router-dom';


const Category = () => {
    const [open, setOpen] = useState(false);

    const data = [
        {
            id: 1,
            name: "Aesthetics",
            someExtraField: {
                Animation: "Cake Design",
                Conditions: ["Used", "New", "Modify"]
            }
        },

        {
            id: 2,
            name: "Cuisine and Pastry",
            extraField:["Cake Design", "Services Category","Cooking Classes"]
        },

        {
            id: 3,
            name: "Decorations & Themes",
            extraField:["Cake Design", "Services Category","Cooking Classes"]
        },

        {
            id: 4,
            name: "Fashion",
            extraField:["Cake Design", "Services Category","Cooking Classes"]
        },

        {
            id: 5,
            name: "Entertainment",
            extraField:["Cake Design", "Services Category","Cooking Classes"]
        }
    ]

    const columns = [
        {
            title: 'Serial No.',
            dataIndex: 'id',
            key: "id"
          
        },
        {
            title: 'Category Name',
            dataIndex: 'name',
            key: "name",
        },
        {
            title: 'ACTIONS',
            dataIndex: 'actions',
            key:"actions",
            render: ( _, record ) => (
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px"                    
                }}>
                    <FaRegEdit style={{cursor: "pointer"}} size={22} />
                    <MdDelete style={{cursor: "pointer"}} size={22} />
                </div>
            )
        }
    ];

    return (
        <div>
            <div style={{marginBottom: "16px"}}>
                <BackButton link="/" />
            </div>

            <div style={{display: "flex", alignItems: "center", justifyContent : "space-between", marginBottom: 24}}>
                <h2>Category</h2>
                <Link 
                    to={"/add-category"}
                    style={{
                        background: "#23A095",
                        color: "white",
                        border: "none",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                        padding: "6px 16px ",
                        borderRadius: 6 

                    }}
                >
                    Add Category
                </Link>
            </div>

            <Table columns={columns} dataSource={data} pagination={false} />
            

            <Modal
                title='Add Category'
                centered
                open={open}
                onCancel={() => setOpen(false)}
                width={500}
                footer={false}
            >
                <div style={{marginTop: 12}}>

                    <div>

                        <div>
                            <label style={{marginBottom : 5, display: "block"}}>Category name</label>
                            <input 
                                style={{
                                    width: "100%",
                                    height: "44px",
                                    border: "none",
                                    borderRadius: "8px",
                                    padding : "16px",
                                    color: "black",
                                    outline: "none",
                                    backgroundColor: "#E9EAEC",
                                    marginBottom: 16
                                }}
                                type="text" 
                                placeholder="Enter Category name"
                                name="category_name"
                            />
                        </div>

                        <div>
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
                        </div>


                        <Button
                            onClick={()=> setOpen(false)}
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
                    </div>
                </div>
            </Modal>

        </div>
    )
}

export default Category;
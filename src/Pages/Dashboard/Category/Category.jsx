import { Button, Modal, Upload, ColorPicker,Table } from 'antd'
import React, { useState } from 'react'
import { CiCamera } from "react-icons/ci";
import { SketchPicker } from 'react-color';
import cat1 from "../../../Images/cata1.png";
import cat2 from "../../../Images/cata2.png";
import cat3 from "../../../Images/cata3.png";
import cat4 from "../../../Images/cata4.png";
import cat5 from "../../../Images/cata5.png";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";
import EditCategoryModal from '../../../Components/Modal/EditCategoryModal';
import AddCategoryModal from '../../../Components/Modal/AddCategoryModal';
import EditSubCategory from '../../../Components/Modal/EditSubCategory';

const Category = () => {
    const [open, setOpen] = useState(false);
    const [primary, setPrimary] = useState('');
    const [secondary, setSecondary] = useState("");
    const [img, setImg] = useState();
    const [categoryOpen, setOpenCategory] = useState();
    const [editCategory, setEditCategory] = useState();
    const [deleteCategory, setDeleteCategory] = useState(false);
    const [value, setValue] = useState();
    const [deleteValue, setDeleteValue] = useState("");
    const [imageUrl, setImageUrl] = useState();
    
    const category = JSON?.parse(localStorage.getItem('category'));
    const [addCategoryImageUrl, setAddCategoryImageUrl] = useState();
    const [editCategoryImageUrl, setEditCategoryImageUrl] = useState();
    const [editSubCategoryImageUrl, setEditSubCategoryImageUrl] = useState(value?.image);
    console.log(editSubCategoryImageUrl);
    
    const data = [
        {
            name: "Aesthetics",
            image: cat1,
            primary_color: "#ffb7d5",
            secondary_color: "#ffb7d5",
            subCategory:[
                {
                    name: "Makeup",
                    image: cat1,
                    color: "#ffb7d5"
                },
                {
                    name: "Facial hair removal",
                    image: cat1,
                    color: "#ffb7d5"
                },
                {
                    name: "body hair removal",
                    image: cat1,
                    color: "#ffb7d5"
                },
                {
                    name: "Manicures",
                    image: cat1,
                    color: "#ffb7d5"
                },
                {
                    name: "Pedicures",
                    image: cat1,
                    color: "#ffb7d5"
                },
                {
                    name: "Hairdressing",
                    image: cat1,
                    color: "#ffb7d5"
                },
            ]
        },

        {
            name: "Cuisine and Pastry",
            image: cat2,
            primary_color: "#ffb7d5",
            secondary_color: "#ffb7d5",
            subCategory:[
                {
                    name: "Cake Design",
                    image: cat1,
                    color: "#ffb7d5"
                },
                {
                    name: "Services Category",
                    image: cat1,
                    color: "#ffb7d5"
                },
                {
                    name: "Cooking Classes ",
                    image: cat1,
                    color: "#ffb7d5"
                },
            ]
        },

        {
            name: "Decorations & Themes",
            image: cat3,
            primary_color: "#ffb7d5",
            secondary_color: "#ffb7d5",
            subCategory:[
                {
                    name: "Event Decorating",
                    image: cat1,
                    color: "#ffb7d5"
                },
                {
                    name: "Disguise",
                    image: cat1,
                    color: "#ffb7d5"
                },
                {
                    name: "Amateur Painter",
                    image: cat1,
                    color: "#ffb7d5"
                },
                {
                    name: "Designer",
                    image: cat1,
                    color: "#ffb7d5"
                },
            ]
        },

        {
            name: "Fashion",
            image: cat4,
            primary_color: "#ffb7d5",
            secondary_color: "#ffb7d5",
            subCategory:[
                {
                    name: "Outfits Rental",
                    image: cat1,
                    color: "#ffb7d5"
                },
                {
                    name: "Stylist",
                    image: cat1,
                    color: "#ffb7d5"
                },
            ]
        },

        {
            name: "Entertainment",
            image: cat5,
            primary_color: "#ffb7d5",
            secondary_color: "#ffb7d5",
            subCategory:[
                {
                    name: "Musicians",
                    image: cat1,
                    color: "#ffb7d5"
                },
                {
                    name: "Photographers",
                    image: cat1,
                    color: "#ffb7d5"
                },
                {
                    name: "Entertainment Animation",
                    image: cat1,
                    color: "#ffb7d5"
                },
            ]
        }
    ]
    
    
    const handleValue=()=>{
        localStorage.removeItem('category')
        setEditCategory('')
        setEditCategoryImageUrl('')
    }


    const columns = [
        {
            title: 'Category',
            dataIndex: 'name',
            key: "name"
          
        },
        {
            title: 'Sub Category',
            dataIndex: 'name',
            key: "name",
            render: ( _, record ) => (
                <p>{record?.subCategory[0].name}</p>
            )
        },
        {
            title: 'Primary Color',
            dataIndex: 'primary_color',
            key: "primary"
        },
        {
            title: 'Secondary Color',
            dataIndex: 'secondary_color',
            key: "secondary"
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
                    <FaRegEdit style={{cursor: "pointer"}} onClick={()=>(localStorage.setItem('category', JSON.stringify(record)), setEditCategory(record))} size={22} />
                    <MdDelete style={{cursor: "pointer"}} onClick={()=>setDeleteCategory(record)} size={22} />
                </div>
            )
        }
    ];

    

    const filterData = data.find((item)=> item.name === categoryOpen);
    
    const filterColumns = [
        {
            title: 'Sub Category',
            dataIndex: 'name',
            key: "name"
          
        },
        {
            title: 'Image',
            dataIndex: 'image',
            key: "image",
            render: ( _, record ) => (
                <img width={50} height={50} src={record?.image} alt="" />
            )
        },
        {
            title: 'Color',
            dataIndex: 'color',
            key: "color"
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
                    <FaRegEdit style={{cursor: "pointer"}} onClick={(e)=>setValue(record)} size={22} />
                    <MdDelete style={{cursor: "pointer"}} onClick={(e)=>setDeleteValue(record)} size={22} />
                </div>
            )
        }
    ];

    const handleAddCategoryChange = (e) => {
        const file= e.target.files[0];
        const imgUrl = URL.createObjectURL(file);
        setAddCategoryImageUrl(imgUrl);
        setImg(file)
    };
    const handleEditCategoryChange = (e) => {
        const file= e.target.files[0];
        const imgUrl = URL.createObjectURL(file);
        setEditCategoryImageUrl(imgUrl);
        setImg(file)
    };

    const handleEditSubCategoryChange = (e) => {
        console.log(e)
        const file= e.target.files[0];
        const imgUrl = URL.createObjectURL(file);
        setEditSubCategoryImageUrl(imgUrl);
        setImg(file)
    };

    


    return (
        <div>
            <div style={{display: "flex", alignItems: "flex-end", justifyContent : "flex-end"}}>
                <Button
                    onClick={()=>setOpen(true)}
                    style={{
                        background: "#ffb7d5",
                        color: "white",
                        border: "none",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"

                    }}
                >
                    Add Catagory
                </Button>
            </div>
            <h1>Category</h1>
            

            <div style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                flexWrap: "wrap",
                textAlign: "center",
                marginTop: "20px"
            }}>
                {
                    data?.map((category, index)=>
                        <div key={index} >
                            <div 
                                onClick={()=>setOpenCategory(category.name)} 
                                style={{
                                    border: "1px solid  #ffb7d5",
                                    borderRadius: "8px",
                                    padding: "10px",
                                    width: "230px",
                                    backgroundColor: "white",
                                    cursor: "pointer"
                                }}
                            >
                                <img style={{marginLeft: "auto", marginRight: "auto", display: "block",}} width={100} height={100} src={category?.image} alt="" />
                                <h3 style={{padding: 0, margin: 0, textAlign: "center"}}>{category?.name}</h3>
                            </div>
                        </div>

                    )
                }
            </div>
            

            <div style={{marginTop: "30px"}}>
                {
                    !filterData
                    ?

                    <Table columns={columns} dataSource={data} pagination={false} />
                    :
                    <>
                        <h3 style={{display: "flex", width: "fit-content", alignItems:"center", gap:"15px", cursor: "pointer", marginBottom: "10px"}} onClick={()=>setOpenCategory("")}><MdArrowBackIos />  Back to Category Details</h3>
                        <Table columns={filterColumns} dataSource={filterData?.subCategory} pagination={false} />
                    </>
                }
                
            </div>



            
            <Modal
                centered
                open={open}
                onCancel={() => setOpen(false)}
                width={500}
                footer={false}
            >
                <div>
                    <h1 style={{marginBottom: "12px"}}>Add Category</h1>
                    <div >
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
                            
                            <div >
                                <input style={{display: "none"}} onChange={handleAddCategoryChange}  type="file" name="" id="img" />
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
                                        color: "black",
                                        cursor: "pointer",
                                        backgroundImage: `url(${addCategoryImageUrl ? addCategoryImageUrl : "https://img.freepik.com/free-photo/paper-textured-background_53876-30486.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709596800&semt=ais"})`, // Replace 'your-image-url.jpg' with your actual image URL
                                        backgroundSize: "cover", // Adjust according to your image size preference
                                        backgroundPosition: "center"
                                    }}>
                                        <CiCamera size={40} /> 
                                        <h3>Upload Photo</h3>
                                </label>
                            </div>
                        </div>
                        <Button
                            onClick={()=> setOpen(false)}
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
                            Save
                        </Button>
                    </div>
                </div>
            </Modal>
            
             {/* edit category modal */}
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
                                <input style={{display: "none"}} onChange={handleEditCategoryChange}  type="file" name="" id="img" />
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
                                        backgroundImage: `url(${editCategoryImageUrl ? editCategoryImageUrl : category?.image})`, // Replace 'your-image-url.jpg' with your actual image URL
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

            {/* edit sub category  */}
            <Modal
                centered
                open={value}
                onCancel={() => setValue('')}
                width={500}
                footer={false}
            >
            <div>
                <h1 style={{marginBottom: "12px"}}>Edit Sub Category</h1>
                <div>
                    <div>
                        <label style={{marginBottom : "12px"}}>Sub Category name</label>
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
                                value={value?.name}
                                type="text" 
                                placeholder="Enter Category name"
                                name="category_name"
                            />
                        </div>

                        <label style={{marginBottom : "12px"}}>Color</label>
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
                                <input style={{display: "none"}} onChange={handleEditSubCategoryChange}  type="file" name="" id="img" />
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
                                        backgroundImage: `url(${editSubCategoryImageUrl})`, // Replace 'your-image-url.jpg' with your actual image URL
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
                </div>
                </div>
            </Modal>
                            


            {/* category  delete */}
            <Modal
                centered
                open={deleteCategory}
                onCancel={() => setDeleteCategory('')}
                width={500}
                footer={false}
            >
                <div>
                    <div
                        style={{
                            backgroundColor: "red",
                            width: "100px",
                            height: "100px",
                            borderRadius: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent:"center",
                            margin: "auto",
                            marginBottom: "30px"
                        }}
                    >
                        <MdDelete size={70} color='white'/>
                    </div>
                    <h1 style={{marginBottom: "12px", fontSize: "18px", textAlign: "center"}}>Are You Sure to Delete this Category ?</h1>
                    <div style={{display: "flex", alignItems: "center", gap: "30px"}}>
                        <Button
                            onClick={() => setDeleteCategory('')}
                            block
                            style={{
                                width : "100%",
                                height: "45px",
                                fontWeight: "400px",
                                fontSize: "18px",
                                background: "green",
                                color: "white",
                                marginTop : "44px",
                                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"
                            }}
                        >
                            YES
                        </Button>
                        <Button
                            onClick={() => setDeleteCategory('')}
                            
                            block
                            style={{
                                width : "100%",
                                height: "45px",
                                fontWeight: "400px",
                                fontSize: "18px",
                                background: "red",
                                color: "white",
                                marginTop : "44px",
                                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"
                            }}
                        >
                            NO
                        </Button>
                    </div>
                </div>
            </Modal>


            {/* subcategory  delete */}
            <Modal
                centered
                open={deleteValue}
                onCancel={() => setDeleteValue('')}
                width={500}
                footer={false}
            >
                <div>
                    <div
                        style={{
                            backgroundColor: "red",
                            width: "100px",
                            height: "100px",
                            borderRadius: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent:"center",
                            margin: "auto",
                            marginBottom: "30px"
                        }}
                    >
                        <MdDelete size={70} color='white'/>
                    </div>
                    <h1 style={{marginBottom: "12px", fontSize: "18px", textAlign: "center"}}>Are You Sure to Delete this Sub Category ?</h1>
                    <div style={{display: "flex", alignItems: "center", gap: "30px"}}>
                        <Button
                            onClick={() => setDeleteValue('')}
                            style={{
                                width : "100%",
                                height: "45px",
                                fontWeight: "400px",
                                fontSize: "18px",
                                background: "green",
                                color: "white",
                                marginTop : "44px",
                                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"
                            }}
                        >
                            YES
                        </Button>
                        <Button
                            onClick={() => setDeleteValue('')}
                            style={{
                                width : "100%",
                                height: "45px",
                                fontWeight: "400px",
                                fontSize: "18px",
                                background: "red",
                                color: "white",
                                marginTop : "44px",
                                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"
                            }}
                        >
                            NO
                        </Button>
                    </div>
                </div>
            </Modal>

        </div>
    )
}

export default Category
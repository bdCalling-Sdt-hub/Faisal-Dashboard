import { Table, Calendar } from 'antd'
import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { CiFilter } from "react-icons/ci";
import moment from 'moment';


const SellingProductList = () => {
    const [open, setOpen] = useState(false);
    const [date, setDate] = useState("")
    const data = [
        {
          key: "1",
          image: "https://www.custommacbd.com/cdn/shop/products/iphone-14-pro-Max-deeppurple-Custom-Mac-BD_06a3babc-a8fa-4ab1-8bb1-6fa5b55e0dd9.jpg?v=1662622355",
          name: "Iphone 14 pro max",
          price: "600",
          selling: "500",
          status: "istock",
        },
        {
          key: "2",
          image: "https://www.clove.co.uk/cdn/shop/products/iphone-13-mini-starlight_1200x.jpg?v=1665065093",
          name: "Iphone 13 Mini",
          price: "600",
          selling: "500",
          status: "istock",
        },
        {
          key: "3",
          image: "https://cdn.dxomark.com/wp-content/uploads/medias/post-127929/Google-Pixel-7_featured-image-packshot-review.jpg",
          name: "Google Pixel 7",
          price: "600",
          selling: "500",
          status: "istock",
        },
        {
          key: "4",
          image: "https://www.gizchina.com/wp-content/uploads/images/2022/05/Google-Pixel-7-Pro.jpg",
          name: "Google Pixel 7 Pro",
          price: "600",
          selling: "500",
          status: "Complete",
        }
    ];

    const columns = [
        {
          title: "Image",
          dataIndex: "image",
          key: "image",
          render: (_,record) => (
            <img src={record?.image} style={{width:"40px", height: "40px"}}  alt="" />
          ),
        },
        {
          title: "Name",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "Price",
          dataIndex: "price",
          key: "price",
          render: (_,record) => (
            <p>${record?.price}</p>
          ),
        },
        {
          title: "Sold",
          dataIndex: "selling",
          key: "selling",
        },
        {
          title: "Stock",
          dataIndex: "status",
          key: "status",
          render: (_,record) => (
            <div style={{display: "flex", alignItems: 'center', gap: "8px"}}>
                <div style={{width: "10px", height: "10px", background: "#03FB75", borderRadius: "100%"}}></div>
                <p>{record?.status && "In Stock"}</p>
            </div>
          ),
        }
    ];

    const onPanelChange = (value, mode) => {
    };


    return (
        <div style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",

        }}>
            <div style={{display: "flex", alignItems: "center", marginBottom: "20px", justifyContent: "space-between"}}>
                <h1 style={{fontSize: "20px", fontWeight: 600, color: "#2F2F2F"}}>Selling Products</h1>
                <Link to="/products-list">
                    <p style={{color: "#2FD5C7", fontSize:"12px", textDecoration: "underline"}}>VIEW ALL</p>
                </Link>
            </div>
            <div style={{height: "34px", width: "100%", display: "flex", alignItems: "flex-end", justifyContent: "flex-end"}}>
                <div style={{height: "39px", position:"relative", width: "fit-content", display: "flex", alignItems: "center", gap: "20px"}}>
                    <div style={{width: "38px", cursor: "pointer", height: "39px", display:"flex", alignItems:"center", justifyContent: "center", background: "#F6F6F6", borderRadius:"8px"}}>
                        <CiFilter size={24} color='#717171' />
                    </div>
                    <div onClick={()=>setOpen(!open)}  style={{background: "#F6F6F6", cursor: "pointer", color:'#717171', padding: "9px", borderRadius:"8px"}}>
                        Feb-24-2024
                    </div>
                    {
                        open
                        &&

                        <div 
                            style={{
                                width: "400px", 
                                zIndex: "2", 
                                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", 
                                background: "white", 
                                height: "fit-content", 
                                border: "1px solid grey", 
                                position: "absolute", 
                                right: "200px",
                                top: 0
                            }}
                        >
                            <Calendar defaultPickerValue={today}  fullscreen={false} onPanelChange={onPanelChange} />
                        </div>
                    }
                </div>
            </div>
            <div>
                <Table 
                    columns={columns} 
                    dataSource={data} 
                    pagination={false}
                />
                
            </div>
        </div>
    )
}

export default SellingProductList
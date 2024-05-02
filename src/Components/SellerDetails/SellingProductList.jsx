import { Table, Slider , Dropdown } from 'antd'
import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { CiFilter } from "react-icons/ci";
import moment from 'moment';
import { DownOutlined } from "@ant-design/icons";
import StockDropdown from '../../Util/StockDropdown';

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


const SellingProductList = () => {
  const [category, setCategory] = useState(new URLSearchParams(window.location.search).get('category') || "All")
  const [stock, setStock] = useState(new URLSearchParams(window.location.search).get('stock') || "In Stock");
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggleId, setToggleId] = useState();
  const [toggleId2, setToggleId2] = useState();


  const columns = [
    {
      title: "Serial No.",
      dataIndex: "no",
      key: "no",
      render: (_,record) => (
        <p>{record.key}</p>
      ),
    },
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
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <button
          onClick={()=>(setToggle(!toggle), setToggleId(record.key))} 
          style={{
            padding: "3px 0",
            borderRadius: 4,
            border: "none",
            background: "#2FD5C7",
            color: "white",
            cursor: "pointer",
            width: 120
          }}
        >
          {
            toggleId === record.key && toggle
            ?
            "Product"
            :
            "Featured"
          }
        </button>
      ),
    },
    {
      title: "Banner Action",
      dataIndex: "baction",
      key: "baction",
      render: (_, record) => (
        <button
          onClick={()=>(setToggle2(!toggle2), setToggleId2(record.key))} 
          style={{
            padding: "3px 0",
            borderRadius: 4,
            border: "none",
            background: "#2FD5C7",
            color: "white",
            cursor: "pointer",
            width: 120
          }}
        >
          {
            toggleId2 === record.key && toggle2
            ?
            "Remove Banner"
            :
            "Add  Banner"
          }
        </button>
      ),
  }
  ];
    
  const items = [
      {
        label: "House",
        key: "House",
      },
      {
        label: "Car",
        key: "Car",
      },
      {
        label: "Phone",
        key: "Phone",
      },
  ];

  const onClick = ({ key }) => {
    setCategory(key)
    window.history.pushState(null, "", `?category=${key}`);
  };


    return (
        <div style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            

        }}>
            <div style={{display: "flex", alignItems: "center", marginBottom: "10px", justifyContent: "space-between"}}>
                <h1 style={{fontSize: "20px", fontWeight: 600, color: "#2F2F2F"}}>Selling Products</h1>
                <Link to="/seller-product-list">
                  <p style={{color: "#2FD5C7", fontSize:"12px", textDecoration: "underline"}}>VIEW ALL</p>
                </Link>
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
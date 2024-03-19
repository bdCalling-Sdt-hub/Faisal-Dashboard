import React, { useState } from 'react';
import BackButton from "../Dashboard/BackButton";
import { MdOutlineFilterList } from 'react-icons/md';
import { FiEye, FiSearch } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import { Dropdown, Input, Table } from 'antd';
import { DownOutlined } from "@ant-design/icons";
import { FaRegTrashCan } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const data = [
    {
      key: "1",
      name: "Tushar",
      email: "tushar@gmail.com",
      date: "18 Jul, 2023  4:30pm",
      location: "Banasree",
      status: "Out Of Stock",
      selling: "500",
      balance: "600",
    },
    {
      key: "2",
      name: "Rahman",
      email: "rahman@gmail.com",
      date: "18 Jul, 2023  4:30pm",
      location: "Banasree",
      status: "In Stock",
      selling: "500",
      balance: "600",
    },
    {
      key: "3",
      name: "Rafsan",
      email: "rafsan@gmail.com",
      date: "18 Jul, 2023  4:30pm",
      location: "Banasree",
      status: "Out Of Stock",
      selling: "500",
      balance: "600",
    },
    {
      key: "4",
      name: "jusef",
      email: "jusef@gmail.com",
      date: "18 Jul, 2023  4:30pm",
      location: "Banasree",
      status: "In Stock",
      selling: "500",
      balance: "600",
    },
    {
      key: "5",
      name: "Asad",
      email: "asad@gmail.com",
      date: "18 Jul, 2023  4:30pm",
      location: "Banasree",
      status: "Out Of Stock",
      selling: "500",
      balance: "600",
    },
    {
      key: "6",
      name: "Fahim",
      email: "fahim@gmail.com",
      date: "18 Jul, 2023  4:30pm",
      location: "Banasree",
      status: "In Stock",
      selling: "500",
      balance: "600",
    },
    {
      key: "7",
      name: "Nadir",
      email: "nadir@gmail.com",
      date: "18 Jul, 2023  4:30pm",
      location: "Banasree",
      status: "Out Of Stock",
      selling: "500",
      balance: "600",
    },
    {
        key: "8",
        name: "Tushar",
        email: "tushar@gmail.com",
        date: "18 Jul, 2023  4:30pm",
        location: "Banasree",
        status: "In Stock",
        selling: "500",
        balance: "600",
      },
      {
        key: "9",
        name: "Rahman",
        email: "rahman@gmail.com",
        date: "18 Jul, 2023  4:30pm",
        location: "Banasree",
        status: "Out Of Stock",
        selling: "500",
        balance: "600",
      },
      {
        key: "10",
        name: "Rafsan",
        email: "rafsan@gmail.com",
        date: "18 Jul, 2023  4:30pm",
        location: "Banasree",
        status: "In Stock",
        selling: "500",
        balance: "600",
      },
      {
        key: "11",
        name: "jusef",
        email: "jusef@gmail.com",
        date: "18 Jul, 2023  4:30pm",
        location: "Banasree",
        status: "Out Of Stock",
        selling: "500",
        balance: "600",
      },
      {
        key: "12",
        name: "Asad",
        email: "asad@gmail.com",
        date: "18 Jul, 2023  4:30pm",
        location: "Banasree",
        status: "In Stock",
        selling: "500",
        balance: "600",
      },
      {
        key: "13",
        name: "Fahim",
        email: "fahim@gmail.com",
        date: "18 Jul, 2023  4:30pm",
        location: "Banasree",
        status: "Out Of Stock",
        selling: "500",
        balance: "600",
      },
      {
        key: "14",
        name: "Nadir",
        email: "nadir@gmail.com",
        date: "18 Jul, 2023  4:30pm",
        location: "Banasree",
        status: "In Stock",
        selling: "500",
        balance: "600",
      },
      {
        key: "15",
        name: "Asad",
        email: "asad@gmail.com",
        date: "18 Jul, 2023  4:30pm",
        location: "Banasree",
        status: "Out Of Stock",
        selling: "500",
        balance: "600",
      },
      {
        key: "16",
        name: "Fahim",
        email: "fahim@gmail.com",
        date: "18 Jul, 2023  4:30pm",
        location: "Banasree",
        status: "In Stock",
        selling: "500",
        balance: "600",
      },
      {
        key: "17",
        name: "Nadir",
        email: "nadir@gmail.com",
        date: "18 Jul, 2023  4:30pm",
        location: "Banasree",
        status: "In Stock",
        selling: "500",
        balance: "600",
      }
];

const TotalSellerList = () => {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState(new URLSearchParams(window.location.search).get('category') || "All")
    const [page, setPage] = useState( new URLSearchParams(window.location.search).get('page') || 1);
    const items = [
        {
          label: "Car",
          key: "Car",
        },
        {
          label: "Bike",
          key: "Bike",
        },
        {
          label: "Cycle",
          key: "Cycle",
        },
    ];

    const handleDelete=(id)=>{
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes",
            cancelButtonText: "No"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
                showConfirmButton: false,
                timer: 1500,
              });
            }
        });
    }

    const columns = [
        {
          title: "S.No",
          dataIndex: "key",
          key: "key",
        },
        {
          title: "Name",
          dataIndex: "name",
          key: "username",
        },
        {
          title: "Email",
          dataIndex: "email",
          key: "email",
        },
        
        {
          title: "Date",
          dataIndex: "date",
          key: "date",
        },
        {
          title: "Location",
          dataIndex: "location",
          key: "location",
        },
        {
          title: "Status",
          dataIndex: "status",
          key: "status",
          render: (_,record) => (
            <div style={{display: "flex", alignItems: 'center', gap: "8px"}}>
                <div 
                    style={{
                        width: "10px", 
                        height: "10px", 
                        background: record.status === "In Stock" ?  "#03FB75" : "#FB0303" ,
                        borderRadius: "100%",
                    }}
                ></div>
                <p>{record?.status}</p>
            </div>
          ),
        },
        {
          title: "Total Selling",
          dataIndex: "selling",
          key: "selling",
        },
        {
          title: "Balance",
          dataIndex: "balance",
          key: "balance",
        },
        
        {
          title: "ACTION",
          dataIndex: "printView",
          key: "printView",
          render: (_,record) => (
            <div style={{display: "flex", alignItems: "center", gap: "16px"}}>
                <FaRegTrashCan onClick={()=>handleDelete(record?.id)} size={18} color='#919191' style={{ cursor: "pointer" }} />
                <Link to="/seller-details/1">
                    <FiEye size={20} color='#919191' style={{ cursor: "pointer" }} />
                </Link>
            </div>
          ),
        },
    ];
  
    const handlePageChange=(page)=>{
        setPage(page);
        const params = new URLSearchParams(window.location.search);
        params.set('page', page);
        window.history.pushState(null, "", `?${params.toString()}`);
    }

    const onClick = ({ key }) => {
        setCategory(key)
        const params = new URLSearchParams(window.location.search);
        params.set('category', key);
        window.history.pushState(null, "", `?${params.toString()}`);
    };

    return (
        <div>
            <div style={{marginBottom: "16px"}}>
                <BackButton link="/" />
            </div>
            <div
                style={{
                    background: "white",
                    padding: "24px",
                    borderRadius: "12px"
                }}
            >
                <h1 style={{fontSize: "20px", fontWeight: 600, color: "#2F2F2F"}}>Total Seller List</h1>
                <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", margin: "16px 0"}}> 
                    <div style={{display: "flex", alignItems: "center", gap: "16px"}}>
                        <div
                            style={{
                                width: "197px",
                                height: "30px",
                                borderRadius: "8px",
                                border: "1px solid #E9E9E9",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                padding: "5px 8px",
                                color: "#8B8B8B"
                            }}
                        >
                            Category
                            <Dropdown menu={{ items, onClick }} >
                                <p 
                                    style={{ 
                                        cursor: "pointer", 
                                        color:'#717171', 
                                        borderRadius: "4px",
                                    }} 
                                    onClick={(e) => e.preventDefault()}
                                >
                                    {category}
                                    <DownOutlined style={{paddingLeft: "18px"}} color='#717171' />
                                </p>
                            </Dropdown>
                        </div>

                        <div
                            style={{
                                width: "304px",
                                height: "30px",
                                borderRadius: "8px"
                            }}
                        >
                            <Input
                                onChange={(e)=>setSearch(e.target.value)}
                                placeholder="Search..."
                                prefix={<FiSearch size={14} color="#868FA0"/>}
                                suffix={<IoClose onClick={()=>setSearch("")} style={{cursor: "pointer"}} size={14} color="#2B2A2A" />}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    fontSize: "14px"
                                }}
                                size="middle"
                                value={search}
                            />
                        </div>
                    </div>

                    <div style={{display: "flex", alignItems: "center", gap: "16px"}}>
                        <button style={{width: "139px", borderRadius: "4px", height: "30px", backgroundColor: "#2FD5C7", color: "white", border: "none", outline: "none"}}>Add New Sellers</button>
                        <div 
                            style={{
                                width:"85px",
                                height: "30px",
                                borderRadius: "4px",
                                border: "1px solid #E9E9E9",
                                color: "#717171",
                                display: "flex",
                                alignItems: "center",
                                padding: "0 8px",
                                justifyContent: "space-between"
                            }}
                        >
                            Filter
                            <MdOutlineFilterList/>
                        </div>
                    </div>
                </div>

                <div>
                    <Table 
                        columns={columns} 
                        dataSource={data} 
                        pagination={{
                        pageSize: 10,
                        defaultCurrent: parseInt(page),
                        onChange: handlePageChange
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default TotalSellerList
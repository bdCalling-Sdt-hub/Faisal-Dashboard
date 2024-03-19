import { Button, Table, } from "antd";
import React, { useEffect, useState } from "react";
import { FiEye, } from "react-icons/fi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FaRegTrashCan } from "react-icons/fa6";

const data = [
  {
    key: "1",
    name: "Tushar",
    email: "tushar@gmail.com",
    date: "18 Jul, 2023  4:30pm",
    location: "Banasree",
    status: "In Stock",
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
    status: "In Stock",
    selling: "500",
    balance: "600",
  },
  {
    key: "4",
    name: "jusef",
    email: "jusef@gmail.com",
    date: "18 Jul, 2023  4:30pm",
    location: "Banasree",
    status: "Out Of Stock",
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
    status: "Out Of Stock",
    selling: "500",
    balance: "600",
  },
  {
    key: "7",
    name: "Nadir",
    email: "nadir@gmail.com",
    date: "18 Jul, 2023  4:30pm",
    location: "Banasree",
    status: "In Stock",
    selling: "500",
    balance: "600",
  }
];

const TotalSellerListTable = () =>{
  const [page, setPage] = useState( new URLSearchParams(window.location.search).get('page') || 1);

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
            <FiEye onClick={()=>navigate(`/seller-details/${record?.key}`)} size={20} color='#919191' style={{ cursor: "pointer" }} />
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

  return(
    <div style={{height: "fit-content", borderRadius: "8px", background: "white", padding: "20px 24px 0 24px"}}>
      <div style={{display: "flex", alignItems: "center", marginBottom: "20px", justifyContent: "space-between"}}>
        <h1 style={{fontSize: "20px", fontWeight: 600, color: "#2F2F2F"}}>Total Seller List</h1>
        <Link to="/total-seller-list">
          <p style={{color: "#2FD5C7", fontSize:"12px", textDecoration: "underline"}}>VIEW ALL</p>
        </Link>
      </div>
      <Table 
        columns={columns} 
        dataSource={data} 
        pagination={{
          pageSize: 4,
          defaultCurrent: parseInt(page),
          onChange: handlePageChange
        }}
      />
    </div>
  )

};
export default TotalSellerListTable;

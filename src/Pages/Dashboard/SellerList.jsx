import React, { useState } from 'react'
import BackButton from './BackButton';
import { FiEye } from 'react-icons/fi';
import { FaRegTrashCan } from "react-icons/fa6";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { Table } from 'antd';

const SellerList = () => {
  const navigate = useNavigate();
    const [page, setPage] = useState(1); 
    const handlePageChange=(page)=>{
        setPage(page);
        window.history.pushState(null, "", `?page=${page}`);
    }

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
          render: (_, record) => (
            <p
                style={{
                    width: "88px",
                    height: "31px",
                    borderRadius: "100px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: record?.status === "Active" ? "#E0F9F7"  : "#FFC3C3" ,
                    color: record?.status === "Active" ? "#2FD5C7" : "#9C0101"
                }}
            >
                {record?.status}
            </p>
          )
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

    const data = [
        {
          key: "1",
          name: "Tushar",
          email: "tushar@gmail.com",
          date: "18 Jul, 2023  4:30pm",
          location: "Banasree",
          status: "Active",
          selling: "500",
          balance: "600",
        },
        {
          key: "2",
          name: "Rahman",
          email: "rahman@gmail.com",
          date: "18 Jul, 2023  4:30pm",
          location: "Banasree",
          status: "Inactive",
          selling: "500",
          balance: "600",
        },
        {
          key: "3",
          name: "Rafsan",
          email: "rafsan@gmail.com",
          date: "18 Jul, 2023  4:30pm",
          location: "Banasree",
          status: "Active",
          selling: "500",
          balance: "600",
        },
        {
          key: "4",
          name: "jusef",
          email: "jusef@gmail.com",
          date: "18 Jul, 2023  4:30pm",
          location: "Banasree",
          status: "Active",
          selling: "500",
          balance: "600",
        },
        {
          key: "5",
          name: "Asad",
          email: "asad@gmail.com",
          date: "18 Jul, 2023  4:30pm",
          location: "Banasree",
          status: "Inactive",
          selling: "500",
          balance: "600",
        },
        {
          key: "6",
          name: "Fahim",
          email: "fahim@gmail.com",
          date: "18 Jul, 2023  4:30pm",
          location: "Banasree",
          status: "Inactive",
          selling: "500",
          balance: "600",
        },
        {
          key: "7",
          name: "Nadir",
          email: "nadir@gmail.com",
          date: "18 Jul, 2023  4:30pm",
          location: "Banasree",
          status: "Inactive",
          selling: "500",
          balance: "600",
        },
        {
            key: "8",
            name: "Tushar",
            email: "tushar@gmail.com",
            date: "18 Jul, 2023  4:30pm",
            location: "Banasree",
            status: "Active",
            selling: "500",
            balance: "600",
          },
          {
            key: "9",
            name: "Rahman",
            email: "rahman@gmail.com",
            date: "18 Jul, 2023  4:30pm",
            location: "Banasree",
            status: "Active",
            selling: "500",
            balance: "600",
          },
          {
            key: "10",
            name: "Rafsan",
            email: "rafsan@gmail.com",
            date: "18 Jul, 2023  4:30pm",
            location: "Banasree",
            status: "Inactive",
            selling: "500",
            balance: "600",
          },
          {
            key: "11",
            name: "jusef",
            email: "jusef@gmail.com",
            date: "18 Jul, 2023  4:30pm",
            location: "Banasree",
            status: "Inactive",
            selling: "500",
            balance: "600",
          },
          {
            key: "12",
            name: "Asad",
            email: "asad@gmail.com",
            date: "18 Jul, 2023  4:30pm",
            location: "Banasree",
            status: "Active",
            selling: "500",
            balance: "600",
          },
          {
            key: "13",
            name: "Fahim",
            email: "fahim@gmail.com",
            date: "18 Jul, 2023  4:30pm",
            location: "Banasree",
            status: "Inactive",
            selling: "500",
            balance: "600",
          },
          {
            key: "14",
            name: "Nadir",
            email: "nadir@gmail.com",
            date: "18 Jul, 2023  4:30pm",
            location: "Banasree",
            status: "Active",
            selling: "500",
            balance: "600",
        },
        {
          key: "15",
          name: "Asad",
          email: "asad@gmail.com",
          date: "18 Jul, 2023  4:30pm",
          location: "Banasree",
          status: "Active",
          selling: "500",
          balance: "600",
        },
        {
          key: "16",
          name: "Fahim",
          email: "fahim@gmail.com",
          date: "18 Jul, 2023  4:30pm",
          location: "Banasree",
          status: "Inactive",
          selling: "500",
          balance: "600",
        },
        {
          key: "17",
          name: "Nadir",
          email: "nadir@gmail.com",
          date: "18 Jul, 2023  4:30pm",
          location: "Banasree",
          status: "Active",
          selling: "500",
          balance: "600",
      }
    ];

    return (
        <div>
            <div style={{margin: "0 0 20px 0"}}>
                <BackButton link="/" />
            </div>
            <div>
                <Table columns={columns} dataSource={data} pagination={{
                    pageSize: 16,
                    onChange: handlePageChange
                }}/>
            </div>

        </div>
    )
}

export default SellerList
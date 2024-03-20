import React, { useEffect, useRef, useState } from 'react'
import BackButton from './BackButton';
import { FiEye } from 'react-icons/fi';
import { FaRegTrashCan } from "react-icons/fa6";
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
import { Table } from 'antd';
import { CiMenuKebab } from "react-icons/ci";

const SellerList = () => {
  const [open, setOpen] = useState()
  const navigate = useNavigate();
  const dropdownRef = useRef()
  const [page, setPage] = useState( new URLSearchParams(window.location.search).get('page') || 1);
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen("");
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);


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
            <div style={{position: "relative"}}>
              <CiMenuKebab onClick={(e)=>(e.stopPropagation() ,setOpen(record.key))} size={20} color='black' style={{ cursor: "pointer" }} />

              <div
                onClick={(e)=>e.stopPropagation()}
                ref={dropdownRef}
                style={{
                  display: record?.key === open ? "block" : "none", 
                  width: "113px",
                  height: "132px",
                  borderRadius: "8px",
                  zIndex: "2",
                  position: "absolute", 
                  top: "12px", 
                  right:"92px", 
                  background: "white", 
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  padding: "10px 0" ,
                  cursor: "pointer"

                }}
              >
                <p
                  style={{
                    width: "88px",
                    height: "31px",
                    borderRadius: "100px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#E0F9F7" ,
                    color: "#2FD5C7",
                    margin: "0 auto 0 auto",
                    cursor: "pointer",
                    marginBottom: "8px"
                  }}
                >
                  Approve
                </p>
                <p
                  onClick={handleDelete}
                  style={{
                    width: "88px",
                    height: "31px",
                    borderRadius: "100px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#FFC3C3" ,
                    color: "#9C0101",
                    margin: "0 auto 0 auto",
                    marginBottom: "8px"
                  }}
                >
                  Block
                </p>
                <Link to={`/seller-details/${record?.key}`}>
                  <p
                    style={{
                      width: "88px",
                      height: "31px",
                      borderRadius: "100px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "white" ,
                      color: "black",
                      margin: "0 auto 0 auto",
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    View
                  </p>
                </Link>
              </div>
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
            <div style={{background: "white", padding: "24px", borderRadius: "10px"}}>
                <h1 style={{fontSize: "32px", marginBottom: "16px", fontWeight: 600, color: "#6A6D7C"}}>All Seller List</h1>
                <Table columns={columns} dataSource={data} pagination={{
                  pageSize: 10,
                  current: parseInt(page),
                  onChange: handlePageChange
                }}/>
            </div>

        </div>
    )
}

export default SellerList
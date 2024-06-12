import { Table, } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { CiMenuKebab } from "react-icons/ci";
import { getSellerList } from "../../redux/apiSlice/Home/getSellerListSlice"
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

const TotalSellerListTable = () =>{
  const [open, setOpen] = useState();
  const dropdownRef = useRef();
  const dispatch = useDispatch();
  const {sellers} = useSelector(state=> state.getSellerList)

  useEffect(()=>{
    dispatch(getSellerList({}))
  }, [dispatch])



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
        render: (_, record, index) => (
          <p>{index + 1}</p>
        )
      },
      {
        title: "Name",
        dataIndex: "fullName",
        key: "fullName",
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
        render: (_, record) => (
          <p>{moment(record?.createdAt).format('L')}</p>
        )
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
                  background: record?.status === "ACTIVE" ? "#E0F9F7"  : "#FFC3C3" ,
                  color: record?.status === "ACTIVE" ? "#2FD5C7" : "#9C0101"
              }}
          >
              {record?.status}
          </p>
        )
      },
      
      {
        title: "ACTION",
        dataIndex: "printView",
        key: "printView",
        render: (_,record) => (
          <div style={{position: "relative"}}>
            <CiMenuKebab onClick={(e)=>(e.stopPropagation() ,setOpen(record._id))} size={20} color='black' style={{ cursor: "pointer" }} />

            <div
              onClick={(e)=>e.stopPropagation()}
              ref={dropdownRef}
              style={{
                display: record?._id === open ? "block" : "none", 
                width: "113px",
                height: 90,
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
                onClick={()=>handleDelete(record?._id)}
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
              <Link to={`/seller-details/${record?._id}`}>
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

  return(
    <div style={{height: "fit-content", borderRadius: "8px", background: "white", padding: "17px 24px"}}>
      <div style={{display: "flex", alignItems: "center", marginBottom: "15px", justifyContent: "space-between"}}>
        <h1 style={{fontSize: "20px", fontWeight: 600, color: "#2F2F2F"}}>Total Seller List</h1>
        <Link to="/seller-list">
          <p style={{color: "#2FD5C7", fontSize:"12px", textDecoration: "underline"}}>VIEW ALL</p>
        </Link>
      </div>
      <Table 
        columns={columns} 
        dataSource={sellers.slice(0, 5)} 
        pagination={false}
      />
    </div>
  )

};
export default TotalSellerListTable;

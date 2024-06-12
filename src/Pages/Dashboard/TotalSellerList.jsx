import React, { useEffect, useRef, useState } from 'react';
import BackButton from "../Dashboard/BackButton";
import { FiSearch } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import { Input, Table } from 'antd';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { CiMenuKebab } from 'react-icons/ci';
import { useDispatch, useSelector } from 'react-redux';
import { getSellerList } from '../../redux/apiSlice/Home/getSellerListSlice';
import { getBlockSeller } from '../../redux/apiSlice/Home/blockSellerSlice';
import moment from 'moment';

const TotalSellerList = () => {
    const [search, setSearch] = useState("");
    const [page, setPage] = useState( new URLSearchParams(window.location.search).get('page') || 1);
    const [open, setOpen] = useState();
    const dropdownRef = useRef();
    const dispatch = useDispatch();
    const {sellers} = useSelector(state=> state.getSellerList)
    console.log(sellers)
    

    useEffect(()=>{
      dispatch(getSellerList({page: page, search: search}))
    }, [dispatch, page, search])


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
              dispatch(getBlockSeller(id)).then((response)=>{
                if(response.type === "blockSeller/fulfilled"){
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500,
                  }).then((_response)=>{
                    dispatch(getSellerList())
                  })
                }else{
                  Swal.fire({
                    title: "Error",
                    text: response.error.message,
                    icon: "error",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                }
              })
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
                  display: record._id === open ? "block" : "none", 
                  width: "113px",
                  height: "95px",
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
                  onClick={()=>handleDelete(record._id)}
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
  
    const handlePageChange=(page)=>{
      setPage(page);
      const params = new URLSearchParams(window.location.search);
      params.set('page', page);
      window.history.pushState(null, "", `?${params.toString()}`);
    }

    return (
        <div>
            <div style={{marginBottom: "16px"}}>
                <BackButton link="/" />
            </div>
            <div
                style={{
                    background: "white",
                    padding: "20px",
                    borderRadius: "12px"
                }}
            >
                <h1 style={{fontSize: "20px", fontWeight: 600, color: "#2F2F2F"}}>Total Seller List</h1>
                <div
                  style={{
                      width: "500px",
                      height: "48px",
                      borderRadius: "8px",
                      margin: "24px 0"
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

                <div>
                    <Table 
                        columns={columns} 
                        dataSource={sellers} 
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
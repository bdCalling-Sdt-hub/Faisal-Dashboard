import React, { useEffect, useState } from 'react'
import BackButton from './BackButton';
import { HiOutlineMail } from "react-icons/hi";
import { Input, Pagination, Table } from 'antd';
import { FiSearch } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import { MdDelete } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { LuSend } from "react-icons/lu";
import { useDispatch, useSelector } from 'react-redux';
import { getContact } from "../../redux/apiSlice/Contact/getContactSlice";
import { sendContact } from "../../redux/apiSlice/Contact/sendContactSlice";
import moment from "moment";
import Swal from 'sweetalert2';

const Emails = () => {
    const [tab, setTab] = useState(new URLSearchParams(window.location.search).get('tab') || "inbox");
    const [page, setPage] = useState(new URLSearchParams(window.location.search).get('page') || 1);
    const [search, setSearch] = useState("");
    const [to, setTo] = useState("");
    const [message, setMessage] = useState("")
    const dispatch = useDispatch();
    const {contacts, pagination} = useSelector(state=> state.getContacts);


    useEffect(()=>{
        dispatch(getContact(search))
    }, [dispatch, search])

    const handleReset=()=>{
        setTo("");
        setMessage("")
    }


    const handleTab=(value)=>{
        setTab(value);
        const params = new URLSearchParams(window.location.search);
        params.set('tab', value);
        window.history.pushState(null, "", `?${params.toString()}`);
    }

    const handlePageChange = (page) => {
        setPage(page);
        const params = new URLSearchParams(window.location.search);
        params.set('page', page);
        window.history.pushState(null, "", `?${params.toString()}`);
    };

    const handleSubmit =()=>{
        dispatch(sendContact({email :to, description : message })).then((response)=>{
            if(response?.type === "sendContact/fulfilled"){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: response?.payload?.message,
                    showConfirmButton: false,
                    timer: 1500
                }).then(()=>{
                    dispatch(getContact())
                })
            }
        })
    }


    const columns = [
        {
            title: 'Name',
            dataIndex: 'fullName',
            key: "fullName",
            render: (_, data)=>(
                <p>{data?.userId?.fullName}</p>
            )
          
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: "email",
            render: (_, data)=>(
                <p>{data?.userId?.email}</p>
            )
        },
        {
            title: 'Message',
            dataIndex: 'message',
            key: "message",
        },
        {
            title: 'Time',
            dataIndex: 'createdAt',
            key: "createdAt",
            render: (_, data)=>(
                <p>{ moment(data?.createdAt).startOf('hour').fromNow()}</p>
            )
        },
    ];

    return (
        <div>

            {/* heading */}
            <div style={{marginBottom: "15px"}}>
                <BackButton link='/' />
            </div>

            {/* sidebar */}
            <div
                style={{
                    height: "81vh",
                    display: "flex",
                    alignItems: "center",
                    gap: "16px"
                }}
            >
                <div 
                    style={{
                        width: "290px",
                        height: "100%",
                        border: "1px solid #F5F5F5",
                        padding: "24px",
                        background: "white",
                        borderRadius: "8px"
                    }}
                >
                    <button
                        onClick={()=>handleTab("compose")}
                        style={{
                            width: "100%", 
                            height: "42px", 
                            background: "#2FD5C7", 
                            color: "white", 
                            borderRadius: "8px",
                            border: "none",
                            outline: "none",
                            marginBottom: "24px",
                            cursor: "pointer"
                        }}
                    >+ Compose</button>

                    <p style={{fontSize: "16px", fontWeight: 400, color: "#494949"}}>My Emails</p>
                    <div
                        onClick={()=>handleTab("inbox")}
                        style={{
                            width: "100%", 
                            height: "42px", 
                            background: "#E3F9F7", 
                            borderRadius: "8px",
                            marginTop: "14px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            color: "#2FD5C7",
                            padding: "0 16px",
                            cursor: "pointer"
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                color: "#2FD5C7"
                            }}
                        >
                            <HiOutlineMail size={17} />
                            <p>message</p>
                        </div>
                        {contacts?.length}
                    </div>
                </div>
                
                {/* content */}
                <div 
                    style={{
                        width: "100%",
                        height: "100%",
                        border: "1px solid #F5F5F5",
                        
                        background: "white",
                        borderRadius: "8px"
                    }}
                >
                    { 
                        tab === "inbox"
                        && 
                        <div>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    padding: "24px 24px 10px 24px",
                                }}
                            >
                                <div
                                    style={{
                                    width: "512px",
                                    height: "42px",
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
                                        value={search}
                                        size="middle"
                                    />
                                </div>
                            </div>
                            
                            <Table columns={columns} dataSource={contacts} pagination={false} />

                            {/* pagination */}
                            <div style={{
                                display: contacts?.length > 0 ? "flex" : "none",
                                alignItems: "center",
                                justifyContent: 'center',
                                marginTop: "25px"
                            }}>
                                <Pagination 
                                    defaultCurrent={parseInt(page)} 
                                    total={pagination.total} 
                                    onChange={handlePageChange} 
                                />
                            </div>
                        </div> 
                    }

                    {
                        tab === "compose" 
                        &&
                        <div>
                            <div 
                                style={{

                                }}
                            >   
                                {/* reset button */}
                                <div
                                    style={{
                                        width: "100%",
                                        display: "flex",
                                        alignItems: "flex-end",
                                        justifyContent: "flex-end",
                                        padding: "16px"
                                    }}
                                >
                                    
                                    <div
                                        style={{
                                            width: "30px",
                                            height: "30px",
                                            borderRadius: "6px",
                                            border: "1px solid #D5D5D5",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            cursor: "pointer"
                                        }}
                                        onClick={handleReset}
                                    >
                                        <MdClose size={20} color='#494949' />
                                    </div>
                                </div>

                                {/* email form and to  */}
                                <div style={{padding: "0 0 30px 24px"}}>
                                    <div style={{display: "flex", alignItems: "center", gap: "15px"}}>
                                        <label htmlFor="">To:</label>
                                        <Input
                                            label="Form"
                                            placeholder="Search..."
                                            onChange={(e)=>setTo(e.target.value)}
                                            style={{
                                                width: "400px",
                                                height: "42px",
                                                fontSize: "14px",
                                            }}
                                            value={to}
                                            size="middle"
                                        />
                                    </div>
                                </div>

                                {/* divider */}
                                <div style={{width: "100%", height: "1px", background: "#E0E0E0", margin: "0 0 30px 0"}}/>

                                {/* message section */}
                                <div style={{boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",  borderRadius: "8px", margin: "24px", padding: "24px"}}>
                                    <Input.TextArea
                                        placeholder="Write Message..."
                                        onChange={(e)=>setMessage(e.target.value)}
                                        value={message}
                                        style={{
                                            width: "100%",
                                            height: "365px",
                                            fontSize: "14px",
                                            resize: 'none',
                                        }}
                                    />
                                </div>

                                {/* send button and media import button section */}
                                <div
                                    style={{
                                        width: "100%",
                                        display: "flex",
                                        alignItems: "flex-end",
                                        justifyContent: "flex-end",
                                        paddingRight: "24px"
                                    }}
                                >
                                    <button
                                            onClick={handleSubmit}
                                            style={{
                                                width: "120px",
                                                height:"38px",
                                                borderRadius: "8px",
                                                background: "#2FD5C7",
                                                color: "white",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                gap: "17px",
                                                border: "none",
                                                outline: "none",
                                                cursor: "pointer"
                                            }}
                                        >
                                        Send <LuSend color='white' /> 
                                    </button>
                                </div>
                            </div>
                        </div> 
                    }

                </div>
            </div>
        </div>
    )
}

export default Emails; 
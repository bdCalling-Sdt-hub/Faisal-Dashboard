import { Button, Drawer, Input, Space, Table, Typography, Dropdown } from "antd";
import React, { useEffect, useState } from "react";
import { AiOutlinePrinter } from "react-icons/ai";
import { LiaSaveSolid } from "react-icons/lia";
import DrawerPage from "../../../Components/DrawerPage/DrawerPage";
const { Title, Text } = Typography;
import { MdOutlineFilterList } from "react-icons/md";
import { FiEye, FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { DownOutlined } from "@ant-design/icons";

const data = [
  {
    key: "1",
    name: "Tushar",
    email: "tushar@gmail.com",
    date: "18 Jul, 2023  4:30pm",
    location: "Banasree",
    status: "Complete",
    selling: "500",
    balance: "600",
  },
  {
    key: "2",
    name: "Rahman",
    email: "rahman@gmail.com",
    date: "18 Jul, 2023  4:30pm",
    location: "Banasree",
    status: "Complete",
    selling: "500",
    balance: "600",
  },
  {
    key: "3",
    name: "Rafsan",
    email: "rafsan@gmail.com",
    date: "18 Jul, 2023  4:30pm",
    location: "Banasree",
    status: "Complete",
    selling: "500",
    balance: "600",
  },
  {
    key: "4",
    name: "jusef",
    email: "jusef@gmail.com",
    date: "18 Jul, 2023  4:30pm",
    location: "Banasree",
    status: "Complete",
    selling: "500",
    balance: "600",
  },
  {
    key: "5",
    name: "Asad",
    email: "asad@gmail.com",
    date: "18 Jul, 2023  4:30pm",
    location: "Banasree",
    status: "incomplete",
    selling: "500",
    balance: "600",
  },
  {
    key: "6",
    name: "Fahim",
    email: "fahim@gmail.com",
    date: "18 Jul, 2023  4:30pm",
    location: "Banasree",
    status: "Complete",
    selling: "500",
    balance: "600",
  },
  {
    key: "7",
    name: "Nadir",
    email: "nadir@gmail.com",
    date: "18 Jul, 2023  4:30pm",
    location: "Banasree",
    status: "Complete",
    selling: "500",
    balance: "600",
  }
];

const InvoiceTable = () =>{
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")
    const [rentData, setRentData] = useState([]); // Data fetched from the server
    const [totalItems, setTotalItems] = useState(0); // Total number of items
    const [page, setPage] = useState(1); // Current page number
    const pageSize = 5;


    const [isDrawerVisible, setIsDrawerVisible] = useState(false);
    const [invoiceData, setInvoiceData] = useState(null);
    console.log(invoiceData)
  
    const showDrawer = (record) => {
      setIsDrawerVisible(true);
      setInvoiceData(record);
    };
  
    const closeDrawer = () => {
      setIsDrawerVisible(false);
      setInvoiceData(null);
    };


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
          <Button onClick={() => showDrawer(record)} type="text" style={{paddingBottom:"35px"}}>
            <FiEye style={{ fontSize: "30px", color: "#999999" }} />
          </Button>
        ),
      },
    ];

    const handlePageChange=(page)=>{
      setPage(page);
      window.history.pushState(null, "", `?page=${page}`);
    }

    const onClick = ({ key }) => {
      setCategory(key)
    };

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

    return(
      <div style={{height: "fit-content", borderRadius: "8px", background: "white", padding: "20px 24px 0 24px"}}>
        <div style={{display: "flex", alignItems: "center", marginBottom: "20px", justifyContent: "space-between"}}>
          <h1 style={{fontSize: "20px", fontWeight: 600, color: "#2F2F2F"}}>Top Seller List</h1>
          <p style={{color: "#2FD5C7", fontSize:"12px", textDecoration: "underline"}}>VIEW ALL</p>
        </div>

        <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px"}}> 
            <div style={{display: "flex", alignItems: "center", gap: "8px"}}>
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
                  <p style={{ 
                    cursor: "pointer", 
                    color:'#717171', 
                    borderRadius: "4px",
                  }} onClick={(e) => e.preventDefault()}
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

            <div style={{display: "flex", alignItems: "center", gap: "8px"}}>
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

        <Table columns={columns} dataSource={data} pagination={{
          pageSize: 3,
          onChange: handlePageChange
        }}/>

        {/* 
          <Drawer
          
          title={
            <div>
              <Typography>
                <Title level={5} strong>
                  Invoice# {invoiceData?.invoiceNo}
                </Title>
                <Text>See all information about the Earning</Text>
              </Typography>
            </div>
          }
          placement="right"
          onClose={closeDrawer}
          open={isDrawerVisible}
          width={500}
          closable={false}
          extra={
            <Space>
              <Button style={{borderRadius:"100%",backgroundColor:"white",color:"red",height:"50px",width:"50px",textAlign:"center"}} onClick={closeDrawer}><CloseOutlined /></Button>
             
            </Space>
          }

        > */}
          {/* {invoiceData && <DrawerPage invoiceData={invoiceData} />} */}
        {/* </Drawer>    */}

        </div>
    )

};
export default InvoiceTable;

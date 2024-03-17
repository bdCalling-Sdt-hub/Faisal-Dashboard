import { Button, Drawer, Space, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { AiOutlinePrinter } from "react-icons/ai";
import { LiaSaveSolid } from "react-icons/lia";
import DrawerPage from "../../../Components/DrawerPage/DrawerPage";
const { Title, Text } = Typography;
import { CloseOutlined } from '@ant-design/icons';
import { FiEye } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";


const data = [
  {
    key: "1",
    name: "tushar",
    email: "tushar@gmail.com",
    contact: "017549624463",
    joiningdate: "18 Jul, 2023  4:30pm",
    trips: "$850.00",
    
    printView: "Button",
  },
  {
    key: "2",
    name: "Faim",
    email: "tushar@gmail.com",
    contact: "017549624463",
    joiningdate: "18 Jul, 2023  4:30pm",
    trips: "$850.00",
    
    printView: "Button",
  },
  {
    key: "3",
    name: "Shanto",
    email: "tushar@gmail.com",
    contact: "017549624463",
    joiningdate: "18 Jul, 2023  4:30pm",
    trips: "$850.00",
    
    printView: "Button",
  },
  {
    key: "4",
    name: "Rafsan",
    email: "tushar@gmail.com",
    contact: "017549624463",
    joiningdate: "18 Jul, 2023  4:30pm",
    trips: "$850.00",
    
    printView: "Button",
  },
  {
    key: "5",
    name: "Nadim",
    email: "tushar@gmail.com",
    contact: "017549624463",
    joiningdate: "18 Jul, 2023  4:30pm",
    trips: "$850.00",
    
    printView: "Button",
  },
  {
    key: "6",
    name: "Jusef",
    email: "tushar@gmail.com",
    contact: "017549624463",
    joiningdate: "18 Jul, 2023  4:30pm",
    trips: "$850.00",
    
    printView: "Button",
  },
  {
    key: "7",
    name: "Rahman",
    email: "tushar@gmail.com",
    contact: "017549624463",
    joiningdate: "18 Jul, 2023  4:30pm",
    trips: "$850.00",
    
    printView: "Button",
  },
  {
    key: "8",
    name: "Asad",
    email: "tushar@gmail.com",
    contact: "017549624463",
    joiningdate: "18 Jul, 2023  4:30pm",
    trips: "$850.00",
    
    printView: "Button",
  },
  {
    key: "9",
    name: "Khusi",
    email: "tushar@gmail.com",
    contact: "017549624463",
    joiningdate: "18 Jul, 2023  4:30pm",
    trips: "$850.00",
    
    printView: "Button",
  },
  {
    key: "10",
    name: "Nadir",
    email: "tushar@gmail.com",
    contact: "017549624463",
    joiningdate: "18 Jul, 2023  4:30pm",
    trips: "$850.00",
    
    printView: "Button",
  }
 
];

const UserInfoTable = () =>{
    const [rentData, setRentData] = useState([]); // Data fetched from the server
    const [totalItems, setTotalItems] = useState(0); // Total number of items
    const [currentPage, setCurrentPage] = useState(1); // Current page number
    const pageSize = 5;


    const [isDrawerVisible, setIsDrawerVisible] = useState(false);
    const [userInfoData, setUserInfoData] = useState(null);
  
    const showDrawer = (record) => {
      setIsDrawerVisible(true);
      console.log(record)
      setUserInfoData(record);
    };
  
    const closeDrawer = () => {
      setIsDrawerVisible(false);
      setInvoiceData(null);
    };


    const columns = [
      {
        title: "ARTIST NAME",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "EMAIL",
        dataIndex: "email",
        key: "email",
        responsive: ["md"],
      },
      {
        title: "CONTACT",
        dataIndex: "contact",
        key: "contact",
        responsive: ["lg"],
      },
      {
        title: "DATE",
        dataIndex: "joiningdate",
        key: "joiningdate",
      },
      {
        title: "GIGS PRICE",
        dataIndex: "trips",
        key: "trips",
        responsive: ["md"],
      },
      
      {
        title: "ACTIONS",
        dataIndex: "actions",
        key: "actions",
        responsive: ["lg"],
        render: (_,record) => (
          <Button onClick={() => showDrawer(record)} type="text" style={{paddingBottom:"35px"}}>
            <FiEye style={{ fontSize: "30px", color: "#999999" }} />
          </Button>
        ),
      },
    ];



    useEffect(() => {
        // Fetch data from the server when the current page changes
        fetchData();
      }, [currentPage]);
    
      const fetchData = async () => {
        // Replace this with your actual API request to fetch data based on pagination
        try {
          const response = await fetch(`/api/data?page=${currentPage}&pageSize=${pageSize}`);
          const result = await response.json();
    
          setData(result.data);
          setTotalItems(result.totalItems);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

    const handlePageChange=(page)=>{
        setCurrentPage(page);
        console.log(currentPage)
    }

    return(
      <>
        <Table columns={columns} dataSource={data} pagination={{
            pageSize,
            showSizeChanger:false,
            total: 10,
            current: currentPage,
            onChange: handlePageChange,
          }}/>
          <Drawer
          
          title={
            <div>
              <Typography>
                <Title level={5} strong>
                  Artist Information
                </Title>
                <Text>See all information about the user</Text>
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

        >
            <div style={{ display: "flex", gap: "15px" }}>
              <div style={{display: "block", margin: "auto"}}>
                <img width={120} style={{borderRadius: "12px"}} src="https://i.imgur.com/JFHjdNr.jpg" alt="" />
              </div>
            </div>

            <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "15px"}}>
            <div>
                <p style={{paddingBottom: "5px"}}>Artish Name:</p>
                <p style={{paddingBottom: "5px"}}>Email</p>
                <p style={{paddingBottom: "5px"}}>Contact</p>
                <p style={{paddingBottom: "5px"}}>Date</p>
                <p style={{paddingBottom: "5px"}}>GIGS Price</p>
            </div>
            <div>
              <p style={{paddingBottom: "5px", textAlign: "right"}}>{userInfoData?.name}</p>
              <p style={{paddingBottom: "5px", textAlign: "right"}}>{userInfoData?.email}</p>
              <p style={{paddingBottom: "5px", textAlign: "right"}}>{userInfoData?.contact}</p>
              <p style={{paddingBottom: "5px", textAlign: "right"}}>{userInfoData?.joiningdate}</p>
              <p style={{paddingBottom: "5px", textAlign: "right"}}>{userInfoData?.trips}</p>
            </div>

          </div>
          {userInfoData && <DrawerPage userInfoData={userInfoData} />}
        </Drawer>

        </>
    )

};
export default UserInfoTable;

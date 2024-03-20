import { Col, Row } from "antd";
import React from "react";
import "./DashboardHome.css";
import TotalSellerListTable from "../../../Components/Dashboard/TotalSellerListTable";
import TotalSellerChart from "./TotalSellerChart";
import DailyOverviewChart from "./DailyOverviewChart";
import { HiUserGroup } from "react-icons/hi";
import { FaUserPlus } from "react-icons/fa6";
import { LuBox } from "react-icons/lu";
import { TbDatabaseDollar } from "react-icons/tb";
import UserCard from "./UserCard";
import { Link } from "react-router-dom";

function DashboardHome() {
  const onChange = (pageNumber) => {
    console.log("Page: ", pageNumber);
  };

  const data = [
    {
      name: "New Seller",
      count: "220",
      icon: <HiUserGroup color="#00B2DC" size={32} />,
      bgColor: "#E2F7FC"
    },
    {
      name: "Active Seller",
      count: "320",
      icon: <FaUserPlus color="#F98002" size={32}/>,
      bgColor: "#FFE3C7"
    },
    {
      name: "Total Seller",
      count: "120",
      icon: <LuBox  color="#FEC53D" size={32}/>,
      bgColor: "#FFF3D6"
    },
    {
      name: "Total Profit",
      count: "1000",
      icon: <TbDatabaseDollar color="#5664FD" size={32} />,
      bgColor: "#DDE0FF"
    },
  ]

  return (
    <div>
      <Row gutter={26}>
        {
          data.map((item, index)=>
            <Col key={index}  xs={{span:24}} sm={{span:24}} md={{span:12}} lg={{span:6}}>
              <div  className='income-card'>
                  <div 
                    style={{
                      background: `${item.bgColor}`,
                      width: "64px",
                      height: "64px",
                      borderRadius: "100%",
                      display:"flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    {item?.icon}
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize:"32px",
                        fontWeight:"600", 
                        color: "#50525D" ,
                      }}
                    >{item.count} +</p>
                    <p 
                      style={{
                        fontSize:"16px",
                        fontWeight:"400", 
                        color: "#6A6D7C" ,
                      }}
                    >
                      {item.name}
                    </p>
                  </div>
              </div>
            </Col>
          )
        }
      </Row>
      <div style={{ marginTop: "20px", marginBottom: "15px", display: "grid" ,gridTemplateColumns: "auto auto auto", gap: "20px" }} >
            <div  style={{ width: '500px', height: "276px", borderRadius:"15px", padding:"20px",backgroundColor:"#fff"}}>
              <DailyOverviewChart />
            </div>
          
            <div
              style={{
                borderRadius: "15px",
                backgroundColor: "#fff",
                width: '500px',
                height: "276px",
                padding:"10px 20px 20px 20px"
              }}
            >
              <TotalSellerChart />
            </div>

            <div
              style={{
                borderRadius: "15px",
                backgroundColor: "#fff",
                width: '500px',
                height: "276px",
                padding:"10px 20px 20px 20px"
              }}
            >
              <div style={{display: "flex", alignItems: "center", marginBottom: "20px", justifyContent: "space-between"}}>
                <h1 style={{fontSize: "20px", fontWeight: 600, color: "#2F2F2F"}}>Top Seller</h1>
                <Link to="/top-seller-list">
                  <p style={{color: "#2FD5C7", fontSize:"12px", textDecoration: "underline"}}>VIEW ALL</p>
                </Link>
              </div>
              <UserCard />
            </div>
      </div>
      <TotalSellerListTable />
    </div>
  );
}

export default DashboardHome;

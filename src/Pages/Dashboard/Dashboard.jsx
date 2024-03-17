/* eslint-disable no-unused-vars */
import { SettingOutlined } from "@ant-design/icons";
import { Button, Input, Layout, Menu, Badge, Switch } from "antd";
import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import Logo from "../../Images/LOGO-1.png";
import Styles from "./Dashboard.module.css";
import { FaRegBell } from "react-icons/fa6";
import { AiOutlineUser } from "react-icons/ai";
import { HiLogout, HiOutlineMail } from "react-icons/hi";
import { BiCrown } from "react-icons/bi";
import { LuUser } from "react-icons/lu";
import { TbUserPlus } from "react-icons/tb";
import { MdDashboard } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { RiNotification2Line, RiChat1Line } from "react-icons/ri";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
const { Header, Sider, Content } = Layout;


const items = [...Array(5).keys()].map((item, index) => {
  return {
    key: index,
    label: (
      <Link to="/notification" style={{}} rel="noreferrer">
        <div
          className={Styles.everyNotify}
          style={{ display: "flex", alignItems: "center" }}
        >
          <img
            style={{
              backgroundColor: "#d9cffb",
              borderRadius: "100%",
              padding: "5px",
              marginRight: "15px",
            }}
            width="30"
            height="30"
            src="https://img.icons8.com/3d-fluency/94/person-male--v2.png"
            alt="person-male--v2"
          />
          <div className="" style={{ marginTop: "" }}>
            <p>
              <span>Sanchej haro manual </span>started a new trip from mexico.
            </p>
            <span style={{ color: "#d2d2d2" }}>1 hr ago</span>
          </div>
        </div>
      </Link>
    ),
  };
});

const Dashboard = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const menu = (
    <Menu>
      <Menu.Item disabled>
        <h2
          style={{
            color: "black",
            fontWeight: "500",
            borderBottom: "1px solid #e6e7f4",
            paddingBottom: "20px",
          }}
        >
          Notifications
        </h2>
        {/* <span style={{ fontWeight: 'bold', color: '#000' }}>Notifications</span> */}
      </Menu.Item>
      {items.map((item) => (
        <Menu.Item key={item.key}>{item.label}</Menu.Item>
      ))}
      <div
        className=""
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "15px",
        }}
      >
        <Button
          type="primary"
          block
          style={{
            height: "50px",
            backgroundColor: "#ffb7d5 ",
            color: "white",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          <Link to="/notification">See All</Link>
        </Button>
      </div>
    </Menu>
  );
  const handleLogOut=()=>{
    navigate('/');
    window.location.reload();
  }

  const profileItems = [
    {
      key: 1,
      label: (
        <Link to="/setting/personal-information" rel="noreferrer" >
          <div
            className={Styles.everyNotify}
            style={{ display: "flex", alignItems: "center", gap: "15px"}}
          >
            <AiOutlineUser size={25} color="black" />
            <div className="" style={{ marginTop: "0" }}>
              <p>Profile</p>
            </div>
          </div>
        </Link>
      ),
    },
    {
      key: 2,
      label: (
        <Link to="/notification" style={{}} rel="noreferrer">
          <div
            className={Styles.everyNotify}
            style={{ display: "flex", alignItems: "center" ,gap: "15px" }}
          >
            <FaRegBell size={25} color="black" />
            <div className="" style={{ marginTop: "" }}>
              <p>Notification</p>
            </div>
          </div>
        </Link>
      ),
    },
    {
      key: 3,
      label: (
        <div
          style={{ border: "none", backgroundColor: "transparent" }}
          rel="noreferrer"
        >
          <div
            onClick={handleLogOut}
            className={Styles.everyNotify}
            style={{ display: "flex", alignItems: "center", gap: "15px", color: "black" }}
          >
            <HiLogout size={25} style={{color:"black"}}  />
            <div  className="" style={{ marginTop: "" }}>
              <p>Logout</p>
            </div>
          </div>
        </div>
      ),
    },
  ];


  const linkItems = [
    {
      title: "Dashboard",
      path: "/",
      icon: <MdDashboard size={24} />,
    },
    {
      title: "All Seller",
      path: "/users",
      icon: <LuUser size={24} />,
    },
    {
      title: "Make Admin",
      path: "/make-admin",
      icon: <TbUserPlus size={24} />,
    },
    {
      title: "Email",
      path: "/email",
      icon: <HiOutlineMail size={24} />,
    },
    {
      title: "Pricing",
      path: "/pricing",
      icon: <BiCrown size={24} />,
    },
    {
      title: "Settings",
      path: "/setting",
      icon: <SettingOutlined size={24} />,
    },
  ];

  return (
    <Layout style={{ height: "100vh", width: "100vw" }}>

      
      <Sider
        width="233px"
        trigger={null}
        style={{
          overflow: "auto",
          position: "fixed",
          height: "100vh",
          overflowY: "hidden",
          zIndex: 2,
          backgroundColor: "white",
        }}
      >
        <div
          className="logo"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "30px",
            marginBottom: "30px",
          }}
        >
          <Link to="/">
            <img
              src={Logo}
              height="150px"
              width="150px"
            />
          </Link>
        </div>


        <ul 
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            height: "100%",
            marginTop: 0
          }} 
        >
          {linkItems.map((item, index) => (
            <li
                key={index}
                style={{
                  width: "100%",
                  marginTop: 0,
                  height: "38px",
                  position: "relative",
                  paddingLeft: "44px"
                }}
              >
                {
                  item.path === pathname
                  ?
                  <div style={{backgroundColor: "#2FD5C7", position: "absolute", left:0, top: 0, width: "8px", height: "38px", borderRadius: "0 10px 10px 0"}}></div>
                  :
                  null

                }
                <Link 
                  to={item.path} 
                  style={{
                    display: "flex",
                    color: item.path === pathname ? "#2FD5C7" : "#6A6D7C", 
                    alignItems: "center", 
                    gap: "14px",
                    marginTop: "3px",
                  }}
                >
                  <div>{item.icon}</div>
                  <div style={{fontSize: "14px", textAlign: "center"}}>{item.title}</div>
                </Link>
            </li>
            
          ))}
        </ul>

      </Sider>


      <Layout>
        <Header
          style={{
            position: "fixed",
            width: "100vw",
            height: "80px",
            zIndex: 1,
            padding: 0,
            background: "#EAFBF9",
            display: "flex",
            justifyContent: "space-between",
            paddingRight: "60px",
            paddingLeft: "270px"
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
              placeholder="Search..."
              prefix={<FiSearch size={14} color="#868FA0"/>}
              suffix={<IoClose size={14} color="#2B2A2A" />}
              style={{
                width: "100%",
                height: "100%",
                fontSize: "14px"
              }}
              size="middle"
            />
          </div>

          <div
            style={{
              width: "320px",
              display: "flex", 
              alignItems: "center",
              // gap: "16px",
              justifyContent: "space-between"
            }}
          >
            <Badge color="#23A095" count={5}>
              <RiChat1Line color="#6A6A6A" size={24} />
            </Badge>

            <Badge color="#C30303" count={5}>
              <RiNotification2Line color="#6A6A6A" size={24} />
            </Badge>

            <Switch trackHeight={30}  />
            <div
              style={{
                width: "170px",
                height:"42px",
                background: "#FFFFFF",
                borderRadius: "5px",
                display: "flex", 
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px"
              }}
            >
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLotvhr2isTRMEzzT30Cj0ly77jFThGXr0ng&usqp=CAU" style={{width: "40px", height: "40px", borderRadius: "100%"}} alt="" />
              <h2 style={{color: "black", fontSize: "10px"}}>DR. Jim ahhmed</h2>
              <MdOutlineKeyboardArrowDown size={18} color="#D9D9D9" />
            </div>
          </div>
        </Header>

        <Content
          style={{
            marginTop: "60px",
            marginBottom: "20px",
            marginLeft: "255px",
            marginRight: "40px",
            background: "#EAFBF9",
            overflow: "auto",
            padding: "20px"
          }}
        >
          <Outlet />
        </Content>
      </Layout>


    </Layout>
  );
};
export default Dashboard;

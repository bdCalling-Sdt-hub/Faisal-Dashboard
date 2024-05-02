import { Input, Layout,  Badge, } from "antd";
import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import Logo from "../../assets/logo.jpg";
import LogoText from "../../assets/logo-text.jpg";
import { HiLogout, HiOutlineMail } from "react-icons/hi";
import { LuUser } from "react-icons/lu";
import { TbUserPlus } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { RiNotification2Line, RiChat1Line, RiCopperDiamondLine } from "react-icons/ri";
const { Header, Sider, Content } = Layout;
import { IoSettingsOutline } from "react-icons/io5";
import { MdDashboard, MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import { CgMenuGridO } from "react-icons/cg";


const Dashboard = () => {
  const [dropdown, setDropdown] = useState(false)
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleLogOut=()=>{
    navigate('/login');
    window.location.reload();
  }

  const linkItems = [
    {
      title: "Dashboard",
      path: "/",
      icon: <MdDashboard size={24} />,
    },
    {
      title: "All Seller",
      path: "/seller-list",
      icon: <LuUser size={24} />,
    },
    {
      title: "Make Admin",
      path: "/make-admin",
      icon: <TbUserPlus size={24} />,
    },
    {
      title: "Category",
      path: "/category",
      icon: <CgMenuGridO size={24} />,
    },
    {
      title: "Email",
      path: "/emails",
      icon: <HiOutlineMail size={24} />,
    },
    {
      title: "Pricing",
      path: "/package",
      icon: <RiCopperDiamondLine size={24} />,
    }
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
            
          }}
        >
          <Link to="/">
            <img
              src={Logo}
              height="50px"
              width="50px"
            />
          </Link>
        </div>

        <div style={{
          marginBottom: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}> 
          <img
            src={LogoText}
            height="50px"
            width="50%"
          />
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
            <Link 
              key={index}
              to={item.path} >
              <li
                  key={index}
                  style={{
                    width: "100%",
                    height: "34px",
                    position: "relative",
                    paddingLeft: "44px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {
                    item.path === pathname
                    ?
                    <div style={{backgroundColor: "#2FD5C7", position: "absolute", left:0, top: 0, width: "8px", height: "35px", borderRadius: "0 10px 10px 0"}}></div>
                    :
                    null

                  }
                  <div 
                    to={item.path} 
                    style={{
                      display: "flex",
                      color: item.path === pathname ? "#2FD5C7" : "#6A6D7C", 
                      alignItems: "center",
                      margin: "auto  0 auto 0",
                      gap: "14px"
                    }}
                  >
                    <div style={{height: "24px",}}>{item.icon}</div>
                    <div style={{fontSize: "14px", textAlign: "center", height: "fit-content"}}>{item.title}</div>
                  </div>
              </li>
            </Link>
            
          ))}

          <li
            onClick={()=>setDropdown(!dropdown)}
            style={{
              width: "100%",
              marginTop: 0,
              height: "38px",
              display: "flex", 
              alignItems: "center", 
              paddingLeft: "47px",
              position: "relative",
              gap: "14px",
              color: "#6A6D7C",
              cursor: "pointer"
            }}
          >
            {
              pathname === "/setting-change-password" || pathname === "/settings-profile"
              ?
              <div style={{backgroundColor: "#2FD5C7", position: "absolute", left:0, top: 0, width: "8px", height: "38px", borderRadius: "0 10px 10px 0"}}></div>
              :
              null

            }
            <IoSettingsOutline size={24} />
            <p  style={{fontSize: "15px", textAlign: "center"}}>Settings</p>
            {
              dropdown
              ?
              <MdKeyboardArrowDown size={24} />
              :
              <MdKeyboardArrowRight size={24} />
            }
            {
              dropdown
              &&
              <div 
                style={{
                  position: "absolute", 
                  left: "80px", 
                  top: "40px", 
                  width: "150px", 
                  height: "50px", 
                  borderRadius: "0 10px 10px 0"
                }}
              >
                  <Link to="/settings-profile" style={{color: pathname === "/settings-profile" ? "#2FD5C7" : '#6A6D7C'}}>
                    <p style={{marginBottom: '8px'}}>Profile</p>
                  </Link>
                  <Link to="/setting-change-password" style={{color: pathname === "/setting-change-password" ? "#2FD5C7" : '#6A6D7C'}}>
                    <p>Change Password</p>
                  </Link>
              </div>
            }

            
          </li>

          <li
            style={{
              width: "100%",
              left: "0",
              position: "absolute",
              bottom: "53px",
            }}
          >

            <div onClick={handleLogOut} style={{display: "flex", width: "fit-content", margin: "0 auto 0 auto", alignItems: "center", gap: "14px", cursor: "pointer", justifyContent: "center"}}>
              <div style={{color:"#6A6D7C", fontSize: "14px"}}>Logout</div>
              <HiLogout color="#6A6D7C" size={24} />
            </div>
          </li>

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
              width: "280px",
              display: "flex", 
              alignItems: "center",
              // gap: "16px",
              justifyContent: "space-between"
            }}
          >
            <Badge color="#23A095" count={5}>
              <Link to="/emails" >
                <RiChat1Line color="#6A6A6A" size={24} />
              </Link>
            </Badge>

            <Badge color="#C30303" count={5}>
              <Link to="/notification" >
                <RiNotification2Line color="#6A6A6A" size={24} />
              </Link>
            </Badge>
            <div
              style={{
                width: "170px",
                height:"42px",
                background: "#FFFFFF",
                borderRadius: "5px",
                display: "flex", 
                alignItems: "center",
                gap: "20px",
                padding: "10px"
              }}
            >
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLotvhr2isTRMEzzT30Cj0ly77jFThGXr0ng&usqp=CAU" style={{width: "30px", height: "30px", borderRadius: "100%"}} alt="" />
              <h2 style={{color: "black", fontSize: "10px"}}>DR. Jim ahhmed</h2>
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

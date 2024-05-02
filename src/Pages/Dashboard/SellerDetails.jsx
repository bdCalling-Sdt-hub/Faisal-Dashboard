import React, { useState } from 'react'
import BackButton from './BackButton';
import { AiOutlineStock } from "react-icons/ai";
import { Dropdown } from 'antd';
import { DownOutlined } from "@ant-design/icons";
import { IoBagCheck } from "react-icons/io5";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdAccountBalanceWallet } from "react-icons/md";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Brush,
    AreaChart,
    Area,
    ResponsiveContainer,
} from 'recharts';
import SellingProductList from '../../Components/SellerDetails/SellingProductList';
import BannerProducts from '../../Components/SellerDetails/BannerProducts';

const data = [
    {
      name: '1',
      uv: 400,
      pv: 2400,
      amt: 2400,
    },
    {
      name: '2',
      uv: 300,
      pv: 1398,
      amt: 2210,
    },
    {
      name: '3',
      uv: 200,
      pv: 9800,
      amt: 2290,
    },
    {
      name: '4',
      uv: 278,
      pv: 3908,
      amt: 2000,
    },
    {
      name: '5',
      uv: 189,
      pv: 4800,
      amt: 2181,
    },
    {
      name: '6',
      uv: 239,
      pv: 3800,
      amt: 2500,
    },
    {
      name: '7',
      uv: 349,
      pv: 4300,
      amt: 2100,
    },
];

const SellerDetails = () => {
    const [year, setYear] = useState( new URLSearchParams(window.location.search).get('year') || 2024)
    const onClick = ({ key }) => {
        setYear(key)
        window.history.pushState(null, "", `?year=${year}`);
    };

    const items = [
        {
          label: 2023,
          key: "2023",
        },
        {
          label: 2024,
          key: "2024",
        },
        {
          label: 2025,
          key: "2025",
        },
        {
          label: 2026,
          key: "2026",
        },
    ];

    const newData= [
        {
            name: "Total Products Sales",
            icon: <IoBagCheck size={23} color='#2FD5C7' />,
            balance: 12500,
            trade: "35%"
        },
        {
            name: "Total Balance",
            icon: <MdOutlineAccountBalanceWallet size={23} color='#2FD5C7' />,
            balance: 12500,
            trade: "35%"
        },
        {
            name: "Delivered Products",
            icon: <MdAccountBalanceWallet size={23} color='#2FD5C7' />,
            balance: 12500,
            trade: "35%"
        },
        {
            name: "Ponding Order ",
            icon: <CiDeliveryTruck size={23} color='#2FD5C7' />,
            balance: 12500,
            trade: "35%"
        },
    ]
    return (
        <div>
            <div style={{marginBottom: "15px"}}>
                <BackButton link='/seller-list' />
            </div>
            
            <div style={{marginBottom: "10px", display: "flex", alignItems: "center", gap: "20px"}}>

                {/* seller details section */}
                <div style={{
                    width: "30%",
                    height: "334px",
                    backgroundColor: "white",
                    padding: "18px",
                    borderRadius: "8px"
                }}>
                    <div
                        style={{
                            width: "131px",
                            margin: "0 auto 11px auto"
                        }}
                    >
                        <div style={{width: "100%", display: "flex", alignItems: "center", marginBottom: 12, justifyContent: "center"}}>
                            <img 
                                src="https://cdn.retouchme.com/blogs/55-1657818846-lg.webp" 
                                style={{width: 150,  textAlign:"center", height: 150, borderRadius: "100%", margin: "0 auto 0 auto"}} 
                                alt="profile"
                            />
                        </div>
                        <p style={{fontSize: "16px", textAlign:"center", fontWeight: 600, color: "#494949"}}>Hasan Mahmud</p>
                        <div 
                            style={{
                                color: "#6A6D7C",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "8px",
                                marginBottom: "4px"
                            }}
                        >
                            <HiOutlineLocationMarker  size={24} />
                            <p>Location</p>
                        </div>
                        <p style={{fontSize: "12px",  textAlign:"center", fontWeight: 400, color: "#6A6D7C"}}>info@gmail.com</p>
                    </div>
                </div>
                
                {/* overall sales section  */}
                <div style={{
                    width: "70%",
                    height: "334px",
                    backgroundColor: "white",
                    padding: "12px",
                    borderRadius: "8px"
                }}>
                    <h1 style={{fontSize: "20px", fontWeight: 600, color: "#2F2F2F", marginBottom: 10}}>Banner Products</h1>
                    <BannerProducts/>
                </div>
            </div>

            <SellingProductList/>
        </div>
    )
}

export default SellerDetails
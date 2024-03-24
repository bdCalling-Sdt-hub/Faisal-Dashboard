import React, { useEffect, useState } from 'react';
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';



const data = [
  {
    name: 'Jan',
    uv: 20,
    mt: 10,
  },
  {
    name: 'Feb',
    uv: 30,
    mt: 20,
  },
  {
    name: 'Mar',
    uv: 90,
    mt: 30,
  },
  {
    name: 'Apr',
    uv: 100,
    mt: 40,
  },
  {
    name: 'May',
    uv: 30,
    mt: 50,
  },
  {
    name: 'Jun',
    uv: 10,
    mt: 60,
  },
  {
    name: 'Aug',
    uv: 15,
    mt: 70,
  },
  {
    name: 'Sep',
    uv: 20,
    mt: 80,
  },
  {
    name: 'Nov',
    uv: 30,
    mt: 90,
  },
  {
    name: 'Dec',
    uv: 10,
    mt: 100,
  },
];


export default function DailyRentChart() {
  const [year, setYear] = useState(2024)

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
  const onClick = ({ key }) => {
    setYear(key)
  };

  /* useEffect(() => {
    if(year !== 2024){
      window.history.pushState(null, "", `?year=${year}`);
    }
  }, [year]);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const yearParam = searchParams.get('year');
    if (yearParam) {
      const parsedYear = parseInt(yearParam, 10);
      setYear(parsedYear);
    } else {
      window.location.reload();
    }
  }, []); */


    return (
      <div>
        <div style={{display : "flex", alignItems: "center", justifyContent : "space-between"}}>
          <p style={{marginTop:"10px", fontSize: "20px", fontWeight: 600, marginBottom:"10px", color: "black",}}>Selling Overview</p>
          <Dropdown menu={{ items, onClick }} >
            <p style={{
              // width: "79px", 
              cursor: "pointer", 
              color:'#717171', 
              border: "1px solid #E9E9E9",
              borderRadius: "4px",
              padding: "4px 12px"
            }} onClick={(e) => e.preventDefault()}
            >
              {year}
              <DownOutlined style={{paddingLeft: "18px"}} color='#717171' />
            </p>
          </Dropdown>
        </div>

        <div style={{display: "flex", alignItems: "center", gap: "31px", marginBottom: "19px"}}>
          <div>
            <p style={{fontSize: "12px", fontWeight: 400, color: "#808080"}}>Overly Growth</p>
            <h1 style={{fontSize: "14px", fontWeight: 700, color: "#2F2F2F"}}>38.38%</h1>
          </div>
          <div>
            <p style={{fontSize: "12px", fontWeight: 400, color: "#808080"}}>Monthly</p>
            <h1 style={{fontSize: "14px", fontWeight: 700, color: "#2F2F2F"}}>15.5%</h1>
          </div>
          <div>
            <p style={{fontSize: "12px", fontWeight: 400, color: "#808080"}}>Daily</p>
            <h1 style={{fontSize: "14px", fontWeight: 700, color: "#2F2F2F"}}>58.50%</h1>
          </div>
        </div>

        <div>
          <AreaChart
            width={495}
            height={132}
            style={{marginLeft:"-35px"}}
            data={data}
          >
            <XAxis dataKey="name" />
            <YAxis dataKey="mt" />
            <Tooltip/>
            <Area type="monotone" dataKey="uv" stroke="#2FD5C7" fill="#2FD5C7" />
          </AreaChart>
        </div>
      </div>
    )
  
}
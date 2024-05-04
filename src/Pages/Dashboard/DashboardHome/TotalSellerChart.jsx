import React, { useState, useEffect } from 'react';
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const TotalSellerChart = () => {

  const data = [
    {
      name: 'Jan',
      uv: 4000,
      pv: 2400,
      tv :1200,
      amt: 10,
    },
    {
      name: 'Feb',
      uv: 3000,
      pv: 1398,
      tv :1200,
      amt: 20,
    },
    {
      name: 'Mar',
      uv: 2000,
      pv: 9800,
      tv :1200,
      amt: 30,
    },
    {
      name: 'Apr',
      uv: 2780,
      pv: 3908,
      tv :1200,
      amt: 40,
    },
    {
      name: 'May',
      uv: 1890,
      pv: 4800,
      tv :1200,
      amt: 50,
    },
    {
      name: 'Jun',
      uv: 2390,
      pv: 3800,
      tv :1200,
      amt: 60,
    },
    {
      name: 'Jul',
      uv: 3490,
      pv: 4300,
      tv :1200,
      amt: 70,
    },
    {
      name: 'Aug',
      uv: 3490,
      pv: 4300,
      tv :1200,
      amt: 80,
    },
    {
      name: 'Sep',
      uv: 3490,
      pv: 4300,
      tv :1200,
      amt: 90,
    },
    {
      name: 'Oct',
      uv: 3490,
      pv: 4300,
      tv :1200,
      amt: 100,
    },
    {
      name: 'Nov',
      uv: 3490,
      pv: 4300,
      tv :1200,
      amt: 110,
    },
    {
      name: 'Dec',
      uv: 3490,
      pv: 4300,
      tv :1200,
      amt: 120,
    },
  ];

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

  return(
  <div> 
    <div style={{display : "flex", alignItems: "center", justifyContent : "space-between"}}>
          <p style={{marginTop:"10px", fontSize: "20px", fontWeight: 600, marginBottom:"10px", color: "black",}}>Total Seller</p>
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

    

    <div
    >
      <BarChart
        width={1050}
        height={215}
        data={data}
        style={{marginLeft:"-35px"}}
        padding={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis dataKey="amt" />
        <Tooltip/>
        <Bar  barSize={10} dataKey="pv" stackId="a" fill="#8884d8" />
        <Bar  barSize={10} dataKey="uv" stackId="a" fill="#82ca9d" />
        <Bar  barSize={10} dataKey="tv" stackId="a" fill="##2FD5C7" />
      </BarChart>
    </div>
  </div>)
};


export default TotalSellerChart;
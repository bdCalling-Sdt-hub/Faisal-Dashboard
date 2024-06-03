import React, { useEffect, useState } from 'react';
import { Select } from "antd";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useDispatch, useSelector } from 'react-redux';
import { getSellerChart } from "../../../redux/apiSlice/Home/gerSellerChartSlice";
const { Option } = Select;

const TotalSellerChart = () => {
  const [year, setYear] = useState(2024)

  const dispatch = useDispatch();
  const {sellers} = useSelector(state=> state.getSellerChart);

  useEffect(()=>{
    dispatch(getSellerChart(year))
  }, [dispatch, year])

  return(
  <div> 
    <div style={{display : "flex", alignItems: "center", justifyContent : "space-between"}}>
          <p style={{marginTop:"10px", fontSize: "20px", fontWeight: 600, marginBottom:"10px", color: "black",}}>Total Seller</p>

          <div>
            <Select
              style={{
                background: "transparent",
                width: 100,
                height: 30,
                outline: "none",
                borderRadius: "5px",
                color: "#555656",
              }}
              defaultValue={"2024"}
              onChange={(e)=>setYear(e)}
            >
              <Option value="2024">2024</Option>
              <Option value="2025">2025</Option>
              <Option value="2026">2026</Option>
              <Option value="2027">2027</Option>
              <Option value="2028">2028</Option>
              <Option value="2029">2029</Option>
              <Option value="2030">2030</Option>
              <Option value="2031">2031</Option>
            </Select>
          </div>
    </div>

    

    <div
    >
      <BarChart
        width={1050}
        height={215}
        data={sellers}
        style={{marginLeft:"-35px"}}
      >
        <XAxis dataKey="name" />
        <YAxis dataKey="value" />
        <Tooltip/>
        <Bar  barSize={10} dataKey="pv" stackId="a" fill="#8884d8" />
        <Bar  barSize={10} dataKey="uv" stackId="a" fill="#82ca9d" />
        <Bar  barSize={10} dataKey="tv" stackId="a" fill="##2FD5C7" />
      </BarChart>
    </div>
  </div>)
};


export default TotalSellerChart;
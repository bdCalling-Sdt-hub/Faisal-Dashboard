import { Button, Drawer, Table, Typography } from "antd";
import React, { useState } from "react";
import { AiOutlinePrinter } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { LiaSaveSolid } from "react-icons/lia";
import DrawerPage from "../../../Components/DrawerPage/DrawerPage";
const { Title, Text } = Typography;
import { FiEye } from "react-icons/fi";

const data = [
  {
    tripNo: "1373700510",

    time: "18 Jul, 2023  4:30pm",
    username: "Fahim",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "2",
    tripNo: "1373700510",
    time: "18 Jul, 2023  4:30pm",
    username: "Fahim",
    method: "Credit Card",
    amount: "$850.00",
    status: "padding",
    printView: "Button",
  },
  {
    key: "3",
    tripNo: "1373700510",
    time: "18 Jul, 2023  4:30pm",
    username: "Fahim",
    method: "Credit Card",
    amount: "$850.00",
    status: "padding",
    printView: "Button",
  },
  {
    key: "1",
    tripNo: "1373700510",
    time: "18 Jul, 2023  4:30pm",
    username: "Fahim",
    method: "Credit Card",
    amount: "$850.00",
    status: "padding",
    printView: "Button",
  },
  {
    key: "1",
    tripNo: "1373700510",
    time: "18 Jul, 2023  4:30pm",
    username: "Fahim",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "1",
    tripNo: "1373700510",
    time: "18 Jul, 2023  4:30pm",
    username: "Fahim",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "1",
    tripNo: "1373700510",
    time: "18 Jul, 2023  4:30pm",
    username: "Fahim",
    method: "Credit Card",
    amount: "$850.00",
    status: "padding",
    printView: "Button",
  },
  {
    key: "1",
    tripNo: "1373700510",
    time: "18 Jul, 2023  4:30pm",
    username: "Fahim",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "1",
    tripNo: "1373700510",
    time: "18 Jul, 2023  4:30pm",
    username: "Fahim",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "1",
    tripNo: "1373700510",
    time: "18 Jul, 2023  4:30pm",
    username: "Fahim",
    method: "Credit Card",
    amount: "$850.00",
    status: "padding",
    printView: "Button",
  },
  {
    key: "1",
    tripNo: "1373700510",
    time: "18 Jul, 2023  4:30pm",
    username: "Fahim",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "1",
    tripNo: "1373700510",
    time: "18 Jul, 2023  4:30pm",
    username: "Fahim",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "1",
    tripNo: "1373700510",
    time: "18 Jul, 2023  4:30pm",
    username: "Fahim",
    method: "Credit Card",
    amount: "$850.00",
    status: "padding",
    printView: "Button",
  },
  {
    key: "1",
    tripNo: "1373700510",
    time: "18 Jul, 2023  4:30pm",
    username: "Fahim",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "1",
    tripNo: "1373700510",
    time: "18 Jul, 2023  4:30pm",
    username: "Fahim",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "1",
    tripNo: "1373700510",
    time: "18 Jul, 2023  4:30pm",
    username: "Fahim",
    method: "Credit Card",
    amount: "$850.00",
    status: "padding",
    printView: "Button",
  },
];

const EarnHistoryTable = () => {
  const columns = [
    {
      title: "Serial No",
      dataIndex: "tripNo",
      key: "tripNO",
    },
    {
      title: "TIME",
      dataIndex: "time",
      key: "time",
      responsive: ["md"],
    },
    {
      title: "Artist NAME",
      dataIndex: "username",
      key: "username",
      responsive: ["lg"],
    },
    {
      title: "METHOD",
      dataIndex: "method",
      key: "method",
    },
    {
      title: "AMOUNT",
      dataIndex: "amount",
      key: "amount",
      responsive: ["md"],
    },
    {
      title: "ACTION",
      dataIndex: "printView",
      key: "printView",
      responsive: ["lg"],
      render: (
        _,
        record // Use the second parameter 'record'
      ) => (
          <Button onClick={() => showDrawer(record)} type="text">
            <FiEye style={{ fontSize: "25px", color: "#999999" }} />
          </Button>
      ),
    },
  ];

  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [earningData, setEarningData] = useState(null);

  const showDrawer = (record) => {
    setIsDrawerVisible(true);
    setEarningData(record);
  };

  const closeDrawer = () => {
    setIsDrawerVisible(false);
    setEarningData(null);
  };

  return (
    <div>
      <Table columns={columns} dataSource={data} />
      <Drawer
        title={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography>
              <Title level={5} strong>
                Invoice# {earningData?.tripNo}
              </Title>
              <Text>See all information about the Earning</Text>
            </Typography>
            <Button type="text" onClick={closeDrawer}>
              <IoMdClose fontSize={25} />
            </Button>
          </div>
        }
        closable={false}
        placement="right"
        onClose={closeDrawer}
        open={isDrawerVisible}
        width={500}
      >
        {earningData && <DrawerPage earningData={earningData} />}
      </Drawer>
    </div>
  );
};

export default EarnHistoryTable;

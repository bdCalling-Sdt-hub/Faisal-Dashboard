import { Table } from 'antd';
import React from 'react'


const BannerProducts = ({products}) => {

  const columns = [
    {
      title: "Serial No.",
      dataIndex: "no",
      key: "no",
      render: (_,record) => (
        <p>{record.key}</p>
      ),
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (_,record) => (
        <img src={record?.image} style={{width:"40px", height: "40px"}}  alt="" />
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (_,record) => (
        <p>${record?.price}</p>
      ),
    }
  ];

    return (
        <div>
            <Table 
                columns={columns} 
                dataSource={products?.slice(0, 3)} 
                pagination={false}
            />
        </div>
    )
}

export default BannerProducts
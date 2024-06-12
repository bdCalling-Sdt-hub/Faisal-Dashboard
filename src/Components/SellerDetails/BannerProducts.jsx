import { Empty, Table } from 'antd';
import React from 'react'
import { ImageConfig } from '../../../Config';


const BannerProducts = ({products}) => {
  const hasBannerProduct = products?.some(item => item.bannerProduct === true) || false;
  const columns = [
    {
      title: "Serial No.",
      dataIndex: "no",
      key: "no",
      render: (_,record , index) => (
        <p style={{display: record?.bannerProduct ? "block" : "none"}} >{index + 1}</p>
      ),
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (_,record) => (
        <img src={`${ImageConfig}/${record?.productImage[0]}`} style={{ display: record?.bannerProduct ? "block" : "none", width:"40px", height: "40px"}}  alt="" />
      ),
    },
    {
      title: "Name",
      dataIndex: "productName",
      key: "productName",
      render: (_, record) => (
        <p style={{display: record?.bannerProduct ? "block" : "none"}}> {record?.productName} </p>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (_,record) => (
        <p style={{display: record?.bannerProduct ? "block" : "none"}}>${record?.productPrice}</p>
      ),
    }
  ];

    return (
        <div>
            <div style={{ display: hasBannerProduct ? "block" : "none"}}>
              <Table 
                columns={columns} 
                dataSource={products?.slice(0, 3)} 
                pagination={false}
              />
            </div>

            <div 
              style={{
                display: hasBannerProduct ? "none" : "block",
                width: "100%",
                height: "100%",
              }}
            >
                <div>
                  <Empty/>
                </div>
            </div>
        </div>
    )
}

export default BannerProducts
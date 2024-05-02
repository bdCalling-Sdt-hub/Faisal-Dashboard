import { Table } from 'antd';
import React from 'react'

const data = [
    {
      key: "1",
      image: "https://www.custommacbd.com/cdn/shop/products/iphone-14-pro-Max-deeppurple-Custom-Mac-BD_06a3babc-a8fa-4ab1-8bb1-6fa5b55e0dd9.jpg?v=1662622355",
      name: "Iphone 14 pro max",
      price: "600",
      selling: "500",
      status: "In Stock",
    },
    {
      key: "2",
      image: "https://www.clove.co.uk/cdn/shop/products/iphone-13-mini-starlight_1200x.jpg?v=1665065093",
      name: "Iphone 13 Mini",
      price: "600",
      selling: "500",
      status: "In Stock",
    },
    {
      key: "3",
      image: "https://cdn.dxomark.com/wp-content/uploads/medias/post-127929/Google-Pixel-7_featured-image-packshot-review.jpg",
      name: "Google Pixel 7",
      price: "600",
      selling: "500",
      status: "Out of Stock",
    },
  {
    key: "4",
    image: "https://www.gizchina.com/wp-content/uploads/images/2022/05/Google-Pixel-7-Pro.jpg",
    name: "Google Pixel 7 Pro",
    price: "600",
    selling: "500",
    status: "Out of Stock",
  }
]

const BannerProducts = () => {

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
                dataSource={data.slice(0, 3)} 
                pagination={false}
            />
        </div>
    )
}

export default BannerProducts
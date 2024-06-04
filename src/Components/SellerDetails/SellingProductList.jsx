import { Table } from 'antd'
import React from 'react'
import { Link } from "react-router-dom";
import { ImageConfig } from '../../../Config';
import { makeBanner} from "../../redux/apiSlice/Product/makeBannerProductsSlice";
import { makeFeatured} from "../../redux/apiSlice/Product/makeFeaturedProductsSlice";
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

const SellingProductList = ({products, setRefresh}) => {
  const dispatch = useDispatch();

  const handleFeatured=(id)=>{
    dispatch(makeFeatured(id)).then((response)=>{
      if(response?.type === "makeFeatured/fulfilled"){
        Swal.fire({
          position: "center",
          icon: "success",
          title: response?.payload,
          showConfirmButton: false,
          timer: 1500
        }).then((response)=>{
          setRefresh("done")
        })
      }
    })
  }
  
  const handleBanner=(id)=>{
    dispatch(makeBanner(id)).then((response)=>{
      if(response?.type === "makeBanner/fulfilled"){
        Swal.fire({
          position: "center",
          icon: "success",
          title: response?.payload,
          showConfirmButton: false,
          timer: 1500
        }).then((response)=>{
          setRefresh("done")
        })
      }
    })
  }


  const columns = [
    {
      title: "Serial No.",
      dataIndex: "no",
      key: "no",
      render: (_,record, index) => (
        <p>{index  + 1}</p>
      ),
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (_,record) => (
        <img src={`${ImageConfig}/${record?.productImage[0]}`} style={{width:"40px", height: "40px"}}  alt="" />
      ),
    },
    {
      title: "Name",
      dataIndex: "productName",
      key: "productName",
    },
    {
      title: "Price",
      dataIndex: "productPrice",
      key: "productPrice",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <button
          onClick={()=>handleFeatured(record?._id)} 
          style={{
            padding: "3px 0",
            borderRadius: 4,
            border: "none",
            background: "#2FD5C7",
            color: "white",
            cursor: "pointer",
            width: 120
          }}
        >
          {
            record?.featured
            ?
            "Product"
            :
            "Featured"
          }
        </button>
      ),
    },
    {
      title: "Banner Action",
      dataIndex: "baction",
      key: "baction",
      render: (_, record) => (
        <button
          onClick={()=>handleBanner(record?._id)} 
          style={{
            padding: "3px 0",
            borderRadius: 4,
            border: "none",
            background: "#2FD5C7",
            color: "white",
            cursor: "pointer",
            width: 120
          }}
        >
          {
            record.bannerProduct
            ?
            "Remove Banner"
            :
            "Add  Banner"
          }
        </button>
      ),
  }
  ];



    return (
        <div style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            

        }}>
            <div style={{display: "flex", alignItems: "center", marginBottom: "10px", justifyContent: "space-between"}}>
                <h1 style={{fontSize: "20px", fontWeight: 600, color: "#2F2F2F"}}>Selling Products</h1>
                <Link to={`/seller-product-list/${ products && products[0]?.userId}`}>
                  <p style={{color: "#2FD5C7", fontSize:"12px", textDecoration: "underline"}}>VIEW ALL</p>
                </Link>
            </div>
            
            <div>
                <Table 
                    columns={columns} 
                    dataSource={products} 
                    pagination={false}
                />
                
            </div>
        </div>
    )
}

export default SellingProductList
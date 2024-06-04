import React, { useEffect, useState } from 'react'
import BackButton from './BackButton'
import { Table } from 'antd'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleSeller } from "../../redux/apiSlice/Home/getSingleSellerSlice";
import { ImageConfig } from '../../../Config';
import { makeBanner} from "../../redux/apiSlice/Product/makeBannerProductsSlice";
import { makeFeatured} from "../../redux/apiSlice/Product/makeFeaturedProductsSlice";
import Swal from 'sweetalert2';
  

const SellerProductList = () => {
    const [page, setPage] = useState( new URLSearchParams(window.location.search).get('page') || 1);
  const [refresh, setRefresh] = useState("")
    const {id} = useParams();

  if(refresh){
      setTimeout(()=>{
          setRefresh("")
      }, 1500)
  }

    const dispatch = useDispatch();
    const {seller} = useSelector(state=> state.getSingleSeller);

    useEffect(()=>{
        dispatch(getSingleSeller(id))
    }, [dispatch, id, refresh !== ""])

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


    const handlePageChange=(page)=>{
        setPage(page);
        const params = new URLSearchParams(window.location.search);
        params.set('page', page);
        window.history.pushState(null, "", `?${params.toString()}`);
    }

    return (
        <div >
            <div style={{marginBottom: "25px"}}>
                <BackButton link={`/seller-details/${seller?._id}`} />
            </div>
            <div  style={{
                background:"white",
                width: "100%",
                height: "80vh",
                borderRadius: "12px",
                padding: "20px"
            }}>
                <div style={{display: "flex", alignItems: "center", marginBottom: "20px", justifyContent: "space-between"}}>
                    <h1 style={{fontSize: "20px", fontWeight: 600, color: "#2F2F2F"}}>Seller Products List</h1>
                    
                </div>


                <div style={{}}>
                    <Table 
                        columns={columns} 
                        dataSource={seller?.products} 
                        pagination={{
                            pageSize: 8,
                            defaultCurrent: parseInt(page),
                            onChange: handlePageChange
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default SellerProductList
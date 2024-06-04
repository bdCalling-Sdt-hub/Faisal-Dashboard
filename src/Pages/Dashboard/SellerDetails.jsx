import React, { useEffect, useState } from 'react'
import BackButton from './BackButton';
import { HiOutlineLocationMarker } from "react-icons/hi";
import SellingProductList from '../../Components/SellerDetails/SellingProductList';
import BannerProducts from '../../Components/SellerDetails/BannerProducts';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleSeller } from "../../redux/apiSlice/Home/getSingleSellerSlice";
import { ImageConfig } from '../../../Config';


const SellerDetails = () => {
    const {id} = useParams();
    const [refresh, setRefresh] = useState("")
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
                                src={` ${seller?.image?.startsWith("https") ? seller?.image : `${ImageConfig}/${seller?.image}` }   `}
                                style={{width: 150,  textAlign:"center", height: 150, borderRadius: "100%", margin: "0 auto 0 auto"}} 
                                alt="profile"
                            />
                        </div>
                        <p style={{fontSize: "16px", textAlign:"center", fontWeight: 600, color: "#494949"}}>{seller?.fullName} </p>
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
                            <p>{seller?.location}</p>
                        </div>
                        <p style={{fontSize: "12px",  textAlign:"center", fontWeight: 400, color: "#6A6D7C"}}>{seller?.email}</p>
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
                    <BannerProducts products={seller?.products}  />
                </div>
            </div>

            <SellingProductList setRefresh={setRefresh} products={seller?.products} />
        </div>
    )
}

export default SellerDetails
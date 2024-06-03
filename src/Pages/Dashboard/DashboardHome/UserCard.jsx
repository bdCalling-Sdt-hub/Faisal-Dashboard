import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { topSeller } from "../../../redux/apiSlice/Home/topSellerSlice"
import { Empty } from 'antd';
const UserCard = () => {
    const dispatch = useDispatch();
    const {seller} = useSelector(state=> state.getTopSeller); 
    useEffect(()=>{
        dispatch(topSeller())
    }, [dispatch]);


    return (
        <React.Fragment>
            {
                seller?.length > 0 
                ?
                seller?.map((index) => (
                    <div key={index} style={{display: "flex", height: "33px", alignItems: "center", marginBottom: "8px", gap: "12px" }}>
                        <img style={{width: "24px", height: "24px", borderRadius: "100%"}}  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="" />
                        <div style={{display: "flex", width: "100%", alignItems: "center", justifyContent: "space-between"}}>
                            <div>
                                <h1 style={{fontSize: "14px", color : "#3D3D3D"}}>Fahim</h1>
                                <p  style={{fontSize: "8px", color : "#B8B6B6"}}>Available</p>
                            </div>
                            <p style={{fontSize: "14px", fontWeight: 500, color: "#464646"}}>$240</p>
                        </div>
                    </div>
                    ))
                :
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/>
            }
        </React.Fragment>
    )
}

export default UserCard
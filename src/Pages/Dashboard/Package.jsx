import React from 'react';
import { useNavigate} from "react-router-dom"
import BackButton from './BackButton';

const Subscription = () => {
    const navigate = useNavigate();
    const handleChangeEditPage=(value)=>{
        localStorage.setItem("package", JSON.stringify(value))
        navigate("/edit-subscription")
    }

    const data = [
        {
            name: "Basic",
            price: 258,
            validaty: 1,
            features: [
                "Add 15 Products for your business",
                "Edit Products details",
                "Manage Orders",
            ]
        },
        {
            name: "Premium",
            price: 765,
            validaty: 2,
            features: [
                "Add 15 Products for your business",
                "Edit Products details",
                "Manage Orders",
            ]
        },
        {
            name: "Standard",
            price: 900,
            validaty: 3,
            features: [
                "Add 15 Products for your business",
                "Edit Products details",
                "Manage Orders",
            ]
        },
        {
            name: "Dealer Ship",
            price: 1000,
            validaty: 1,
            features: [
                "Add 15 Products for your business",
                "Edit Products details",
                "Manage Orders",
            ]
        },

    ]
    return (
        <div>
            <div style={{margin : "30px 0"}}>
                <BackButton link="/" />
            </div>
            <div style={{display: "flex", gap: "24px"}}>

                {
                    data?.map((item, index)=>(
                        <div 
                            style={{
                                width: "306px",
                                height: "428px",
                                borderRadius: "10px",
                                position: "relative",
                                backgroundColor: "white",
                                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                                padding: "20px 11px 26px 11px",
                            }}
                        >
                            {/* package Name */}
                            <h3 style={{textAlign: "center", color: "#6A6D7C"}}>{item?.name}</h3>

                            {/* package price */}
                            <div style={{display: "flex", color: "#6A6D7C", alignItems: "center", justifyContent: "space-between", marginTop: "58px"}}>
                                <div>Package Price</div>
                                <div>$ {item?.price}</div>
                            </div>

                            {/* package validation */}
                            <div style={{display: "flex", color: "#6A6D7C",  alignItems: "center", justifyContent: "space-between", marginTop: "15px"}}>
                                <div>Package Validity</div>
                                <div>{item?.validaty} { item?.name === "Dealer Ship" ? "Year" : "Months"} </div>
                            </div>

                            <div style={{ background: "#D1D2D6", height: "2px", width: "100%", margin: "21px 0 37px 0"}} />

                            {/* package features */}
                            <div style={{display: "flex", flexDirection: "column", gap: "12px"}}>
                                {
                                    item?.features?.map((name, index)=>(
                                        <p key={index} style={{color: "#6A6D7C", fontSize: "14px"}}>{name}</p>
                                    ))
                                }
                            </div>
                            

                            <div 
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginTop: "37px"
                                }}
                            >
                                <button
                                    onClick={()=>handleChangeEditPage(item)}
                                    style={{
                                        width: "180px",
                                        height: "48px",
                                        background: "white",
                                        color: "#2FD5C7",
                                        border: "2px solid #2FD5C7",
                                        borderRadius: "26px",
                                        cursor: "pointer",
                                        padding: "10px",
                                        textAlign: "center"
                                    }}
                                >
                                    Edit
                                </button>
                            </div>
                        </div>

                    ))
                }
            </div>
        </div>
        
    )
}

export default Subscription
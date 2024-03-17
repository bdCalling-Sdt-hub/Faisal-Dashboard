import React from 'react';
import card1 from "../../../Images/SUBS1.jpg";
import card2 from "../../../Images/SUBS2.png";
import card3 from "../../../Images/SUBS3.png";
import { FaCircleCheck } from "react-icons/fa6";
import { useNavigate} from "react-router-dom"

const Subscription = () => {
    const navigate = useNavigate();
    const handleChangeEditPage=(value)=>{
        // localStorage.setItem("package", JSON.stringify(""))
        navigate("/edit-subscription")
    }
    return (
        <div>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <div 
                    style={{
                        height: "405px",
                        width: "405px",
                        borderRadius: "10px",
                        marginTop: "50px",
                        position: "relative",
                        backgroundImage: `url(${card1})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                    }}
                >
                    <div
                        style={{
                            width: "100%",
                            height: "52px",
                            color: "white",
                            border: "none",
                            paddingTop: "30px",
                            textAlign: "center"
                        }}
                    >
                        <h3 style={{textAlign: "center"}}>Basic</h3>
                    </div>

                    <div style={{width: "100%"}}>
                        <div style={{display: "flex", color: "white", padding: "20px", alignItems: "center", justifyContent: "space-between"}}>
                            <div >
                                <div>Package Price</div>
                                <div>Package Validity</div>
                            </div>
                            <div >
                                <div>$ 200</div>
                                <div>3 Months</div>
                            </div>
                        </div>
                        <div  style={{background: "white", height: "1px", margin: "auto", width: "98%", marginBottom: "20px"}}></div>
                        {/* <hr  style={{background: "white"}} /> */}
                        <div style={{
                            paddingLeft: "20px",
                            color: "white"
                        }}>
                            <div style={{display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px"}}>
                                <FaCircleCheck size={24} color="white"/>
                                <h3>5 gigs upload</h3>
                            </div>

                            <div style={{display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px"}}>
                                <FaCircleCheck size={24} color="white"/>
                                <h3>10 gigs upload</h3>
                            </div>

                            <div style={{display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px"}}>
                                <FaCircleCheck size={24} color="white"/>
                                <h3>15 gigs upload</h3>
                            </div>
                        </div>

                        <div style={{
                            padding: "20px",
                            width: "100%",
                            position: "absolute",
                            left: 0,
                            bottom: 0
                        }}>
                            <button
                                onClick={handleChangeEditPage}
                                style={{
                                    width: "100%",
                                    height: "52px",
                                    background: "white",
                                    color: "black",
                                    border: "none",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                    padding: "10px",
                                    textAlign: "center"
                                }}
                            >
                            Edit Package
                            </button>
                        </div>

                        
                    </div>
                </div>

                <div 
                    style={{
                        height: "405px",
                        width: "405px",
                        borderRadius: "10px",
                        marginTop: "50px",
                        position: "relative",
                        backgroundImage: `url(${card2})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                    }}
                >
                    <div
                        style={{
                            width: "100%",
                            height: "52px",
                            color: "white",
                            border: "none",
                            paddingTop: "30px",
                            textAlign: "center"
                        }}
                    >
                        <h3 style={{textAlign: "center"}}>Essential</h3>
                    </div>

                    <div style={{width: "100%"}}>
                        <div style={{display: "flex", color: "white", padding: "20px", alignItems: "center", justifyContent: "space-between"}}>
                            <div >
                                <div>Package Price</div>
                                <div>Package Validity</div>
                            </div>
                            <div >
                                <div>$ 400</div>
                                <div>3 Months</div>
                            </div>
                        </div>
                        <div  style={{background: "white", height: "1px", margin: "auto", width: "98%", marginBottom: "20px"}}></div>
                        {/* <hr  style={{background: "white"}} /> */}
                        <div style={{
                            paddingLeft: "20px",
                            color: "white"
                        }}>
                            <div style={{display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px"}}>
                                <FaCircleCheck size={24} color="white"/>
                                <h3>5 gigs upload</h3>
                            </div>

                            <div style={{display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px"}}>
                                <FaCircleCheck size={24} color="white"/>
                                <h3>10 gigs upload</h3>
                            </div>

                            <div style={{display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px"}}>
                                <FaCircleCheck size={24} color="white"/>
                                <h3>15 gigs upload</h3>
                            </div>
                        </div>

                        <div style={{
                            padding: "20px",
                            width: "100%",
                            position: "absolute",
                            left: 0,
                            bottom: 0
                        }}>
                            <button
                                onClick={handleChangeEditPage}
                                style={{
                                    width: "100%",
                                    height: "52px",
                                    background: "white",
                                    color: "black",
                                    border: "none",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                    padding: "10px",
                                    textAlign: "center"
                                }}
                            >
                            Edit Package
                            </button>
                        </div>

                        
                    </div>
                </div>


                <div 
                    style={{
                        height: "405px",
                        width: "405px",
                        borderRadius: "10px",
                        marginTop: "50px",
                        position: "relative",
                        backgroundImage: `url(${card3})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                    }}
                >
                    <div
                        style={{
                            width: "100%",
                            height: "52px",
                            color: "white",
                            border: "none",
                            paddingTop: "30px",
                            textAlign: "center"
                        }}
                    >
                        <h3 style={{textAlign: "center"}}>Essential Pro</h3>
                    </div>

                    <div style={{width: "100%"}}>
                        <div style={{display: "flex", color: "white", padding: "20px", alignItems: "center", justifyContent: "space-between"}}>
                            <div >
                                <div>Package Price</div>
                                <div>Package Validity</div>
                            </div>
                            <div >
                                <div>$ 600</div>
                                <div>3 Months</div>
                            </div>
                        </div>
                        <div  style={{background: "white", height: "1px", margin: "auto", width: "98%", marginBottom: "20px"}}></div>
                        {/* <hr  style={{background: "white"}} /> */}
                        <div style={{
                            paddingLeft: "20px",
                            color: "white"
                        }}>
                            <div style={{display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px"}}>
                                <FaCircleCheck size={24} color="white"/>
                                <h3>5 gigs upload</h3>
                            </div>

                            <div style={{display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px"}}>
                                <FaCircleCheck size={24} color="white"/>
                                <h3>10 gigs upload</h3>
                            </div>

                            <div style={{display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px"}}>
                                <FaCircleCheck size={24} color="white"/>
                                <h3>15 gigs upload</h3>
                            </div>
                        </div>

                        <div style={{
                            padding: "20px",
                            width: "100%",
                            position: "absolute",
                            left: 0,
                            bottom: 0
                        }}>
                            <button
                                onClick={handleChangeEditPage}
                                style={{
                                    width: "100%",
                                    height: "52px",
                                    background: "white",
                                    color: "black",
                                    border: "none",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                    padding: "10px",
                                    textAlign: "center"
                                }}
                            >
                            Edit Package
                            </button>
                        </div>

                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscription
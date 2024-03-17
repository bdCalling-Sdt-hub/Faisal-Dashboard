import React, { useState } from 'react'
import { Modal, Upload } from 'antd';
import Slider from "react-slick";
import Slider1 from "../../../Images/SLIDER 1.JPG"
import Slider2 from "../../../Images/SLIDER 2.JPG"
import Slider3 from "../../../Images/SLIDER 3.JPG"
import { FaPlus } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa6";

const AddSlider = () => {
    const [image, setImage] = useState([]);
    const [dummay, setDummy] = useState([Slider1, Slider2, Slider3]);
    const [imgURL, setImgURL] = useState([...dummay]);


    const handleChange = (e) => {
        const file = e.target.files[0];
        const imgUrl = URL?.createObjectURL(file);
        setImgURL((prev) => [...prev, imgUrl]);
        setImage((prev) => [...prev, file]);
    }
    const handleRemove=(id)=>{
        console.log(id);
        const data = imgURL?.filter((item, index)=> index !== id);
        setImgURL(data);
    }

    const uploadButton = (
        <button
        style={{
            border: 0,
            background: 'none',
        }}
        type="button"
        >
        {/* <PlusOutlined /> */} +
        <div
            style={{
            marginTop: 8,
            }}
        >
            Upload
        </div>
        </button>
    );

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        
    };

    return (
        <div>
            <div  style={{ marginBottom: "50px", display: "flex", alignItems: "center", gap: "50px"}}>
                {
                    (imgURL)?.map((url, index)=>
                    <div style={{width: "100%", height:"300px", position: "relative"}}>
                        <img style={{width: "100%", height:"300px", borderRadius: "12px"}} src={ url } alt="" />
                        <div onClick={()=>handleRemove(index)} style={{
                            width: "35px",
                            height: "35px",
                            backgroundColor: "#ffb7d5",
                            borderRadius: "100%",
                            padding: "5px",
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer"
                        }}>
                            <FaTrash color='white' />
                        </div>
                    </div>
                    
                    )
                }
                
                
                {/* <div style={{width: "100%", height:"300px"}}>
                    <img style={{width: "100%", height:"300px", borderRadius: "12px"}} src={imgURL[1] ? imgURL[1] : Slider2} alt="" />
                </div>
                <div style={{width: "100%", height:"300px"}}>
                    <img style={{width: "100%", height:"300px", borderRadius: "12px"}} src={imgURL[2] ? imgURL[2] : Slider3} alt="" />
                </div> */}
            </div>

            {
                imgURL?.length > 2
                ?
                null
                :
                <div>
                    <label 
                        style={{
                            width: "120px", 
                            height: "80px", 
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "10px", 
                            cursor: "pointer", 
                            color : "#ffb7d5", 
                            fontSize: "20px", 
                            fontWeight: 600,
                            border: "1px solid #ffb7d5", 
                            borderRadius: "8px", 
                            padding: "10px"
                        }} 
                        htmlFor="input"
                    >
                        <FaPlus size={35}/>
                        Upload
                    </label>
                    <input type="file" name="input" id="input" onChange={handleChange} style={{display: "none"}} />
                </div>
            }

        </div>
    )
}

export default AddSlider
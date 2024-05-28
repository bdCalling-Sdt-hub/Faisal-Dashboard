import React, { useEffect, useRef, useState } from 'react'
import BackButton from './BackButton';
import JoditEditor from 'jodit-react';
import { Button } from 'antd';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { getPrivacy } from "../../redux/apiSlice/PrivacyPolicy/getPrivacyPolicySlice";
import { updatePrivacy } from "../../redux/apiSlice/PrivacyPolicy/updatePrivacyPolicySlice";

const PrivacyPolicy = () => {
    const dispatch = useDispatch();
    const { privacy } = useSelector(state => state.getPrivacy);
    const editor = useRef(null)
    const [content, setContent] = useState('');
    const [refresh, setRefresh] = useState('')

    if(refresh){
        setTimeout(()=>{
            setRefresh("")
        },[1500])
    }

    useEffect(()=>{
        setContent(privacy?.privacy)
    }, [privacy])

    useEffect(()=>{
        dispatch(getPrivacy());
    }, [dispatch])



    const handleUpdate=()=>{
        dispatch(updatePrivacy({privacy: content})).then((response)=>{
            if(response?.type === "updatePrivacy/fulfilled"){
                dispatch(getPrivacy());
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Updated Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            }else{
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Something went Wrong",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })
        
    }


    return (
        <div>
            <div style={{marginBottom: "15px"}}>
                <BackButton link='/' />
            </div>

            <div
                style={{
                    height: "81vh", 
                    background: "white",
                    padding: 24,
                    borderRadius: 8
                }}
            >
                <h1 style={{marginBottom: 16}}>Privacy Policy</h1>
                <div >
                    <JoditEditor
                        ref={editor}
                        value={content}
                        onChange={newContent => { setContent(newContent) }}
                    />
                    <Button 
                        onClick={handleUpdate} 
                        block 
                        style={{ marginTop: "30px", backgroundColor: "#2FD5C7", border:"none", color: "#fff", height: "50px" }}
                    >
                        Update
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicy
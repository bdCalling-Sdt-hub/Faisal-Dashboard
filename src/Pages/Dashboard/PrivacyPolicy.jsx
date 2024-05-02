import React, { useRef, useState } from 'react'
import BackButton from './BackButton';
import JoditEditor from 'jodit-react';
import { Button } from 'antd';
import Swal from 'sweetalert2';

const PrivacyPolicy = () => {
    const [data, setData] = useState()
    const editor = useRef(null)
    const [content, setContent] = useState('');
    const [refresh, setRefresh] = useState('')

    if(refresh){
        setTimeout(()=>{
            setRefresh("")
        },[1500])
    }

    const handleUpdate=()=>{
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Updated Successfully",
            showConfirmButton: false,
            timer: 1500
        });
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
                        config={{ height: '500px' }}
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
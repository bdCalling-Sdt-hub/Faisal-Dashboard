import { Button, Col, DatePicker, Image, Input, Row, Upload } from "antd";
import ImgCrop from "antd-img-crop";
import dayjs from "dayjs";
import React, { useState } from "react";
import { LiaEditSolid } from "react-icons/lia";
const dateFormat = "YYYY-MM-DD";

const PersonalInfo = () => {
  const [profileEdit, setProfileEdit] = useState(false);
  // const [image, setImage] = useState(profile?.image ? `${url}/${profile?.image}` : person);
  const [image, setImage] = useState();
  const [imgURL, setImgURL] = useState(image);

  const handleChange = () => {
    setProfileEdit(true);
  };

  const [fileList, setFileList] = useState([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
  ]);

  const onChange = (e) => {
    const file= e.target.files[0];
    const imgUrl = URL.createObjectURL(file);
    setImgURL(imgUrl);
    setImage(file)
  };
  

  return (
    <>
      {!profileEdit ? (
        <>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid #d9d9d9",
              paddingBottom: "30px",
              marginBottom: "20px",
            }}
          >
            <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
              <img
                width={142}
                height={142}
                style={{ borderRadius: "8px" }}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
              <div>
                <h2>Fahim</h2>
                <p>@fahim</p>
              </div>
            </div>
            <div>
              <Button
                onClick={handleChange}
                style={{
                  background: "#ffb7d5",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  border: "none"
                }}
              >
                <LiaEditSolid fontSize={16} />
                Edit
              </Button>
            </div>
          </div>

          <Row style={{ marginBottom: "15px" }}>
            <Col span={24}>
              <label htmlFor="">Name</label>
              <Input
                style={{ height: "45px" }}
                defaultValue={"Fahim"}
                readOnly
              />
            </Col>
          </Row>
          <Row gutter={15} style={{ marginBottom: "15px" }}>
            <Col span={12}>
              <label htmlFor="">Email</label>
              <Input
                style={{ height: "45px" }}
                defaultValue={"siffahim25@gmail.com"}
                readOnly
              />
            </Col>
            <Col span={12}>
              <label htmlFor="">Phone Number</label>
              <Input
                style={{ height: "45px" }}
                defaultValue={"01646524028"}
                readOnly
              />
            </Col>
          </Row>
          <Row gutter={15} style={{ marginBottom: "15px" }}>
            
            <Col span={24}>
              <label htmlFor="">Date of Birth</label>
              <DatePicker
                style={{ height: "45px", width: "100%" }}
                defaultValue={dayjs("2023-08-27", dateFormat)}
                disabled
              />
            </Col>
          </Row>
          <Row style={{ marginBottom: "15px" }}>
            <Col span={24}>
              <label htmlFor="">Address</label>
              <Input
                style={{ height: "45px" }}
                defaultValue={"Mogbazer,Dhaka"}
                readOnly
              />
            </Col>
          </Row>
        </>
      ) : (
        <>
          <div
            style={{
              backgroundColor: "white",
              display: "flex",
              alignItems : "center",
              marginBottom: "20px",
              height: "174px",
              
            }}
          >
            <div>
              <div style={{ display: "flex", gap: "20px" }}>
                <img 
                  className="mx-auto rounded-full" 
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" 
                  width={142} 
                  height={142} 
                  alt="" 
                  style={{borderRadius: "8px"}}
                />
                <div style={{ marginTop: "50px" }}>
                  <h2>{"Nadir"}</h2>

                  <label htmlFor="img" style={{marginTop : "8px", cursor: "pointer", display: "block", color : "#ffb7d5", fontSize: "18px", fontWeight: "600"}}>Change Photo</label>
                  <input style={{display: "none"}} onChange={onChange}  type="file" name="" id="img" />
                </div>
              </div>
            </div>
          </div>

          <Row style={{ marginBottom: "15px" }}>
            <Col span={24}>
              <label htmlFor="">Name</label>
              <Input style={{ height: "45px" }} defaultValue={"Fahim"} />
            </Col>
          </Row>
          <Row gutter={15} style={{ marginBottom: "15px" }}>
            <Col span={12}>
              <label htmlFor="">Email</label>
              <Input
                style={{ height: "45px" }}
                defaultValue={"siffahim25@gmail.com"}
              />
            </Col>
            <Col span={12}>
              <label htmlFor="">Phone Number</label>
              <Input style={{ height: "45px" }} defaultValue={"01646524028"} />
            </Col>
          </Row>
          <Row gutter={15} style={{ marginBottom: "15px" }}>
            <Col span={24}>
              <label htmlFor="">Date of Birth</label>
              <DatePicker
                style={{ height: "45px", width: "100%" }}
                defaultValue={dayjs("2023-08-27", dateFormat)}
              />
            </Col>
          </Row>
          <Row style={{ marginBottom: "15px" }}>
            <Col span={24}>
              <label htmlFor="">Address</label>
              <Input
                style={{ height: "45px" }}
                defaultValue={"Mogbazer,Dhaka"}
              />
            </Col>
          </Row>
          <Button
            style={{
              height: "45px",
              background: "#ffb7d5",
              color: "#fff",
              marginTop: "20px",
              border: "none"
            }}
            block
          >
            Save
          </Button>
        </>
      )}
    </>
  );
};

export default PersonalInfo;

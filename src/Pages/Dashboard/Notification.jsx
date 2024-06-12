import { Table } from 'antd';
import React, { useEffect, useState } from 'react'
import BackButton from './BackButton';
import { getNotification } from "../../redux/apiSlice/Notification/getNotificationSlice"
import { useDispatch, useSelector } from 'react-redux';
import { ImageConfig } from '../../../Config';
import moment from 'moment';


const Notification = () => {
  const [page, setPage] = useState( new URLSearchParams(window.location.search).get('page') || 1);

  const columns = [
        {
          title: "S.No",
          dataIndex: "key",
          key: "key",
          render: (_,record, index) => (
            <p>{index + 1}</p>
          )
        },
        {
          title: "Notification",
          dataIndex: "notification",
          key: "notification",
          render: (_,record) => (
            <div style={{display: "flex", alignItems: 'center', gap: "16px"}}>
                <img 
                    src={`${record?.user?.image.startsWith("https") ? record?.user?.image : `${ImageConfig}/${record?.user?.image}`}`} 
                    alt="" 
                    style={{
                        width: "45px", 
                        height: "45px", 
                        background: record.status === "In Stock" ?  "#03FB75" : "#FB0303" ,
                        borderRadius: "100%",
                    }}
                />
                <div>
                    <p>{record?.user?.fullName}</p>
                    <p>{record?.user?.email}</p>
                </div>
            </div>
          ),
        },
        {
          title: "Time-Date",
          dataIndex: "createdAt",
          key: "createdAt",
          render: (_, record) => (
            <p>{moment(record?.createdAt).format("L")}</p>
          )
        }
  ];

  const handlePageChange=(page)=>{
    setPage(page);
    const params = new URLSearchParams(window.location.search);
    params.set('page', page);
    window.history.pushState(null, "", `?${params.toString()}`);
  }
  const dispatch = useDispatch();
  const {notifications, pagination} = useSelector(state=> state.getNotifications);

  useEffect(()=>{
    dispatch(getNotification())
  }, [dispatch]);

  
  return (
        <div>
            
            <div style={{marginBottom: "24px"}}>
                <BackButton link="/" />
            </div>
            <div
                style={{
                    background: "white",
                    padding: "24px",
                    borderRadius: "14px"
                }}
            >
                <h1 style={{fontSize: "32px", fontWeight: 600, color: "#6A6D7C"}}>Notifications </h1>
                <Table 
                    columns={columns} 
                    dataSource={notifications} 
                    pagination={{
                      pageSize: 8,
                      total: pagination?.total,
                      defaultCurrent: parseInt(page),
                      onChange: handlePageChange
                    }}
                />
            </div>
        </div>
    )
}

export default Notification
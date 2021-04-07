import React, { useEffect } from 'react'
import {
    Row,
    Col,
  } from 'antd';
import AppHeader from '../Components/Common/Header/AppHeader';
import AppMenu from '../Components/Common/Menu/AppMenu/AppMenu';
import TopTags from '../Components/Common/TopTags/TopTags';
import imageTU from '../Assets/19333428.jpg';
import { useDispatch } from "react-redux";
import { getTopTags } from "../Redux/actions/Tags/tagsActions";


export default function AppLayout({children,isPTags}) {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getTopTags()), [dispatch]);
    return (
      <>
        <AppHeader />
        <Row>
          <Col style={{ marginTop: "40px" }}>
            <AppMenu />
          </Col>
          <Col
            span={14}
            style={{
              marginBottom: "40px",
              marginTop: "40px",
              marginLeft:"20px",
              borderRadius: "5px",
              padding: "30px",
              border: "1px solid #d6d9dc",
              background: "#e1e1ef49",
              boxShadow: '0px 0px 16px rgba(88, 103, 221, 0.2)',
            }}
          >
            {children}
          </Col>
          <Col span={5} style={{ marginTop: "40px", marginLeft:'30px' }}>
            {isPTags ? <TopTags /> : <img src={imageTU} alt='ProxymTips' width='100%'/>}
          </Col>
        </Row>
      </>
    );
};


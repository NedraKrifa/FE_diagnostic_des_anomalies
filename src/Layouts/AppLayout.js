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
            span={15}
            style={{
              borderLeft: "1px solid #d6d9dc",
              padding: "30px",
              background: "#e1e1ef49",
            }}
          >
            {children}
          </Col>
          <Col span={5} style={{ marginTop: "40px", marginLeft:'15px' }}>
            {isPTags ? <TopTags /> : <img src={imageTU} alt='ProxymTips' width='100%'/>}
          </Col>
        </Row>
      </>
    );
};


import React from 'react'
import {
    Row,
    Col,
  } from 'antd';
import AppHeader from '../Components/Common/Header/AppHeader';
import AppMenu from '../Components/Common/Menu/AppMenu';
import TopTags from '../Components/Common/TopTags/TopTags';

const data = [
  "javascript",
  "java",
  "angular",
  "reactjs",
  "nodejs",
  "springboot",
  "expressjs",
  "mongodb",
];

export default function AppLayout({children}) {
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
            <TopTags data={data}/>
          </Col>
        </Row>
      </>
    );
};


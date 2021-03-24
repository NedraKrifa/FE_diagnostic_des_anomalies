import React from 'react'
import { Row, Col, Avatar, List, Typography, Divider } from 'antd';
import { UserOutlined } from '@ant-design/icons';


const data = [
    'Racing car sprays burning fuel into crowdRacing car sprays burning fuel into crowd.',
    'Japanese princess to wed commonerRacing car sprays burning fuel into crowd.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girlRacing car sprays burning fuel into crowd.',
    'Los Angeles battles huge wildfires.',
    'Racing car sprays burning fuel into crowdRacing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];

export default function ProfileBody({user}) {
    return (
      <div style={{margin:'40px'}}>
        <h1 style={{marginBottom:'-20px', color:'#484848'}}>{user.username}</h1>
        <Divider style={{border:'1px solid #5867dd'}}/>
        <Row justify="space-between" style={{ marginBottom: "50px",width:'50%' }}>
          <Col>
            <Avatar shape="square" size={200} icon={<UserOutlined />} />
          </Col>
          <Col style={{marginTop:'20px'}}>
            <h3 style={{color:'#484848'}}>Email: {user.email}</h3>
            <h3 style={{color:'#484848'}}>Role: {user.role}</h3>
            <h3 style={{color:'#484848'}}>Created: {user.created}</h3>
          </Col>
        </Row>
        <List
          header={<h1>Questions</h1>}
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 6,
          }}
          dataSource={data}
          renderItem={(item,i) => (
            <List.Item style={{marginLeft:'80px'}}>
              <Typography.Text code>{i}</Typography.Text> {item}
            </List.Item>
          )}
        />
      </div>
    );
}

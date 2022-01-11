import React from 'react'
import { useHistory } from "react-router-dom";
import image from "../../Assets/4042.jpg"
import { Row } from 'antd';
import { Button404 } from './NotFound.styled';
import { HomeOutlined } from '@ant-design/icons';

export default function NotFound() {
    const history= useHistory()
    const goHome=()=>{
        history.push("/private");
    }
    return (
      <div>
        <Row justify="center" align="middle">
          <img src={image} width="60%" alt="404NotFound" />
        </Row>
        <Row justify="center" align="middle">
          <Button404
            shape="round"
            size="large"
            icon={<HomeOutlined />}
            onClick={() => goHome()}
          >
            Go Home
          </Button404>
        </Row>
      </div>
    );
}

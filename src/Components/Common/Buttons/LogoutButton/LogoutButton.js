import React from 'react'
import { useDispatch } from "react-redux";
import { logout } from '../../../../Redux/actions/Auth/authActions';
import { Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';

export default function LogoutButton() {
    const dispatch = useDispatch();
    return (
        <Button type="primary" shape="round" size="large" icon={<LogoutOutlined />} onClick={() => dispatch(logout())} >
          Logout
        </Button>
    )
}

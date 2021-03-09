import React from 'react'
import { useDispatch } from "react-redux";
import { logout } from '../../../../Redux/actions/Auth/authActions';
import { LogoutOutlined } from '@ant-design/icons';
import { ButtonL} from "./LogoutButton.styled"

export default function LogoutButton() {
    const dispatch = useDispatch();
    return (
      <ButtonL
        shape="round"
        size="large"
        icon={<LogoutOutlined />}
        onClick={() => dispatch(logout())}
      >
        Logout
      </ButtonL>
    );
}

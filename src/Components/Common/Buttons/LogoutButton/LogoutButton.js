import React from 'react'
import { useDispatch } from "react-redux";
import { logout } from '../../../../Redux/actions/Auth/authActions';
import { LogoutOutlined } from '@ant-design/icons';
import { ButtonL} from "./LogoutButton.styled"
import { useHistory } from "react-router-dom";

export default function LogoutButton() {
    const history= useHistory()
    const dispatch = useDispatch();
    const onLogout = () => {
      dispatch(logout());
      history.push("/login");
    };
    return (
      <ButtonL
        shape="round"
        size="large"
        icon={<LogoutOutlined />}
        onClick={() => onLogout()}
      >
        Logout
      </ButtonL>
    );
}

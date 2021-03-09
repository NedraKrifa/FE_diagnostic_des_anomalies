import React from 'react'
import SearchForm from '../../Briks/Forms/SearchForm/SearchForm'
import AppLogo from '../Logos/AppLogo/AppLogo'
import { Col } from 'antd';
import { HeaderRow} from './AppHeader.styled';
import UserAvatar from '../Logos/UserAvatar/UserAvatar';
import LogoutButton from '../Buttons/LogoutButton/LogoutButton';
import { Link } from "react-router-dom";

export default function AppHeader() {
    return (
      <HeaderRow justify="center" align="middle">
        <Col span={4}>
          <Link to="/">
            <AppLogo width="50%" style={{ margin: "-20px 10px" }} />
          </Link>
        </Col>
        <Col span={15}>
          <SearchForm />
        </Col>
        <Col offset={1}>
          <UserAvatar />
        </Col>
        <Col style={{ marginLeft: "20px" }}>
          <LogoutButton />
        </Col>
      </HeaderRow>
    );
}

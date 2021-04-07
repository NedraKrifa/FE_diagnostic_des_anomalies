import React from 'react'
import { useSelector } from "react-redux";
import { Input, Row, Col } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import UsersFilter from '../../../Common/Menu/FilterMenu/UsersFilter/UsersFilter';
import ListU from '../../../Common/Lists/Users/ListU';
import { TitleH1 } from '../../../../App.styled';

const prefix = (
    <SearchOutlined
      style={{
        fontSize: 30,
        color: "#5867dd",
      }}
      onClick={()=>console.log('prefix')}
    />
  );

export default function UsersBody() {
    const users = useSelector((state) => state.users.users);
    return (
      <>
        <TitleH1>Users</TitleH1>
        <Row justify="space-between">
          <Col>
            <Input
              placeholder="Filter by User..."
              allowClear
              size="large"
              prefix={prefix}
              style={{ width: 250, padding:'10px' }}
            />
          </Col>
          <Col>
            <UsersFilter />
          </Col>
        </Row>
        <ListU users={users}/>
      </>
    );
}

import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Input, Row, Col } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import UsersFilter from '../../../Common/Menu/FilterMenu/UsersFilter/UsersFilter';
import ListU from '../../../Common/Lists/Users/ListU';
import { TitleH1 } from '../../../../App.styled';
import { getSearchUsers } from '../../../../Redux/actions/Users/usersActions';

const prefix = (
    <SearchOutlined
      style={{
        fontSize: 30,
        color: "#5867dd",
      }}
    />
  );

export default function UsersBody() {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const enterSearch = () => {
    dispatch(getSearchUsers(value));
  };
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
              onChange={onChange}
              onPressEnter={enterSearch}
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

import React, { useState } from "react";
import { Menu } from 'antd';
import { useDispatch } from "react-redux";
import { getMembers, getAdministrators, getModerators } from "../../../../../Redux/actions/Users/usersActions";

export default function UsersFilter() {
  const dispatch = useDispatch();
    const [selector, setSelector] = useState("1");
    const handleClick = (e) => {
      setSelector(e.key);
      switch (e.key){
        case "1": return dispatch(getMembers());
        case "2": return dispatch(getModerators());
        case "3": return dispatch(getAdministrators());
        default: return true;
      }
    };
    return (
      <Menu
        onClick={handleClick}
        selectedKeys={[selector]}
        mode="horizontal"
        style={{ fontSize: "20px" }}
      >
        <Menu.Item key="1">Members</Menu.Item>
        <Menu.Item key="2">Moderators</Menu.Item>
        <Menu.Item key="3">Administrators</Menu.Item>
      </Menu>
    );
}

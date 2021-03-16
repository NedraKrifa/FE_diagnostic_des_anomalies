import React, { useState } from "react";
import { Menu } from 'antd';

export default function UsersFilter() {
    const [selector, setSelector] = useState("1");
    const handleClick = (e) => {
      console.log("click ", e);
      setSelector(e.key);
    };
    return (
      <Menu onClick={handleClick} selectedKeys={[selector]} mode="horizontal">
        <Menu.Item key="1">Members</Menu.Item>
        <Menu.Item key="2">Moderators</Menu.Item>
        <Menu.Item key="3">Administrators</Menu.Item>
      </Menu>
    );
}

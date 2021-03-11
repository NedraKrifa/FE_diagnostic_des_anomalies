import React,{ useState } from 'react'
import { Menu } from 'antd';
import { MenuItem } from './AppMenu.styled';

export default function AppMenu() {
    const [selector, setSelector] = useState("1");
    const handleClick = e => {
        console.log('click ', e);
        setSelector(e.key);
      };

    return (
      <Menu
        onClick={handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={["1"]}
        mode="inline"
      >
        <MenuItem key="1" selected={selector === "1" ? 'selected' : ''}>Home</MenuItem>
        <Menu.ItemGroup key="g1" title="PUBLIC">
          <MenuItem key="2" selected={selector === "2" ? 'selected' : ''}>Questions</MenuItem>
          <MenuItem key="3" selected={selector === "3" ? 'selected' : ''}>Tags</MenuItem>
          <MenuItem key="4" selected={selector === "4" ? 'selected' : ''}>Users</MenuItem>
        </Menu.ItemGroup>
      </Menu>
    );
}

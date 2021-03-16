import React,{ useState } from 'react'
import { Menu } from 'antd';

export default function QuestionsFilter() {
    const [selector, setSelector] = useState("1");
    const handleClick = e => {
        console.log('click ', e);
        setSelector(e.key);
      };
    return (
      <Menu onClick={handleClick} selectedKeys={[selector]} mode="horizontal" style={{marginBottom:'30px'}}>
        <Menu.Item key="1">
          Newest
        </Menu.Item>
        <Menu.Item key="2">
          Top
        </Menu.Item>
        <Menu.Item key="3">
          Oldest
        </Menu.Item>
      </Menu>
    );
}

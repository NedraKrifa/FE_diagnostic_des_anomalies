import React, { useState } from "react";
import { Menu } from 'antd';
import { useDispatch } from "react-redux";
import { getTopTags, getNameTags, getNewTags } from "../../../../../Redux/actions/Tags/tagsActions";

export default function TagsFilter() {
  const dispatch = useDispatch();
    const [selector, setSelector] = useState("1");
    const handleClick = (e) => {
      console.log("click ", e);
      setSelector(e.key);
      switch (e.key){
        case "1": return dispatch(getTopTags());
        case "2": return dispatch(getNameTags());
        case "3": return dispatch(getNewTags());
      }
    };
    return (
      <Menu
        onClick={handleClick}
        selectedKeys={[selector]}
        mode="horizontal"
      >
        <Menu.Item key="1">Popular</Menu.Item>
        <Menu.Item key="2">Name</Menu.Item>
        <Menu.Item key="3">New</Menu.Item>
      </Menu>
    );
}

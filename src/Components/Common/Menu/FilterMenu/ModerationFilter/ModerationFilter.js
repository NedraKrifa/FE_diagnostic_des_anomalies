import React,{ useState } from 'react'
import { Menu } from 'antd';
import { useDispatch } from "react-redux";
import { getModerationQuestions, getBlockedQuestions, getUnblockedQuestions } from "../../../../../Redux/actions/Questions/questionsActions";

export default function ModerationFilter() {
    const dispatch = useDispatch();
    const [selector, setSelector] = useState("1");
    const handleClick = e => {
        console.log('click ', e);
        setSelector(e.key);
        switch (e.key){
          case "1": return dispatch(getModerationQuestions());
          case "2": return dispatch(getUnblockedQuestions());
          case "3": return dispatch(getBlockedQuestions());
          default: return true;
        }
      };
    return (
      <Menu
        onClick={handleClick}
        selectedKeys={[selector]}
        mode="horizontal"
        style={{ marginBottom: "50px", fontSize: "20px" }}
      >
        <Menu.Item key="1">All</Menu.Item>
        <Menu.Item key="2">Unblocked</Menu.Item>
        <Menu.Item key="3">Blocked</Menu.Item>
      </Menu>
    );
}

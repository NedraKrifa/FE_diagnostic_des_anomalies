import React,{ useState } from 'react'
import { Menu } from 'antd';
import { useDispatch } from "react-redux";
import { getOldQuestions, getQuestions, getTopQuestions } from "../../../../../Redux/actions/Questions/questionsActions";

export default function QuestionsFilter() {
  const dispatch = useDispatch();
    const [selector, setSelector] = useState("1");
    const handleClick = e => {
        console.log('click ', e);
        setSelector(e.key);
        switch (e.key){
          case "1": return dispatch(getQuestions());
          case "2": return dispatch(getTopQuestions());
          case "3": return dispatch(getOldQuestions());
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
        <Menu.Item key="1">Newest</Menu.Item>
        <Menu.Item key="2">Top</Menu.Item>
        <Menu.Item key="3">Oldest</Menu.Item>
      </Menu>
    );
}

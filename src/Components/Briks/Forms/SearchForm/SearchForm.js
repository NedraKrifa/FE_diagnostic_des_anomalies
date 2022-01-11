import React,{useState} from 'react';
import { Input } from 'antd';
import { UpSquareOutlined, SearchOutlined } from '@ant-design/icons';
import { useDispatch } from "react-redux";
import { getSearchQuestions } from '../../../../Redux/actions/Questions/questionsActions';
import { useHistory } from "react-router-dom";

const suffix = (
  <a href="/private/questions/search"><UpSquareOutlined
    style={{
      fontSize: 30,
      color: "#5867dd",
    }}
  /></a>
);

const prefix = (
    <SearchOutlined
      style={{
        fontSize: 30,
        color: "#5867dd",
      }}
    />
  );


export default function SearchForm() {
  const history= useHistory()
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const enterSearch = () => {
    const question = "?title="+value+"&tags=&authors=";
    dispatch(getSearchQuestions(question)); 
    history.push("/private/questions/search");
  };

  return (
    <Input
      style={{padding:'10px'}}
      placeholder="Search..."
      allowClear
      size="large"
      suffix={suffix}
      prefix={prefix}
      onChange={onChange}
      onPressEnter={enterSearch}
    />
  );
}

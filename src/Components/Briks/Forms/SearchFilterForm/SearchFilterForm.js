import React, { useState } from 'react'
import { Form, Input, Select, Divider, Radio } from "antd";
import { FormSF, ButtonSF } from "./SearchFilterForm.styled";
import { useSelector, useDispatch } from "react-redux";
import { getSearchQuestions, getSearchRedmine } from '../../../../Redux/actions/Questions/questionsActions';
import { SearchOutlined } from '@ant-design/icons';

const { Option } = Select;

const prefix = (
  <SearchOutlined
    style={{
      fontSize: 20,
      color: "#5867dd",
    }}
  />
);

const tailLayout = {
  wrapperCol: { span: 4 },
};

const options = [
  { label: 'Search', value: 'Search' },
  { label: 'Redmine', value: 'Redmine' },
];

export default function SearchFilterForm() {
  const dispatch = useDispatch();
    const users = useSelector((state) => state.users.users);
    const tags = useSelector((state) => state.tags.tags);
    const [form] = Form.useForm();
    const [checkedValue, setCheckedValue] = useState('Search');

    const onFinish = (values) => {
      console.log(checkedValue);
        //console.log('Received values of form: ', values);

        const title=values.title ? values.title: ''
        if(checkedValue === 'Search'){
          const listTags=[];
          if(values.tags){
            values.tags.forEach((element) => {
              if (Number(element) || Number(element) === 0) {
                listTags.push(tags[Number(element)].name);
              } else {
                listTags.push(element);
              }
            });
          }
  
          const listUsers=[];
          if(values.users){
            values.users.forEach((element) => {
              if (Number(element) || Number(element) === 0) {
                listUsers.push(users[Number(element)].username);
              } else {
                listUsers.push(element);
              }
            });
          }
  
          const question = "?title="+title+"&tags="+listTags.join(",")+"&authors="+listUsers.join(",");
          dispatch(getSearchQuestions(question));
        }else{
          dispatch(getSearchRedmine(title));
        }
    }
    
      const onCheckChange = (e) => {
        setCheckedValue(e.target.value);
      };


    return (
      <FormSF
        form={form}
        layout="vertical"
        name="SearchFilter"
        onFinish={onFinish}
        scrollToFirstError
      >
        <Form.Item name="title">
          <Input
            placeholder="Search..."
            allowClear
            size="large"
            prefix={prefix}
          />
        </Form.Item>

        <Form.Item name="tags">
          <Select
            mode="tags"
            allowClear
            size="large"
            style={{ width: "100%", color: "darkcyan" }}
            placeholder="Enter a tag"
          >
            {tags.map((tag, i) => {
              return <Option key={i}>{tag.name}</Option>;
            })}
          </Select>
        </Form.Item>

        <Form.Item name="users">
          <Select
            mode="tags"
            allowClear
            size="large"
            style={{ width: "100%", color: "darkcyan" }}
            placeholder="Enter a user"
          >
            {users.map((user, i) => {
              return <Option key={i}>{user.username}</Option>;
            })}
          </Select>
        </Form.Item>

        <Form.Item>
          <Divider />
          <Radio.Group
            options={options}
            onChange={onCheckChange}
            value={checkedValue}
            optionType="button"
          />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <ButtonSF
            htmlType="submit"
            block
            size="large"
            icon={<SearchOutlined />}
          >
            Search
          </ButtonSF>
        </Form.Item>
      </FormSF>
    );
}

import React, { useState } from 'react'
import { Form, Input, Select, Button, Checkbox, Divider } from "antd";
import { FormSF, ButtonSF } from "./SearchFilterForm.styled";
import { useSelector, useDispatch } from "react-redux";
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

const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Search', 'Redmine'];
const defaultCheckedList = ['Search'];

export default function SearchFilterForm() {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.users);
    const tags = useSelector((state) => state.tags.tags);
    const [form] = Form.useForm();
    const [checkedList, setCheckedList] = useState(defaultCheckedList);
    const [indeterminate, setIndeterminate] = useState(true);
    const [checkAll, setCheckAll] = useState(false);

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    }

    const onChange = list => {
        setCheckedList(list);
        setIndeterminate(!!list.length && list.length < plainOptions.length);
        setCheckAll(list.length === plainOptions.length);
      };
    
      const onCheckAllChange = e => {
        setCheckedList(e.target.checked ? plainOptions : []);
        setIndeterminate(false);
        setCheckAll(e.target.checked);
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
          <Checkbox
            indeterminate={indeterminate}
            onChange={onCheckAllChange}
            checked={checkAll}
          >
            Check all
          </Checkbox>
          <Divider />
          <CheckboxGroup
            options={plainOptions}
            value={checkedList}
            onChange={onChange}
          />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <ButtonSF htmlType="submit" block size="large" icon={<SearchOutlined />}>
            Search
          </ButtonSF>
        </Form.Item>
      </FormSF>
    );
}

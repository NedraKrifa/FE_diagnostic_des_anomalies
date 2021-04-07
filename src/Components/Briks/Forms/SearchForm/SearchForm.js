import React from 'react';
import { Input } from 'antd';
import { UpSquareOutlined, SearchOutlined } from '@ant-design/icons';

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

  return (
    <Input
      style={{padding:'10px'}}
      placeholder="Search..."
      allowClear
      size="large"
      suffix={suffix}
      prefix={prefix}
    />
  );
}

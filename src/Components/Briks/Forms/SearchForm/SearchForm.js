import React from 'react';
import { Input } from 'antd';
import { UpSquareOutlined, SearchOutlined } from '@ant-design/icons';

const suffix = (
  <a href="/private/questions/search"><UpSquareOutlined
    style={{
      fontSize: 20,
      color: "#5867dd",
    }}
  /></a>
);

const prefix = (
    <SearchOutlined
      style={{
        fontSize: 20,
        color: "#5867dd",
      }}
    />
  );

export default function SearchForm() {

  return (
    <Input
      placeholder="Search..."
      allowClear
      size="large"
      suffix={suffix}
      prefix={prefix}
    />
  );
}

import React from 'react';
import { Input } from 'antd';
import { UpSquareOutlined, SearchOutlined } from '@ant-design/icons';

const { Search } = Input;

const suffix = (
  <UpSquareOutlined
    style={{
      fontSize: 20,
      color: "#5867dd",
    }}
    onClick={()=>console.log('suffix')}
  />
);

const prefix = (
    <SearchOutlined
      style={{
        fontSize: 20,
        color: "#5867dd",
      }}
      onClick={()=>console.log('prefix')}
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

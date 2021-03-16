import React from 'react'
import { List } from 'antd';
import ItemQ from './ItemQ';

export default function ListQ({questions}) {
    return (
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 3,
        }}
        dataSource={questions}
        renderItem={(question) => <ItemQ question={question} />}
      />
    );
}

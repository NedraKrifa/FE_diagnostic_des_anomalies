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
          pageSize: 5,
          showSizeChanger:false,
        }}
        dataSource={questions}
        renderItem={(question) => <ItemQ key={question._id} question={question} />}
      />
    );
}

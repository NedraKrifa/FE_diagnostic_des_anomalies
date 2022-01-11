import React from 'react'
import { List } from 'antd';
import RedmineItem from './RedmineItem';

export default function RedmineList({questions}) {
    return (
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            //console.log(page);
          },
          pageSize: 5,
          showSizeChanger:false,
        }}
        dataSource={questions}
        renderItem={(question) => <RedmineItem key={question.id} question={question} />}
      />
    );
}
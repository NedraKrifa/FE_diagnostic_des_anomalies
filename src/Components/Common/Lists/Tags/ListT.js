import React from 'react'
import { Card, List, Tag } from 'antd';

export default function  ListTU({tags}) {
    return (
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 5,
          xxl: 4,
        }}
        style={{ marginTop: "50px" }}
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 12,
        }}
        dataSource={tags}
        renderItem={(item) => (
          <List.Item>
            <Card
              title={
                <Tag color="cyan">
                  {item.name}
                </Tag>
              }
            >
              {item.questioNumber} Questions
            </Card>
          </List.Item>
        )}
      />
    );
}

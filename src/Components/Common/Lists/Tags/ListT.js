import React from 'react'
import { Card, List, Tag } from 'antd';

const data = [
  {
    title: "javascript",
  },
  {
    title: "java",
  },
  {
    title: "mongoDB",
  },
  {
    title: "reactjs",
  },
  {
    title: "nodejs",
  },
  {
    title: "express",
  },
  {
    title: "css",
  },
  {
    title: "Title 2",
  },
  {
    title: "Title 3",
  },
  {
    title: "Title 4",
  },
  {
    title: "Title 5",
  },
  {
    title: "Title 6",
  },
  {
    title: "Title 1",
  },
  {
    title: "Title 2",
  },
  {
    title: "Title 3",
  },
  {
    title: "Title 4",
  },
  {
    title: "Title 5",
  },
  {
    title: "Title 6",
  },
  {
    title: "Title 1",
  },
  {
    title: "Title 2",
  },
  {
    title: "Title 3",
  },
  {
    title: "Title 4",
  },
  {
    title: "Title 5",
  },
  {
    title: "Title 6",
  },
];

export default function ListTU() {
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
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Card
              title={
                <Tag color="cyan">
                  {item.title}
                </Tag>
              }
            >
              100 Questions
            </Card>
          </List.Item>
        )}
      />
    );
}

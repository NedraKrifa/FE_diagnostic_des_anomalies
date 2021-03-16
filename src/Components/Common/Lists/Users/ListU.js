import React from 'react'
import { Card, List, Avatar } from 'antd';

const data = [
  {
    title: "Nedra Krifa",
  },
  {
    title: "John Doe",
  },
  {
    title: "John Doe",
  },
  {
    title: "John Doe",
  },
  {
    title: "John Doe",
  },
  {
    title: "John Doe",
  },
  {
    title: "John Doe",
  },
  {
    title: "John Doe",
  },
  {
    title: "John Doe",
  },
  {
    title: "John Doe",
  },
  {
    title: "John Doe",
  },
  {
    title: "John Doe",
  },
  {
    title: "John Doe",
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

export default function ListU() {
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
          pageSize: 16,
        }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Card>
              <List.Item.Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title={<a href={"/"}>{item.title}</a>}
                description={<div>Created 6 hours ago</div>}
              />
            </Card>
          </List.Item>
        )}
      />
    );
}

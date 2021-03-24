import React from 'react'
import { Card, List, Avatar } from 'antd';

export default function ListU({users}) {
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
        dataSource={users}
        renderItem={(item) => (
          <List.Item>
            <Card>
              <List.Item.Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title={<a href={`/private/users/${item._id}`}>{item.username}</a>}
                description={<div>Created {item.created}</div>}
              />
            </Card>
          </List.Item>
        )}
      />
    );
}

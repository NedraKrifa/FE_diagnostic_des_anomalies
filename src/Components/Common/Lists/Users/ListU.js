import React from 'react'
import { Card, List, Avatar } from 'antd';
import { convertDate } from "../../../../Utils/Utils";

export default function ListU({users}) {
    return (
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 1,
          md: 2,
          lg: 3,
          xl: 3,
          xxl: 4,
        }}
        style={{ marginTop: "50px" }}
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 16,
          showSizeChanger:false,
        }}
        dataSource={users}
        renderItem={(item) => (
          <List.Item>
            <Card>
              <List.Item.Meta
                avatar={
                  <Avatar
                    size={45}
                    src={`https://secure.gravatar.com/avatar/${item._id}?s=164&d=identicon`}
                  />
                }
                title={
                  <a href={`/private/users/${item._id}`}><h2>{item.username}</h2></a>
                }
                description={<div>Created {convertDate(item.created)}</div>}
              />
            </Card>
          </List.Item>
        )}
      />
    );
}

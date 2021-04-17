import React from 'react'
import { Card, List, Tag } from 'antd';
import TagItem from '../../TopTags/TagItem';

export default function  ListTU({tags}) {
    return (
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 3,
          lg: 4,
          xl: 4,
          xxl: 4,
        }}
        style={{ marginTop: "50px" }}
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 12,
          showSizeChanger:false,
        }}
        dataSource={tags}
        renderItem={(item) => (
          <List.Item>
            <Card
              title={
                <TagItem
                  tag={item}
                />
              }
            >
              {item.questioNumber} {item.questioNumber > 1 ? 'Questions' : 'Question'}
            </Card>
          </List.Item>
        )}
      />
    );
}

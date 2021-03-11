import React from 'react'
import { Card, Tag } from 'antd';

export default function TopTags({data}) {
    return (
      <Card title="Popular Tags">
        {data.map((tag, i) => (
          <Tag color="cyan" key={i} style={{ marginBottom: "10px" }}>
            {tag}
          </Tag>
        ))}
      </Card>
    );
}

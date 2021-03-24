import React from 'react'
import { Card, Tag } from 'antd';
import { useSelector } from "react-redux";

export default function TopTags() {
  const tags = useSelector((state) => state.tags.tags);
    return (
      <Card title="Popular Tags">
        {tags.map((tag, i) => (
          <Tag color="cyan" key={i} style={{ marginBottom: "10px" }}>
            <a href={`/private/tags/${tag._id}`} style={{ color: "#08979c" }}>
              {tag.name}
            </a>
          </Tag>
        ))}
      </Card>
    );
}

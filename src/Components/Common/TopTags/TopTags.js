import React from 'react'
import { Card } from 'antd';
import { useSelector } from "react-redux";
import TagItem from './TagItem';

export default function TopTags() {
  const tags = useSelector((state) => state.tags.tags);
    return (
      <Card
        style={{
          marginRight:'20px',
          borderRadius: "5px",
          border: "1px solid #d6d9dc",
          background: "#e1e1ef49",
          boxShadow: "0px 0px 16px rgba(88, 103, 221, 0.2)",
        }}
        title={<h2>Popular Tags</h2>}
      >
        {tags.map((tag, i) => (
          <TagItem
            key={i}
            tag={tag}
            style={{
              marginBottom: "10px",
              marginTop: "10px",
            }}
          />
        ))}
      </Card>
    );
}

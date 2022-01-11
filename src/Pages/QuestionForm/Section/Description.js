import React from 'react'
import { Card, Typography, Space } from 'antd';
const { Text, Link } = Typography;

export default function Description() {
    return (
      <Card title="Asking a good question">
        <p>
          You’re ready to ask your first programming-related question and the
          community is here to help! To get you the best answers, we’ve provided
          some guidance:
        </p>
        <p>
          Before you post,
          <Link href="/" target="_blank" style={{margin:'0px 5px'}}>
            search the site
          </Link>
          to make sure your question hasn’t been answered.
        </p>
        <Space direction="vertical">
          <Text>1. Summarize the problem</Text>
          <Text>2. Describe what you’ve tried</Text>
          <Text>3. When appropriate, show some code</Text>
        </Space>
      </Card>
    );
}

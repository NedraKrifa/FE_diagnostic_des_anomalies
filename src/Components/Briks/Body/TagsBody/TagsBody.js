import React from 'react'
import { useSelector } from "react-redux";
import { Input, Row, Col } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import ListT from '../../../Common/Lists/Tags/ListT';
import TagsFilter from '../../../Common/Menu/FilterMenu/TagsFilter/TagsFilter';

const prefix = (
    <SearchOutlined
      style={{
        fontSize: 20,
        color: "#5867dd",
      }}
      onClick={()=>console.log('prefix')}
    />
  );

export default function TagsBody() {
  const tags = useSelector((state) => state.tags.tags);
    return (
      <>
        <div style={{ marginBottom: "30px" }}>
          <h1>Tags</h1>
          <p>
            A tag is a keyword or label that categorizes your question with
            other, similar questions. Using the right tags makes it easier for
            others to find and answer your question.
          </p>
        </div>
        <Row justify="space-between">
          <Col>
            <Input
              placeholder="Filter by tag name..."
              allowClear
              size="large"
              prefix={prefix}
              style={{ width: 250 }}
            />
          </Col>
          <Col>
            <TagsFilter />
          </Col>
        </Row>
        <ListT tags={tags}/>
      </>
    );
}

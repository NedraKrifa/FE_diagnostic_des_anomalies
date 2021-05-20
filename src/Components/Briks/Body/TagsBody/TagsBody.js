import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Input, Row, Col } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import ListT from '../../../Common/Lists/Tags/ListT';
import TagsFilter from '../../../Common/Menu/FilterMenu/TagsFilter/TagsFilter';
import { TitleH1 } from '../../../../App.styled';
import { getSearchTags } from '../../../../Redux/actions/Tags/tagsActions';

const prefix = (
    <SearchOutlined
      style={{
        fontSize: 30,
        color: "#5867dd",
      }}
    />
  );

export default function TagsBody() {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const enterSearch = () => {
    dispatch(getSearchTags(value));
  };
  const tags = useSelector((state) => state.tags.tags);
    return (
      <>
        <div style={{ marginBottom: "30px" }}>
          <TitleH1>Tags</TitleH1>
          <p style={{fontSize:"1.2rem"}}>
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
              style={{ width: 250, padding:'10px' }}
              onChange={onChange}
              onPressEnter={enterSearch}
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

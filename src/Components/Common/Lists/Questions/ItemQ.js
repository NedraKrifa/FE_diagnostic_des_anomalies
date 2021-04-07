import React from 'react';
import { convertDate } from "../../../../Utils/Utils";
import { List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import {BodyContainer} from './ListQ.styled';
import TagItem from '../../TopTags/TagItem';
import { QuestionItem } from "./ListQ.styled";

const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

export default function ItemQ({question}) {
    return (
      <QuestionItem
        key={question._id}
        actions={[
          <IconText
            icon={LikeOutlined}
            text="156"
            key="list-vertical-vote-o"
          />,
          <IconText
            icon={QuestionCircleOutlined}
            text="4"
            key="list-vertical-answer-o"
          />,
          <IconText
            icon={MessageOutlined}
            text="2"
            key="list-vertical-comment"
          />,
        ]}
      >
        <List.Item.Meta
          avatar={
            <Avatar
              size={45}
              src={`https://secure.gravatar.com/avatar/${question.author._id}?s=164&d=identicon`}
            />
          }
          title={
            <a href={`/private/questions/question/${question._id}`} style={{fontSize:"25px"}}>
              {question.title}
            </a>
          }
          description={
            <div>
              Asked by
              <a style={{ margin: "0px 5px" }} href={`/private/users/${question.author._id}`}>
                {question.author.username}
              </a>
              {convertDate(question.created)}
            </div>
          }
        />
        <BodyContainer>{question.body}</BodyContainer>
        {question.tags.map((tag, i) => (
          <TagItem
            without
            style={{
              marginBottom: "10px",
              marginTop: "10px",
            }}
            tag={tag}
          />
        ))}
      </QuestionItem>
    );
}

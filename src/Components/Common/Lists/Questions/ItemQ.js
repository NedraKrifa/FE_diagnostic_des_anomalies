import React from 'react';
import { convertDate } from "../../../../Utils/Utils";
import { List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import {BodyContainer, QuestionItem} from './ListQ.styled';
import TagItem from '../../TopTags/TagItem';

const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

export default function ItemQ({question}) {
    return (
      <QuestionItem
        actions={[
          <IconText
            icon={LikeOutlined}
            text={question.vote}
            key="list-vertical-vote-o"
          />,
          <IconText
            icon={QuestionCircleOutlined}
            text={question.answers ? question.answers.length : 0}
            key="list-vertical-answer-o"
          />,
          <IconText
            icon={MessageOutlined}
            text={question.comments ? question.comments.length : 0}
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
            <a
              href={`/private/questions/question/${question._id}`}
              style={{ fontSize: "25px" }}
            >
              {question.title}
            </a>
          }
          description={
            <div>
              Asked by
              <a
                style={{ margin: "0px 5px" }}
                href={`/private/users/${question.author._id}`}
              >
                {question.author.username}
              </a>
              {convertDate(question.created)}
            </div>
          }
        />
        <BodyContainer>{question.body}</BodyContainer>
        {question.tags
          ? question.tags.map((tag, i) => (
              <TagItem
                key={i}
                style={{
                  marginBottom: "10px",
                  marginTop: "10px",
                }}
                tag={tag}
              />
            ))
          : ""}
      </QuestionItem>
    );
}

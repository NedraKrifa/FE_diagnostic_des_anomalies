import React from 'react';
import { convertDate } from "../../../../Utils/Utils";
import { List, Avatar, Space, Tag } from 'antd';
import { MessageOutlined, LikeOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import {BodyContainer} from './ListQ.styled';


const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

export default function ItemQ({question}) {
    return (
      <List.Item
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
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          title={<a href={`/private/questions/question/${question._id}`}>{question.title}</a>}
          description={
            <div>
              Asked by
              <a style={{ margin: "0px 5px" }} href={"/"}>
                {question.author}
              </a>
              {convertDate(question.created)}
            </div>
          }
        />
        <BodyContainer>{question.body}</BodyContainer>
        {question.tags.map((tag, i) => (
          <Tag color="cyan" key={i} style={{ marginBottom: "10px" }}>
            {tag}
          </Tag>
        ))}
      </List.Item>
    );
}

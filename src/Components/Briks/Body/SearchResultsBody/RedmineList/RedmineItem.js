import React from 'react';
import { List, Avatar } from 'antd';
import {BodyContainer, QuestionItem} from '../../../../Common/Lists/Questions/ListQ.styled';
import TagItem from '../../../../Common/TopTags/TagItem';
import { convertDate } from "../../../../../Utils/Utils";

export default function RedmineItem({question}) {
    return (
      <QuestionItem>
        <List.Item.Meta
          avatar={
            <Avatar
              size={45}
              src={`https://secure.gravatar.com/avatar/${question.author._id}?s=164&d=identicon`}
            />
          }
          title={<div style={{ fontSize: "25px" }}>{question.subject}</div>}
          description={
            <div>
              <div>
                created by {question.author.name} on{" "}
                {convertDate(question.created_on)}
              </div>
              <div>
                  assigned to {question.assigned_to.name}
              </div>
            </div>
          }
        />
        <BodyContainer>{question.description}</BodyContainer>
        <div>Project: {question.project.name}</div>
        {[question.tracker, question.status, question.priority].map(
          (tag, i) => (
            <TagItem
              key={i}
              style={{
                marginBottom: "10px",
                marginTop: "10px",
              }}
              tag={tag}
            />
          )
        )}
      </QuestionItem>
    );
}
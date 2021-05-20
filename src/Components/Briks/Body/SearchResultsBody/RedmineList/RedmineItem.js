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
              src={`https://secure.gravatar.com/avatar/${question.id}?s=164&d=identicon`}
            />
          }
          title={
            <a
              href={`https://pmstaging.proxym-group.net/issues/${question.id}`}
              style={{ fontSize: "25px" }}
              target="_blank"
              rel="noreferrer"
            >
              {question.subject}
            </a>
          }
          description={
            <div style={{ fontSize: "16px" }}>
              <div>
                created by {question.author ? question.author.name : ''} on{" "}
                {convertDate(question.created_on)}
              </div>
              <div>assigned to {question.assigned_to ? question.assigned_to.name : ''}</div>
            </div>
          }
        />
        <BodyContainer>{question.description}</BodyContainer>
        <div style={{ fontSize: "18px" }}>
          Project:{" "}
          <a
            href={`https://pmstaging.proxym-group.net/projects/${question.project.id}`}
            target="_blank"
            rel="noreferrer"
          >
            {question.project.name}
          </a>
        </div>
        {[question.tracker, question.status, question.priority].map(
          (tag, i) => (
            <TagItem
              key={i}
              style={{
                marginBottom: "10px",
                marginTop: "10px",
              }}
              tag={tag}
              without
            />
          )
        )}
      </QuestionItem>
    );
}
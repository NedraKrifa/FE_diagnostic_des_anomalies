import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { convertDate } from "../../../../Utils/Utils";
import { List, Avatar, Space, Button, Row, Modal, Input } from 'antd';
import { MessageOutlined, LikeOutlined, QuestionCircleOutlined,StopOutlined, CheckCircleOutlined } from '@ant-design/icons';
import {BodyContainer, QuestionItem} from './ListQ.styled';
import TagItem from '../../TopTags/TagItem';
import { updateBlockedQuestion } from "../../../../Redux/actions/Questions/questionsActions";

const { TextArea } = Input;
const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

export default function ItemQ({question,Moderator}) {
  const dispatch = useDispatch();
  const [blockedValue, setBlockedValue] = useState(question.blocked?question.blocked:false);
  const [modalVisible, setModalVisible] = useState(false);
  const [reason, setReason] = useState("");

  const handleChange=(event)=> {
    setReason(event.target.value);
  }
  const handleCancel=()=>{
    setModalVisible(false);
    setReason("");
  }
  const onUnblock=()=>{
    setBlockedValue(false)
    const body = {
      blocked: false,
    };
    dispatch(updateBlockedQuestion(question._id,body))
  }
  const onblock=()=>{
    setModalVisible(false);
    setBlockedValue(true)
    console.log(reason);
    const body = {
      blocked: true,
      text: reason,
    };
    dispatch(updateBlockedQuestion(question._id,body))
    setReason("");
  }

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
        {Moderator ? (
          <Row justify="end">
            {blockedValue ? (
              <Button
                type="primary"
                danger
                shape="round"
                icon={<StopOutlined />}
                size="large"
                onClick={() => onUnblock()}
              >
                blocked
              </Button>
            ) : (
              <Button
                type="primary"
                shape="round"
                icon={<CheckCircleOutlined />}
                size="large"
                onClick={() => setModalVisible(true)}
              >
                unblocked
              </Button>
            )}
          </Row>
        ) : (
          ""
        )}
        <Modal
          title="Add the reason for blocking this question"
          centered
          visible={modalVisible}
          onOk={() => onblock()}
          onCancel={() => handleCancel()}
        >
          <TextArea
            placeholder="add your reason..."
            value={reason}
            onChange={handleChange}
            rows={4}
          />
        </Modal>
      </QuestionItem>
    );
}

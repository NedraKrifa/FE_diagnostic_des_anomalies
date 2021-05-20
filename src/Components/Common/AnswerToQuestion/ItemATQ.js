import React,{ useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, List, Avatar, Divider, Button } from 'antd';
import { CaretUpFilled, CaretDownFilled, CheckCircleOutlined,CheckOutlined, StopOutlined } from '@ant-design/icons';
import CommentQuestion from '../Comments/CommentQuestion';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { upVote, downVote, getVote} from "../../../Redux/actions/Votes/votesActions";
import { updateAnswer, updateBlockedAnswer } from "../../../Redux/actions/Answers/answersActions";

const renderers = {
  code: ({language, value}) => {
    return <SyntaxHighlighter showLineNumbers style={vscDarkPlus} language={language} children={value} />
  }
}

export default function ItemATQ({value, datetime, user, answer}) {
  const dispatch = useDispatch();
  const [voteValue, setVoteValue] = useState(answer.vote?answer.vote:0);
  const [checkValue, setCheckValue] = useState(answer.checked?answer.checked:false);
  //const [blockedValue, setBlockedValue] = useState(answer.blocked?answer.blocked:false);
  const item = useSelector((state) => state.auth.user);
  const {author,checked,_id} = useSelector((state) => state.questions.question);
  const useritem =item ? item : '';
  //console.log('answervote',answer.vote);
  useEffect(
    () =>
      useritem._id && answer._id
        ? dispatch(getVote(useritem._id, answer._id))
        : null,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const votesData=useSelector((state) => state.votes.vote);
  //console.log("votesData",votesData)
  const voteStyle = useritem._id && answer._id && Object.keys(votesData).length ? votesData[answer._id+useritem._id]?.value : 0;


  const refetchVoteValue=(index)=>{
    setVoteValue(voteValue+index);
    dispatch(getVote(useritem._id,answer._id))
  }

  const increment=()=>{
    const vote={
      userId: useritem._id,
      postId: answer._id,
    }
    dispatch(upVote(vote,refetchVoteValue));
  }

  const decrement=()=>{
    const vote={
      userId: useritem._id,
      postId: answer._id,
    }
    dispatch(downVote(vote,refetchVoteValue));
  }

  const onCheck=()=>{
    setCheckValue(true);
    const body={
      questionId:_id,
      checked: true
    }
    dispatch(updateAnswer(answer._id,body))
  }

  const onUncheck=()=>{
    setCheckValue(false);
    const body={
      questionId:_id,
      checked: false
    }
    dispatch(updateAnswer(answer._id,body))
  }
/*
  const onUnblock=()=>{
    setBlockedValue(false)
    const body = {
      blocked: false,
    };
    dispatch(updateBlockedAnswer(answer._id,body))
  }
  const onblock=()=>{
    setBlockedValue(true)
    const body = {
      blocked: true,
    };
    dispatch(updateBlockedAnswer(answer._id,body))
  }*/
  
  //console.log('vote',voteValue);
  //console.log('voteStyle',voteStyle);
  //console.log('checkValue',checkValue)
    return (
      <Row>
        <Col span={4} style={{ fontSize: "50px", color: "grey" }}>
          <Row justify="center">
            <Button
              shape="circle"
              disabled={voteStyle === 1 ? true : false}
              className="button"
              icon={<CaretUpFilled style={{ fontSize: "50px" }} />}
              onClick={() => increment()}
            />
          </Row>
          <Row justify="center">{voteValue}</Row>
          <Row justify="center">
            <Button
              shape="circle"
              disabled={voteStyle === -1 ? true : false}
              className="button"
              icon={<CaretDownFilled style={{ fontSize: "50px" }} />}
              onClick={() => decrement()}
            />
          </Row>
          {author._id === useritem._id ? (
            checkValue ? (
              <Row justify="center" style={{ marginTop: "30px" }}>
                <Button
                  shape="circle"
                  className="button --active"
                  icon={<CheckOutlined style={{ fontSize: "50px" }} />}
                  onClick={() => onUncheck()}
                />
              </Row>
            ) : (
              <Row justify="center" style={{ marginTop: "30px" }}>
                <Button
                  shape="circle"
                  className="button"
                  disabled={checked}
                  icon={<CheckCircleOutlined style={{ fontSize: "50px" }} />}
                  onClick={() => onCheck()}
                />
              </Row>
            )
          ) : checkValue ? (
            <Row justify="center" style={{ marginTop: "30px" }}>
              <Button
                shape="circle"
                className="button --active"
                icon={<CheckOutlined style={{ fontSize: "50px" }} />}
              />
            </Row>
          ) : (
            ""
          )}
        </Col>
        <Col span={18}>
          <ReactMarkdown
            allowDangerousHtml
            plugins={[gfm]}
            renderers={renderers}
            children={value}
          />
          <Row justify="end">
            <List.Item
              style={{
                width: "300px",
                marginTop: "10px",
                borderRadius: "3px",
                padding: "10px",
                marginBottom: "10px",
                background: "#d1e5f1",
              }}
            >
              <List.Item.Meta
                avatar={
                  <Avatar
                    src={`https://secure.gravatar.com/avatar/${user._id}?s=164&d=identicon`}
                  />
                }
                title={
                  <a href={`/private/users/${user._id}`}>{user.username}</a>
                }
                description={
                  <div>
                    <span>Answered </span>
                    {datetime}
                  </div>
                }
              />
            </List.Item>
          </Row>
          <CommentQuestion question={answer} user={useritem} />
        </Col>
        <Divider />
      </Row>
    );
}

/*
          {useritem.role === "Moderator" ? (
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
                  onClick={() => onblock()}
                >
                  unblocked
                </Button>
              )}
            </Row>
          ) : (
            ""
          )}*/
import React,{ useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Row, Col, List, Avatar, Button } from 'antd';
import { convertDate } from "../../../../Utils/Utils";
import AskButton from '../../../Common/Buttons/AskButton/AskButton';
import { CaretUpFilled, CaretDownFilled } from '@ant-design/icons';
import CommentQuestion from '../../../Common/Comments/CommentQuestion';
import AnswerToQuestion from '../../../Common/AnswerToQuestion/AnswerToQuestion';
import TagItem from '../../../Common/TopTags/TagItem';
import { loadUser } from "../../../../Redux/actions/Auth/authActions"
import { getAnswers } from "../../../../Redux/actions/Answers/answersActions";
import { upVote, downVote, getVote} from "../../../../Redux/actions/Votes/votesActions";

const renderers = {
  code: ({language, value}) => {
    return <SyntaxHighlighter showLineNumbers style={vscDarkPlus} language={language} children={value} />
  }
}

export default function QuestionAnswerBody({question}) {
  const dispatch = useDispatch();
  const [voteValue, setVoteValue] = useState(0);
  useEffect(() => dispatch(loadUser()), [dispatch]);
  const item = useSelector((state) => state.auth.user);
  const user =item ? item : '';
  useEffect(() => dispatch(getAnswers(question._id)), [dispatch, question]);
  //console.log('questinvote',question.vote);
  useEffect(() => setVoteValue(question.vote), voteValue);
  useEffect(() =>user._id && question._id ? dispatch(getVote(user._id,question._id)) : null, voteValue);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const votesData=useSelector((state) => state.votes.vote);
  //console.log("votesData",votesData)
  const voteStyle = user._id && question._id && Object.keys(votesData).length ? votesData[question._id+user._id]?.value : 0;

  const refetchVoteValue=(index)=>{
    setVoteValue(voteValue+index);
    dispatch(getVote(user._id,question._id))
  }

  const increment=()=>{
    const vote={
      userId: user._id,
      postId: question._id,
      type: 'question'
    }
    dispatch(upVote(vote,refetchVoteValue));
  }

  const decrement=()=>{
    const vote={
      userId: user._id,
      postId: question._id,
      type: 'question'
    }
    dispatch(downVote(vote,refetchVoteValue));
  }
  //console.log('vote',voteValue);

    return (
      <>
        <Row justify="space-between" style={{ marginBottom: "25px" }}>
          <Col span={18}>
            <h1>{question.title}</h1>
          </Col>
          <Col>
            <AskButton />
          </Col>
        </Row>
        <Row>
          <Col span={4} style={{ fontSize: "50px", color: "grey" }}>
            <Row justify="center">
            <Button shape="circle" disabled={voteStyle === 1 ? true : false} className="button" icon={<CaretUpFilled style={{fontSize:"50px"}} />} onClick={()=>increment()}/>
            </Row>
            <Row justify="center">{voteValue}</Row>
            <Row justify="center">
            <Button shape="circle" disabled={voteStyle === -1 ? true : false} className="button" icon={<CaretDownFilled style={{fontSize:"50px"}} />} onClick={()=>decrement()}/>
            </Row>
          </Col>
          <Col span={18}>
            <ReactMarkdown allowDangerousHtml plugins={[gfm]} renderers={renderers} children={question.body} />
            {question.tags
              ? question.tags.map((tag, i) => (
                  <TagItem
                    without
                    tag={tag.name}
                    style={{
                      marginTop: "10px",
                    }}
                  />
                ))
              : ""}
            <Row justify='end'>
              <List.Item style={{width:'300px',marginTop:'10px',borderRadius:'3px',padding:'10px', marginBottom:'10px',background:'#d1e5f1'}}>
                <List.Item.Meta
                  avatar={
                    <Avatar src={`https://secure.gravatar.com/avatar/${question.author ? question.author._id : ""}?s=164&d=identicon`} />
                  }
                  title={<a href={`/private/users/${question.author ? question.author._id : ""}`}>{question.author ? question.author.username: ""}</a>}
                  description={
                    <div>
                      <span>Asked </span>
                      {convertDate(question.created)}
                    </div>
                  }
                />
              </List.Item>
            </Row>
            <CommentQuestion question={question} type="question" user={user}/>
          </Col>
        </Row>
        <AnswerToQuestion question={question} user={user} />
      </>
    );
}

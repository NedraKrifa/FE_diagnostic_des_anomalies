import React from "react";
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Row, Col, List, Avatar } from 'antd';
import { convertDate } from "../../../../Utils/Utils";
import AskButton from '../../../Common/Buttons/AskButton/AskButton';
import { CaretUpFilled, CaretDownFilled } from '@ant-design/icons';
import CommentQuestion from '../../../Common/Comments/CommentQuestion';
import AnswerToQuestion from '../../../Common/AnswerToQuestion/AnswerToQuestion';
import TagItem from '../../../Common/TopTags/TagItem';

const renderers = {
  code: ({language, value}) => {
    return <SyntaxHighlighter showLineNumbers style={vscDarkPlus} language={language} children={value} />
  }
}

export default function QuestionAnswerBody({question}) {
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
            <Row justify="center" style={{}}>
              <CaretUpFilled />
            </Row>
            <Row justify="center">2</Row>
            <Row justify="center">
              <CaretDownFilled />
            </Row>
          </Col>
          <Col span={18}>
            <ReactMarkdown allowDangerousHtml plugins={[gfm]} renderers={renderers} children={question.body} />
            {question.tags
              ? question.tags.map((tag, i) => (
                  <TagItem
                    without
                    tag={tag}
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
            <CommentQuestion question={question} />
          </Col>
        </Row>
        <AnswerToQuestion question={question} />
      </>
    );
}

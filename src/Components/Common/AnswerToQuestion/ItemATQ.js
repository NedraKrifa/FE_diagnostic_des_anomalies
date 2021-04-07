import React from 'react'
import { Row, Col, List, Avatar, Divider } from 'antd';
import { convertDate } from "../../../Utils/Utils";
import { CaretUpFilled, CaretDownFilled } from '@ant-design/icons';
import CommentQuestion from '../Comments/CommentQuestion';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'


const renderers = {
  code: ({language, value}) => {
    return <SyntaxHighlighter showLineNumbers style={vscDarkPlus} language={language} children={value} />
  }
}

export default function ItemATQ({value, question, datetime}) {
    return (
      <Row>
        <Col span={4} style={{ fontSize: "50px", color: "grey" }}>
          <Row justify="center" style={{}}>
            <CaretUpFilled />
          </Row>
          <Row justify="center">0</Row>
          <Row justify="center">
            <CaretDownFilled />
          </Row>
        </Col>
        <Col span={18}>
        <ReactMarkdown allowDangerousHtml plugins={[gfm]} renderers={renderers} children={value} />
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
                    src={`https://secure.gravatar.com/avatar/${question.author ? question.author._id : ""}?s=164&d=identicon`}
                  />
                }
                title={<a href={`/private/users/${question.author ? question.author._id : ""}`}>{question.author ? question.author.username: ""}</a>}
                description={
                  <div>
                    <span>Answered </span>
                    {datetime}
                  </div>
                }
              />
            </List.Item>
          </Row>
          <CommentQuestion question={question} />
        </Col>
        <Divider/>
      </Row>
    );
}

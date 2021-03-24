import React from 'react'
import { Row, Col } from 'antd';
import AskButton from '../../../Common/Buttons/AskButton/AskButton';
import { useSelector } from "react-redux";
import ListQ from '../../../Common/Lists/Questions/ListQ';

export default function QuestionsTagBody({tagName}) {
    const questions = useSelector((state) => state.questions.questions);
    return (
      <>
        <Row justify="space-between" style={{ marginBottom: "25px" }}>
          <Col>
            <h1>Questions tagged [ {tagName} ]</h1>
          </Col>
          <Col>
            <AskButton />
          </Col>
        </Row>
        <ListQ questions={questions} />
      </>
    );
}

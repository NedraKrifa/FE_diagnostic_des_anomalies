import React from 'react'
import { Row, Col } from 'antd';
import AskButton from '../../../Common/Buttons/AskButton/AskButton';
import { useSelector } from "react-redux";
import ListQ from '../../../Common/Lists/Questions/ListQ';
import QuestionsFilter from '../../../Common/Menu/FilterMenu/QuestionsFilter/QuestionsFilter';
import { TitleH1 } from '../../../../App.styled';

export default function QuestionsBody() {
    const questions = useSelector((state) => state.questions.questions);
    return (
      <>
        <Row justify="space-between" style={{ marginBottom: "25px" }}>
          <Col>
            <TitleH1>All Questions</TitleH1>
          </Col>
          <Col>
            <AskButton />
          </Col>
        </Row>
        <QuestionsFilter />
        <ListQ questions={questions} />
      </>
    );
}

import React from 'react'
import { Row, Col } from 'antd';
import { useSelector } from "react-redux";
import ListQ from '../../../Common/Lists/Questions/ListQ';
import { TitleH1 } from '../../../../App.styled';
import ModerationFilter from '../../../Common/Menu/FilterMenu/ModerationFilter/ModerationFilter';

export default function ModerationBody() {
    const questions = useSelector((state) => state.questions.questions);
    return (
      <>
        <Row justify="space-between" style={{ marginBottom: "25px" }}>
          <Col>
            <TitleH1>Questions List</TitleH1>
          </Col>
        </Row>
        <ModerationFilter />
        <ListQ questions={questions} Moderator/>
      </>
    );
}

import React from 'react'
import { Row, Col } from 'antd';
import AskButton from '../../../Common/Buttons/AskButton/AskButton';
import { useSelector } from "react-redux";
import ListQ from '../../../Common/Lists/Questions/ListQ';
import SearchFilterForm from '../../Forms/SearchFilterForm/SearchFilterForm';

export default function SearchResultsBody() {
    const questions = useSelector((state) => state.questions.questions);
    return (
      <>
        <Row justify="space-between" style={{ marginBottom: "25px" }}>
          <Col>
            <h1>Search Results</h1>
          </Col>
          <Col>
            <AskButton />
          </Col>
        </Row>
        <SearchFilterForm/>
        <h1>Questions</h1>
        <ListQ questions={questions} />
      </>
    );
}

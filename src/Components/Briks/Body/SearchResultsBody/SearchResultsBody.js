import React from 'react'
import { Row, Col } from 'antd';
import AskButton from '../../../Common/Buttons/AskButton/AskButton';
import { useSelector } from "react-redux";
import SearchFilterForm from '../../Forms/SearchFilterForm/SearchFilterForm';
import { TitleH1 } from '../../../../App.styled';
import SearchList from './SearchList';

export default function SearchResultsBody() {
    const questions = useSelector((state) => state.questions.questions);
    const filter = useSelector((state) => state.questions.filter);
    return (
      <>
        <Row justify="space-between" style={{ marginBottom: "25px" }}>
          <Col>
            <TitleH1>Search Results</TitleH1>
          </Col>
          <Col>
            <AskButton />
          </Col>
        </Row>
        <SearchFilterForm/>
        <h1>Questions</h1>
        <SearchList filter={filter} questions={questions}/>
      </>
    );
}

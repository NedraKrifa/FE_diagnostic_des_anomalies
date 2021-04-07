import React from 'react'
import { Row, Col } from 'antd';
import AskButton from '../../../Common/Buttons/AskButton/AskButton';
import { useSelector } from "react-redux";
import ListQ from '../../../Common/Lists/Questions/ListQ';
import { TitleH1 } from '../../../../App.styled';
import TagItem from "../../../Common/TopTags/TagItem";

export default function QuestionsTagBody({tagName}) {
    const questions = useSelector((state) => state.questions.questions);
    return (
      <>
        <Row justify="space-between" style={{ marginBottom: "25px" }}>
          <Col>
            <TitleH1>
              Questions tagged{" "}
              {
                <TagItem
                  without
                  tag={tagName}
                />
              }{" "}
            </TitleH1>
          </Col>
          <Col>
            <AskButton />
          </Col>
        </Row>
        <ListQ questions={questions} />
      </>
    );
}

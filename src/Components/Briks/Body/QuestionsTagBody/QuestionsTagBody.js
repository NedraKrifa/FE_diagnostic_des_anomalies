import React,{useEffect} from 'react'
import { Row, Col } from 'antd';
import AskButton from '../../../Common/Buttons/AskButton/AskButton';
import { useDispatch,useSelector } from "react-redux";
import ListQ from '../../../Common/Lists/Questions/ListQ';
import { TitleH1 } from '../../../../App.styled';
import TagItem from "../../../Common/TopTags/TagItem";
import { getTagQuestions } from "../../../../Redux/actions/Questions/questionsActions";

export default function QuestionsTagBody({tag}) {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getTagQuestions(tag._id,tag.name)), [tag,dispatch]);
    const questions = useSelector((state) => state.questions.questions);
    return (
      <>
        <Row justify="space-between" style={{ marginBottom: "25px" }}>
          <Col>
            <TitleH1>
              Questions tagged{" "}
              {
                <TagItem
                  tag={tag}
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

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getQuestion } from "../../Redux/actions/Questions/questionsActions";
import QuestionAnswerBody from '../../Components/Briks/Body/QuestionAnswerBody/QuestionAnswerBody';
import AppLayout from '../../Layouts/AppLayout';

export default function QuestionAnswer() {
    let { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => dispatch(getQuestion(id)), [id,dispatch]);
    const question = useSelector((state) => state.questions.question);
    return (
      <div>
        <AppLayout isPTags>
          <QuestionAnswerBody question={question} />
        </AppLayout>
      </div>
    );
}

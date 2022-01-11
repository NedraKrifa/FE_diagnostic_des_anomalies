import React, { useEffect } from 'react'
import AppLayout from '../../Layouts/AppLayout';
import QuestionsBody from '../../Components/Briks/Body/QuestionsBody/QuestionsBody';
import { useDispatch } from "react-redux";
import { getQuestions } from "../../Redux/actions/Questions/questionsActions";

export default function QuestionsList() {
    const dispatch = useDispatch();
    useEffect(() => dispatch(getQuestions()), [dispatch]);
    return (
        <div>
            <AppLayout isPTags>
                <QuestionsBody/>
            </AppLayout>
        </div>
    )
}

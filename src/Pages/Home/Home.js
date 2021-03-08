import React, { useEffect } from 'react'
import LogoutButton from '../../Components/Common/Buttons/LogoutButton/LogoutButton'
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import AskButton from '../../Components/Common/Buttons/AskButton/AskButton';
import { loadUser } from '../../Redux/actions/Auth/authActions';
import { getQuestions } from "../../Redux/actions/Questions/questionsActions";

export default function Home() {
    const dispatch = useDispatch();
    useEffect(() => dispatch(loadUser()), [dispatch]);
    useEffect(() => dispatch(getQuestions()), [dispatch]);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const questions = useSelector((state) => state.questions.questions);
    if (!isAuthenticated) {
        return <Redirect to="/login" />;
    }
    return (
        <div>
            <h1>Home page</h1>
            <LogoutButton />
            <div>
                {questions.map((question) => (
                    <div key={question._id}>
                        {question.title}
                    </div>
                ))}
            </div>
            <AskButton />
        </div>
    )
}

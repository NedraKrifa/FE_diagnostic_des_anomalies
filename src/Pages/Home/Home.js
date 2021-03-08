import React from 'react'
import LogoutButton from '../../Components/Common/Buttons/Logout/LogoutButton'
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import AskButton from '../../Components/Common/Buttons/AskButton/AskButton';

export default function Home() {
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

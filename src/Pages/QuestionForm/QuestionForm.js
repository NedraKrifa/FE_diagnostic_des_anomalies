import React from 'react'
import QuestionAskForm from '../../Components/Briks/Forms/QuestionAskForm/QuestionAskForm'
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Button } from 'antd';
import { Link } from "react-router-dom";

export default function QuestionForm() {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    if (!isAuthenticated) {
        return <Redirect to="/login" />;
    };
    return (
        <>
            <Link to='/'>
                <Button type="primary" shape="round" size="large" >
                    Home
                </Button>
            </Link>
            <QuestionAskForm />
        </>
    )
}

import React from 'react'
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

export default function QuestionsList() {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    if (!isAuthenticated) {
        return <Redirect to="/login" />;
    }
    return (
        <div>
            questions list
        </div>
    )
}
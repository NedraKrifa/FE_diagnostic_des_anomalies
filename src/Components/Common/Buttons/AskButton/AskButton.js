import React from 'react'
import { ButtonAsk } from './AskButton.styled';
import { Link } from "react-router-dom";

export default function AskButton() {
    return (
        <Link to='/private/add/question'>
            <ButtonAsk size="large">
                Ask Question
            </ButtonAsk>
        </Link>
    )
}
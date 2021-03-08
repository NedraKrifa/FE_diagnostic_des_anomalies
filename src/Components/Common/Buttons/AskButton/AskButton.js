import React from 'react'
import { Button } from 'antd';
import { Link } from "react-router-dom";

export default function AskButton() {
    return (
        <Link to='/add/question'>
            <Button type="primary" shape="round" size="large" >
                Ask Question
            </Button>
        </Link>
    )
}
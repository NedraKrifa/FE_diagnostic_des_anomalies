import React from 'react'
import AppLayout from '../../Layouts/AppLayout';
import QuestionsBody from '../../Components/Briks/Body/QuestionsBody/QuestionsBody';

export default function QuestionsList() {
    return (
        <div>
            <AppLayout isPTags>
                <QuestionsBody/>
            </AppLayout>
        </div>
    )
}

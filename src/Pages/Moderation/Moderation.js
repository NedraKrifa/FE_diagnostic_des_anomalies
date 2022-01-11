import React, { useEffect } from 'react'
import AppLayout from '../../Layouts/AppLayout';
import { useDispatch } from "react-redux";
import { getModerationQuestions } from "../../Redux/actions/Questions/questionsActions";
import ModerationBody from '../../Components/Briks/Body/ModerationBody/ModerationBody';

export default function Moderation() {
    const dispatch = useDispatch();
    useEffect(() => dispatch(getModerationQuestions()), [dispatch]);
    return (
      <div>
        <AppLayout>
          <ModerationBody/>
        </AppLayout>
      </div>
    );
}

import React, { useEffect } from 'react'
import AppLayout from '../../Layouts/AppLayout';
import HomeBody from '../../Components/Briks/Body/HomeBody/HomeBody';
import { useDispatch } from "react-redux";
import { getTopQuestions } from "../../Redux/actions/Questions/questionsActions";

export default function Home() {
  const dispatch = useDispatch();
    useEffect(() => dispatch(getTopQuestions()), [dispatch]);
    return (
      <div>
        <AppLayout isPTags>
          <HomeBody />
        </AppLayout>
      </div>
    );
}

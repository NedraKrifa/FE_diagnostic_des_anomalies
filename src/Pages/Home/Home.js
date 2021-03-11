import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { loadUser } from '../../Redux/actions/Auth/authActions';
import { getQuestions } from "../../Redux/actions/Questions/questionsActions";
import AppLayout from '../../Layouts/AppLayout';
import HomeBody from '../../Components/Briks/Body/HomeBody/HomeBody';

export default function Home() {
    const dispatch = useDispatch();
    useEffect(() => dispatch(loadUser()), [dispatch]);
    useEffect(() => dispatch(getQuestions()), [dispatch]);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    if (!isAuthenticated) {
        return <Redirect to="/login" />;
    }
    return (
      <div>
        <AppLayout>
          <HomeBody />
        </AppLayout>
      </div>
    );
}

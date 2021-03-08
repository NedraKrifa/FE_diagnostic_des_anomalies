import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import 'antd/dist/antd.css';
import './App.css';
import Routes from './Routes/Routes';
import { loadUser } from './Redux/actions/Auth/authActions';
import { getQuestions } from "./Redux/actions/Questions/questionsActions"

function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(loadUser()), []);
  useEffect(() => dispatch(getQuestions()));

  return (
    <div className='App'>
      <Routes />
    </div>
  );
}

export default App;

import React,{ useEffect } from 'react'
import 'antd/dist/antd.css';
import './App.css';
import Routes from './Routes/Routes'
import { io } from "socket.io-client";

const ENDPOINT = "http://localhost:5000";

function App() {

  useEffect(() => {
    const socket = io(ENDPOINT);
    socket.on("quantity_check", data => {
      console.log(data);
    });
  }, [ENDPOINT]);

  return <Routes />;
}

export default App;

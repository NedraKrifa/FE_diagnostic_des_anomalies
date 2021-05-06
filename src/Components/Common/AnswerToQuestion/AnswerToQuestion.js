import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Comment, Form, Button, List, Input } from 'antd';
import moment from 'moment';
import ItemATQ from './ItemATQ';
import socketIOClient from "socket.io-client";
import { AnswersList } from "../../../Utils/Utils";
import { addAnswer, getAnswers } from "../../../Redux/actions/Answers/answersActions";

const SOCKET_SERVER_URL = "http://localhost:5000";

const { TextArea } = Input;

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={<h1>{comments.length} {comments.length > 1 ? 'answers' : 'answer'}</h1>}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <div>
    <h1>Your Answer</h1>
    <Form.Item>
      <TextArea rows={6} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        Add Answer
      </Button>
    </Form.Item>
  </div>
);

export default function AnswerToQuestion({question, user}) {
    const dispatch = useDispatch();
    const {_id} = question;
    const id = _id;
    const [messages, setMessages] = useState([]);
    const [submitting, setSubmitting] = useState(false);
    const [value, setValue] = useState('');
    const socketRef = useRef();

    useEffect(() => {
      dispatch(getAnswers(_id));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, question]);
    const answers = useSelector((state) => state.answers.answers);

    useEffect(() => {
      const messagesList = AnswersList(answers);
      setMessages(messagesList);
    }, [_id,answers]);


    useEffect(() => {
      socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
        query: {id },
      });
  
      socketRef.current.on("connect", () => {
      });
  
      socketRef.current.on('NEW_CHAT_MESSAGE_EVENT', (message) => {
        const incomingMessage = {
          content: <ItemATQ value={message.body} answer={message.answer} user={message.user} datetime={moment().fromNow()} />,
          ...message,
          user,
          ownedByCurrentUser: message.senderId === socketRef.current.id,
        };
        console.log("incomingmessages",incomingMessage);
        if (user._id !== message.user._id) {setMessages((messages) => [...messages, incomingMessage]);}
      });
  
      return () => {
        socketRef.current.disconnect();
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    const handleSocketAnswer=(answerSocket)=>{
      setTimeout(() => {
        setSubmitting(false);
        setValue('');
        console.log('answer2',answerSocket)
        socketRef.current.emit('NEW_CHAT_MESSAGE_EVENT', {
          body: value,
          user:user,
          senderId: socketRef.current.id,
          answer: answerSocket,
        });
    }, 1000);
    }
    const handleSubmit = () => {
      if (!socketRef.current) return;
      setSubmitting(true);
      const answer = {
        author: { _id: user._id, username: user.username },
        body: value,
        questionId: _id,
      };
      dispatch(addAnswer(answer,handleSocketAnswer));
      };
      const handleChange = e => {
        setValue(e.target.value);
      };
    return (
      <>
        {messages.length > 0 && <CommentList comments={messages} />}
        <Comment
          style={{backgroundColor:'transparent'}}
          content={
            <Editor
              onChange={handleChange}
              onSubmit={handleSubmit}
              submitting={submitting}
              value={value}
            />
          }
        />
      </>
    );
}

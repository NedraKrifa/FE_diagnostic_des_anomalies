import React, { useState, useEffect, useRef } from 'react'
import { useDispatch } from "react-redux";
import { addComment } from "../../../Redux/actions/Comments/commentsActions";
import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import moment from 'moment';
import socketIOClient from "socket.io-client";
import { CommentsList } from "../../../Utils/Utils";

const SOCKET_SERVER_URL = "http://localhost:5000";

const { TextArea } = Input;

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea rows={2} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        Add Comment
      </Button>
    </Form.Item>
  </>
);

export default function CommentQuestion({question, user, type}) {
    const dispatch = useDispatch();
    const {_id} = question;
    const id = _id + (type ? type : "");
    const [messages, setMessages] = useState([]);
    const [submitting, setSubmitting] = useState(false);
    const [value, setValue] = useState('');
    const socketRef = useRef();

    useEffect(() => {
      const messagesList = CommentsList(question.comments);
      setMessages(messagesList);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [_id]);

    useEffect(() => {
      socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
        query: {id},
      });
  
      socketRef.current.on("connect", () => {
      });
  
      socketRef.current.on('NEW_CHAT_MESSAGE_EVENT', (message) => {
        const incomingMessage = {
          author: message.user.username,
          avatar: `https://secure.gravatar.com/avatar/${message.user._id}?s=164&d=identicon`,
          content: <p>{message.body}</p>,
          datetime: moment().fromNow(),
          ...message,
          user,
          ownedByCurrentUser: message.senderId === socketRef.current.id,
        };
        setMessages((messages) => [...messages, incomingMessage]);
      });
  
      return () => {
        socketRef.current.disconnect();
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);


    const handleSubmit = () => {
      if (!socketRef.current) return;
      setSubmitting(true);
      const comment = {
        author: { _id: user._id, username: user.username },
        body: value,
        postId: _id,
        type: type
      };
      dispatch(addComment(comment)); 
      setTimeout(() => {
        setSubmitting(false);
        setValue('');
        socketRef.current.emit('NEW_CHAT_MESSAGE_EVENT', {
          body: value,
          user:user,
          senderId: socketRef.current.id,
        });
    }, 1000);
      };
      const handleChange = e => {
        setValue(e.target.value);
      };
    return (
      <>
        {messages.length > 0 && <CommentList comments={messages} />}
        <Comment
          avatar={
            <Avatar
              src={`https://secure.gravatar.com/avatar/${user._id}?s=164&d=identicon`}
              alt={user.username}
            />
          }
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

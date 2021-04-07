import React, { useState } from 'react'
import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import moment from 'moment';
import ItemATQ from './ItemATQ';

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

export default function AnswerToQuestion({question}) {
    const [comments, setComments] = useState([]);
    const [submitting, setSubmitting] = useState(false);
    const [value, setValue] = useState('');

    const handleSubmit = () => {
        if (!value) {
          return;
        }
    
        setSubmitting(true);
    
        setTimeout(() => {
            setSubmitting(false);
            setValue('');
            setComments([
              ...comments,
              {
                content: <ItemATQ value={value} question={question} datetime={moment().fromNow()} />
              },
            ]);
        }, 1000);
      };
      const handleChange = e => {
        setValue(e.target.value);
      };

    return (
      <>
        {comments.length > 0 && <CommentList comments={comments} />}
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

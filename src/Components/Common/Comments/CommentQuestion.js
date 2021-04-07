import React, { useState } from 'react'
import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import moment from 'moment';

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

export default function Question({question}) {
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
                author: question.author.username,
                avatar: `https://secure.gravatar.com/avatar/${question.author ? question.author._id : ""}?s=164&d=identicon`,
                content: <p>{value}</p>,
                datetime: moment().fromNow(),
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
          avatar={
            <Avatar
              src={`https://secure.gravatar.com/avatar/${question.author ? question.author._id : ""}?s=164&d=identicon`}
              alt={question.author}
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

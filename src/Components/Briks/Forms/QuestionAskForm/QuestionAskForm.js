import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addQuestion } from '../../../../Redux/actions/Questions/questionsActions'
import {
    Form,
    Input,
    Button,
    Select
  } from 'antd';
  import {FormQ, ButtonQ} from "./QuestionAskForm.styled";

  const { TextArea } = Input;
  const { Option } = Select;

  const tailLayout = {
    wrapperCol: { span: 4 },
  };

export default function QuestionAskForm() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    const [form] = Form.useForm();

    const onFinish = (values) => {
      console.log('Received values of form: ', values);
      const question = {
          author: user.username,
          title: values.title,
          body: values.description,
          tags: values.tags
      }
      dispatch(addQuestion(question));
    };

    return (
      <FormQ
        form={form}
        layout="vertical"
        name="AskQuestion"
        onFinish={onFinish}
        scrollToFirstError
      >
        <Form.Item
          name="title"
          label="Title"
          rules={[
            {
              required: true,
              message: "Please input your title!",
            },
          ]}
          hasFeedback
        >
          <Input allowClear placeholder="enter your Question title" />
        </Form.Item>

        <Form.Item style={{ marginTop: "-10px" }}>
          <span>
            Be specific and imagine you’re asking a question to another person
          </span>
        </Form.Item>

        <Form.Item
          name="description"
          label="Description"
          rules={[
            {
              required: true,
              message: "Please input your question description!",
            },
          ]}
          hasFeedback
        >
          <TextArea
            allowClear
            rows={14}
            showCount
            maxLength={5000}
            placeholder="enter your description"
          />
        </Form.Item>

        <Form.Item style={{ marginTop: "-10px" }}>
          <span>
            Include all the information someone would need to answer your
            question
          </span>
        </Form.Item>

        <Form.Item
          name="tags"
          label="Tags"
          rules={[
            {
              required: true,
              message: "Please input at least one tag!",
            },
          ]}
          hasFeedback
        >
          <Select
            mode="tags"
            allowClear
            style={{ width: "100%", color: "darkcyan" }}
            placeholder="enter a tag"
          >
            {["java", "javascript", "php", "c"].map((tag, i) => {
              return <Option key={i}>{tag}</Option>;
            })}
          </Select>
        </Form.Item>

        <Form.Item style={{ marginTop: "-10px" }}>
          <span>Add up to 5 tags to describe what your question is about</span>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <ButtonQ
            htmlType="submit"
            block
            size="large"
          >
            Post your question
          </ButtonQ>
        </Form.Item>
      </FormQ>
    );
}

import React, { useState, useEffect} from 'react';
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../../../Redux/actions/Auth/authActions";
import {
    Form,
    Input,
    Button,
    Alert,
  } from 'antd';
  import { isAuthenticated } from "../../../../Utils/Utils"


export default function LoginForm() {
    const dispatch = useDispatch();
    const error = useSelector((state) => state.error);
    const isAuthenticatedd = useSelector((state) => state.auth.isAuthenticated);
    const [msg, setMsg] = useState(null);
    const [form] = Form.useForm();

    const onFinish = (values) => {
      console.log('Received values of form: ', values);
      dispatch(login(values));
    };

    useEffect(() => {
        if (error.id === "LOGIN_FAIL") {
          setMsg(error.msg);
        } else {
          setMsg(null);
        }
      }, [error, isAuthenticatedd]);
    
    if (isAuthenticated()) {
        return <Redirect to="/private" />;
    }
  
    return (
      <Form
        form={form}
        layout="vertical"
        name="login"
        onFinish={onFinish}
        scrollToFirstError
        style={{ padding: " 50px 100px" }}
      >
        <Form.Item>
          <h1 style={{ textAlign: "center" }}>
            Login to your <span style={{ color: "#562ad5" }}>Account</span>
          </h1>
        </Form.Item>

        {msg ? (
          <Form.Item>
            <Alert message={msg} type="error" />
          </Form.Item>
        ) : null}

        <Form.Item
          name="username"
          label="Username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
          hasFeedback
        >
          <Input allowClear size="large" placeholder="Enter Your Username" />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password allowClear size="large" placeholder="Enter Your Password" />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            shape="round"
            size="large"
            style={{ backgroundColor: "#562ad5", border: "none" }}
          >
            Login
          </Button>
        </Form.Item>
      </Form>
    );
}

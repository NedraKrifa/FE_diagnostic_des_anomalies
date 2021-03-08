import React, { useState, useEffect} from 'react';
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../../../Redux/actions/Auth/authActions";
import {
    Form,
    Input,
    Button,
    Alert
  } from 'antd';

  /*
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 8 },
  };
  const tailLayout = {
    wrapperCol: { offset: 3, span: 2 },
  };
*/

export default function LoginForm() {
    const dispatch = useDispatch();
    const error = useSelector((state) => state.error);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
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
      }, [error, isAuthenticated]);
    
    if (isAuthenticated) {
        return <Redirect to="/" />;
    }
  
    return (
        <Form
            form={form}
            layout="vertical"
            name="login"
            onFinish={onFinish}
            scrollToFirstError
            style={{border:'1px solid grey',padding:'20px',borderRadius:'10px',backgroundColor:'#fff'}}
            >
            <Form.Item>
                <h1 style={{textAlign:'center'}} >Login to your <span style={{color:'#562ad5'}}>Account</span></h1>
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
                    message: 'Please input your Username!',
                },
                ]}
                hasFeedback
            >
                <Input allowClear placeholder="Enter Your Username"/>
            </Form.Item>

            <Form.Item
                name="password"
                label="Password"
                rules={[
                {
                    required: true,
                    message: 'Please input your password!',
                },
                ]}
                hasFeedback
            >
                <Input.Password allowClear placeholder="Enter Your Password"/>
            </Form.Item>
    
            <Form.Item>
                <Button type="primary" htmlType="submit" block shape="round" size="large" style={{backgroundColor:'#562ad5', borderColor:'#562ad5'}}>
                Login
                </Button>
            </Form.Item>

        </Form>

    )
}

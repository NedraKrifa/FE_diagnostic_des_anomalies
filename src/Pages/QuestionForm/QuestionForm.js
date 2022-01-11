import React from 'react'
import QuestionAskForm from '../../Components/Briks/Forms/QuestionAskForm/QuestionAskForm'
import { Col, Alert } from 'antd';
import Description from './Section/Description';
import AppHeader from '../../Components/Common/Header/AppHeader';
import { QFCol,QFDivider,QFRow} from './QuestionForm.styled';
import { useSelector } from "react-redux";

export default function QuestionForm() {
  const error = useSelector((state) => state.error);

    return (
      <>
        <AppHeader />
        {error.status ? <Alert style={{margin:'20px 500px'}} message={error.msg} type="error" showIcon closable /> : null}
        <QFRow justify="space-around">
          <Col span={18}>
            <QFDivider orientation="left">
              <h1>Ask a public question</h1>
            </QFDivider>
            <QuestionAskForm />
          </Col>
          <QFCol span={5}>
            <Description />
          </QFCol>
        </QFRow>
      </>
    );
}

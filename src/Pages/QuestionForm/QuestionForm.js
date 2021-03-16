import React from 'react'
import QuestionAskForm from '../../Components/Briks/Forms/QuestionAskForm/QuestionAskForm'
import { Col } from 'antd';
import Description from './Section/Description';
import AppHeader from '../../Components/Common/Header/AppHeader';
import { QFCol,QFDivider,QFRow} from './QuestionForm.styled';


export default function QuestionForm() {
    return (
      <>
        <AppHeader />
        <QFRow justify="space-around">
          <Col span={18}>
            <QFDivider orientation="left"><h1>Ask a public question</h1></QFDivider>
            <QuestionAskForm />
          </Col>
          <QFCol span={5}>
            <Description />
          </QFCol>
        </QFRow>
      </>
    );
}

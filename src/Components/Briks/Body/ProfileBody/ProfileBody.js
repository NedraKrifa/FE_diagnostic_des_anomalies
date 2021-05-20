import React,{useEffect} from 'react'
import { Row, Col, Avatar, List, Divider } from 'antd';
import { convertDate } from "../../../../Utils/Utils";
import { useDispatch,useSelector } from "react-redux";
import { getUserQuestions } from "../../../../Redux/actions/Questions/questionsActions";
import ItemQ from '../../../Common/Lists/Questions/ItemQ';

export default function ProfileBody({user}) {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getUserQuestions(user._id,user.username)), [user,dispatch]);
    const questions = useSelector((state) => state.questions.questions);
    return (
      <div style={{ margin: "40px" }}>
        <h1
          style={{
            marginBottom: "-20px",
            color: "#484848",
            fontSize: "2.2rem",
          }}
        >
          {user.username}
        </h1>
        <Divider style={{ border: "1px solid #5867dd" }} />
        <Row
          style={{ marginBottom: "50px" }}
        >
          <Col>
            <Avatar
              shape="square"
              size={200}
              src={`https://secure.gravatar.com/avatar/${user._id}?s=164&d=identicon`}
            />
          </Col>
          <Col style={{ marginTop: "20px",marginLeft:"20px" }}>
            <h3 style={{ color: "#484848" }}>Email: {user.email}</h3>
            <h3 style={{ color: "#484848" }}>Role: {user.role}</h3>
            <h3 style={{ color: "#484848" }}>
              Created: {convertDate(user.created)}
            </h3>
          </Col>
        </Row>
        <List
          itemLayout="vertical"
          size="large"
          header={<h1>Questions</h1>}
          pagination={{
            onChange: (page) => {
              //console.log(page);
            },
            pageSize: 6,
          }}
          dataSource={questions}
          renderItem={(item, i) => <ItemQ key={item._id} question={item} />}
        />
      </div>
    );
}

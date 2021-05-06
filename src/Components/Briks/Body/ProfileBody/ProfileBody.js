import React,{useEffect} from 'react'
import { Row, Col, Avatar, List, Typography, Divider } from 'antd';
import { convertDate } from "../../../../Utils/Utils";
import { useDispatch,useSelector } from "react-redux";
import { getUserQuestions } from "../../../../Redux/actions/Questions/questionsActions";

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
          justify="space-between"
          style={{ marginBottom: "50px", width: "50%" }}
        >
          <Col>
            <Avatar
              shape="square"
              size={200}
              src={`https://secure.gravatar.com/avatar/${user._id}?s=164&d=identicon`}
            />
          </Col>
          <Col style={{ marginTop: "20px" }}>
            <h3 style={{ color: "#484848" }}>Email: {user.email}</h3>
            <h3 style={{ color: "#484848" }}>Role: {user.role}</h3>
            <h3 style={{ color: "#484848" }}>
              Created: {convertDate(user.created)}
            </h3>
          </Col>
        </Row>
        <List
          header={<h1>Questions</h1>}
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 6,
          }}
          dataSource={questions}
          renderItem={(item, i) => (
            <List.Item style={{ marginLeft: "80px",fontSize: "18px", display:'flex',justifyContent:'flex-start' }}>
              <Typography.Text code>{i}</Typography.Text>
              <a
                href={`/private/questions/question/${item._id}`}
                style={{ color:"black",marginLeft: "10px" }}
              >
                {item.title}
              </a>
            </List.Item>
          )}
        />
      </div>
    );
}

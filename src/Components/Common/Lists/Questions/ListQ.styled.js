import styled from "styled-components";
import { List } from "antd";

export const QuestionItem = styled(List.Item)`
  border-bottom: none !important;
  padding: 30px !important;
  background: white !important;
  border-radius: 5px;
  margin-bottom: 25px;
  box-shadow: 0px 0px 13px 0px rgba(82, 63, 105, 0.05);
  :hover{
    box-shadow: 0px 0px 13px 0px rgba(82, 63, 105, 0.15);
  }
`;

export const BodyContainer = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 10px;
  font-size: 16px;
`;
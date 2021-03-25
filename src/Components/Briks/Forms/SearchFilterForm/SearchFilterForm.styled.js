import styled from "styled-components";
import { Form,Button } from "antd";

export const FormSF = styled(Form)`
border: 1px solid rgba(0, 0, 0, 0.06);
padding: 20px;
margin-bottom: 40px;
`;

export const ButtonSF = styled(Button)`
  background-color: rgba(253, 57, 122, 0.1);
  border-color: rgba(253, 57, 122, 0.1);
  color: #fd397a;
  :hover {
    background-color: #fd397a;
    border-color: #fd397a;
    color: white;
  }
`;
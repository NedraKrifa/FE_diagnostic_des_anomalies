import styled, { css } from "styled-components";
import { Row, Col } from "antd";
import imageLogin from "../../Assets/default.png";

export const LoginRow = styled(Row)`
  height: 100vh;
  background-color: rgba(88, 103, 221, 0.1);
`;

export const LoginCol = styled(Col)`
  box-shadow: -1px 1px 19px 1px rgba(70, 10, 73, 0.51);
  -webkit-box-shadow: -1px 1px 19px 1px rgba(70, 10, 73, 0.51);
  -moz-box-shadow: -1px 1px 19px 1px rgba(70, 10, 73, 0.51);
  height: 45rem;
  background-color: ${(props) => (props.default ? "#fff" : "none")};
  ${(props) =>
    !props.default &&
    css`
      background: url(${imageLogin}) no-repeat center center fixed;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
    `}
`;

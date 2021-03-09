import styled, { css } from "styled-components";
import { Row, Col, Divider } from "antd";
import imageQF from "../../Assets/web.jpg";

export const QFRow = styled(Row)`
  padding: 20px;
  margin-top: 50px;
`;

export const QFCol = styled(Col)`
  background: url(${imageQF}) no-repeat bottom;
`;

export const QFDivider = styled(Divider)`
  border-color: rgb(179, 179, 179) !important;
  h1{
    color: rgb(56, 55, 55);
  }
`;
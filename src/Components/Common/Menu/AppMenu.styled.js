import styled, { css } from "styled-components";
import { Menu } from 'antd';

const{ Item } = Menu;

export const MenuItem = styled(Item)`
  &:hover {
    color: #5867dd;
  }
  ${(props) =>
    props.selected === "selected" &&
    css`
      color: #5867dd;
      background-color: rgba(88, 103, 221, 0.1) !important;
      ::after {
        border-right: 3px solid #5867dd !important;
      }
      &:hover {
        color: #5867dd;
      }
    `}
`;

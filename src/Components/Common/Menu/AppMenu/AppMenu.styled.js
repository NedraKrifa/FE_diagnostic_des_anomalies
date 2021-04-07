import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  width: 340px;
  box-sizing: border-box;
  font-variant: tabular-nums;
  font-feature-settings: "tnum", "tnum";
  color: rgba(0, 0, 0, 0.85);
  font-size: 20px;
  background: #fff;
  transition: background 0.3s, width 0.3s cubic-bezier(0.2, 0, 0, 1) 0s;
`;

export const ItemGroup = styled.div`
  height: 1.5715;
  padding: 8px 16px;
  color: rgba(0, 0, 0, 0.45);
  font-size: 16px;
  line-height: 1.5715;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
`;

export const Item = styled(NavLink)`
  margin-bottom: 20px;
  width: calc(100% + 0.5px);
  height: 60px;
  line-height: 60px;
  padding: 0 16px 0 28px;
  color: rgba(0, 0, 0, 0.85);
  &:hover {
    color: #5867dd;
  }
`;

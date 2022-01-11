import React from 'react'
import { Menu, ItemGroup, Item } from "./AppMenu.styled";
import { useSelector } from "react-redux";
import { HomeOutlined,QuestionCircleOutlined,TagOutlined,UserOutlined,SettingOutlined, SolutionOutlined } from '@ant-design/icons';

export default function AppMenu() {
  const user = useSelector((state) => state.auth.user);
  const userRole= user ? user.role : "";
    return (
      <Menu>
        <Item exact activeClassName="itemselect" to="/private">
          Home <HomeOutlined style={{ marginLeft:"210px"}} />
        </Item>
        <ItemGroup>PUBLIC</ItemGroup>
        <Item activeClassName="itemselect" to="/private/questions">
          Questions <QuestionCircleOutlined style={{ marginLeft:"175px"}}/>
        </Item>
        <Item activeClassName="itemselect" to="/private/tags">
          Tags <TagOutlined style={{ marginLeft:"222px"}}/>
        </Item>
        <Item activeClassName="itemselect" to="/private/users">
          Users <UserOutlined style={{ marginLeft:"215px"}}/>
        </Item>
        {userRole === "Moderator" ? (
          <Item activeClassName="itemselect" to="/private/moderation">
            Moderation <SettingOutlined style={{ marginLeft:"163px"}}/>
          </Item>
        ) : (
          ""
        )}
        {userRole === "Administrator" ? (
          <Item activeClassName="itemselect" to="/private/administration">
            Administration <SolutionOutlined style={{ marginLeft:"135px"}} />
          </Item>
        ) : (
          ""
        )}
      </Menu>
    );
}

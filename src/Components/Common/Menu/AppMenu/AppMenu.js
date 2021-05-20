import React from 'react'
import { Menu, ItemGroup, Item } from "./AppMenu.styled";
import { useSelector } from "react-redux";

export default function AppMenu() {
  const user = useSelector((state) => state.auth.user);
  const userRole= user ? user.role : "";
    return (
      <Menu>
        <Item exact activeClassName="itemselect" to="/private">
          Home
        </Item>
        <ItemGroup>PUBLIC</ItemGroup>
        <Item activeClassName="itemselect" to="/private/questions">
          Questions
        </Item>
        <Item activeClassName="itemselect" to="/private/tags">
          Tags
        </Item>
        <Item activeClassName="itemselect" to="/private/users">
          Users
        </Item>
        {userRole === "Moderator" ? (
          <Item activeClassName="itemselect" to="/private/moderation">
            Moderation
          </Item>
        ) : (
          ""
        )}
        {userRole === "Administrator" ? (
          <Item activeClassName="itemselect" to="/private/administration">
            Administration
          </Item>
        ) : (
          ""
        )}
      </Menu>
    );
}

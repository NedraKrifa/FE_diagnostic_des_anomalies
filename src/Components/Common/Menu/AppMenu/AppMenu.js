import React from 'react'
import { Menu, ItemGroup, Item } from "./AppMenu.styled";

export default function AppMenu() {
    return (
      <Menu>
        <Item exact activeClassName='itemselect' to="/private">
          Home
        </Item>
        <ItemGroup>PUBLIC</ItemGroup>
        <Item activeClassName='itemselect' to="/private/questions">
          Questions
        </Item>
        <Item activeClassName='itemselect' to="/private/tags">
          Tags
        </Item>
        <Item activeClassName='itemselect' to="/private/users">
          Users
        </Item>
      </Menu>
    );
}

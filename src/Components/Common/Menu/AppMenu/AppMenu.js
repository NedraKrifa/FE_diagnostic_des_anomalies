import React from 'react'
import { Menu, ItemGroup, Item } from "./AppMenu.styled";

export default function AppMenu() {
    return (
      <Menu>
        <Item exact activeClassName='itemselect' to="/">
          Home
        </Item>
        <ItemGroup>PUBLIC</ItemGroup>
        <Item activeClassName='itemselect' to="/questions">
          Questions
        </Item>
        <Item activeClassName='itemselect' to="/tags">
          Tags
        </Item>
        <Item activeClassName='itemselect' to="/users">
          Users
        </Item>
      </Menu>
    );
}

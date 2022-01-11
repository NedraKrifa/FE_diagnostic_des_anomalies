import React from "react";
import { Avatar } from "antd";
import { useSelector } from "react-redux";

export default function UserAvatar() {
    const item = useSelector((state) => state.auth.user);
    const id =item ? item._id : '';
    return <a href={`/private/users/${id}`} ><Avatar size={50} src={`https://secure.gravatar.com/avatar/${id}?s=164&d=identicon`}
    alt="profile" /></a>;
}

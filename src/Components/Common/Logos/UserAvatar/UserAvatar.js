import React from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

export default function UserAvatar() {
    const item = useSelector((state) => state.auth.user);
    console.log(item);
    const id =item ? item._id : '';
    return <a href={`/private/users/${id}`} ><Avatar size="large" icon={<UserOutlined />} /></a>;
}

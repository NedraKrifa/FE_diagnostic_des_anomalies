import React from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

export default function UserAvatar() {
    return <Avatar size="large" icon={<UserOutlined />} />;
}

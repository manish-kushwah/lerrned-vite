import React, { useState } from "react";
import { Avatar, Popover, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";

const UserProfile = ({ user, onLogout }) => {
  const [visible, setVisible] = useState(false);

  const handleVisibleChange = (visible) => {
    setVisible(visible);
  };

  const handleLogout = () => {
    setVisible(false);
    onLogout();
  };

  const popoverContent = (
    <div>
      <p>Hey, {user?.username}</p>
      <Button type="link" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );

  return (
    <Popover
      content={popoverContent}
      trigger="click"
      open={visible}
      onOpenChange={handleVisibleChange}
    >
      <Avatar
        style={{ cursor: "pointer" }}
        size="large"
        icon={<UserOutlined />}
        src="https://robohash.org/64a0b12adc96597b27a6f823bdf61883?set=set3&bgset=bg1&size=400x400"
      />
    </Popover>
  );
};

export default UserProfile;

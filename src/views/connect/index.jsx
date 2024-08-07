import React, { useState } from "react";
import { Button, Card, Form, Input, Layout, Menu, message, Modal, Tooltip } from "antd";
import { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import MainHeader from "../../components/Header";
//icons
import {
  DashboardOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  VideoCameraAddOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

const Connect = () => {
  const [currentMenu, setCurrentMenu] = useState("3");
  const [collapsed, setCollapsed] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [email, setEmail] = useState("");

  const [form] = Form.useForm();

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const startVideoCall = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        setIsModalVisible(false);
        message.success(`Starting video call with ${values.email}`);
        // Implement the logic to start a video call with the provided email here
      })
      .catch((info) => {
        message.error('Validate Failed');
      });
    
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <MainHeader />
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed} theme="light">
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: "px-8 py-4 text-md cursor-pointer text-[#000000] bg-[#FFFFFF]",
            onClick: toggle,
          })}
          <Menu
            theme="light"
            mode="inline"
            onClick={(e) => {
              if (e.key == "1") {
                window.location.href = "/dashboard";
              } else if (e.key == "2") {
                window.location.href = "/profile-settings";
              } else if (e.key == "3") {
                window.location.href = "/connect";
              }
              setCurrentMenu(e.key);
            }}
            defaultSelectedKeys={["3"]}
            selectedKeys={[currentMenu]}
          >
            <Menu.Item key="1" icon={<DashboardOutlined />}>
              Dashboard
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
              Profile
            </Menu.Item>
            <Menu.Item
              key="3"
              icon={<VideoCameraOutlined />}
              onClick={() => (window.location.href = "/connect")}
            >
              Connect
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="bg-[#FFFFFF]">
          <Content style={{ margin: "24px", minHeight: 280 }}>
            <div className="grid gap-4 grid-cols-[auto_auto] justify-start items-center place-items-start">
              <Tooltip title="Start call" color="#4BADEF" key="#4BADEF" placement="bottom">
                <Card hoverable size="default" style={{ backgroundColor: "#4BADEF" }}>
                  <Button
                    type="dashed"
                    shape="circle"
                    icon={<VideoCameraOutlined />}
                    size="large"
                    onClick={startVideoCall}
                  />
                </Card>
              </Tooltip>
              <Tooltip title="Join call" color="#ffd150" key="#ffd150" placement="bottom">
                <Card hoverable size="default" style={{ backgroundColor: "#ffd150" }}>
                  <Button
                    type="dashed"
                    shape="circle"
                    icon={<VideoCameraAddOutlined />}
                    size="large"
                    onClick={startVideoCall}
                  />
                </Card>
              </Tooltip>
            </div>
            <Modal
              title="Enter recipient email to start the call"
              open={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <Form form={form} layout="vertical">
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: "Please input recipient's email!" },
                    { type: "email", message: "The input is not valid E-mail!" },
                  ]}
                >
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter recipient's email"
                  />
                </Form.Item>
              </Form>
            </Modal>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Connect;

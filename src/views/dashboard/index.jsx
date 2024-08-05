// Dashboard.js
import React, { useState } from "react";
import { Layout, Menu, Card, Row, Col } from "antd";
import {
  DashboardOutlined,
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import { Line, Pie, Bar } from "@ant-design/charts";
import MainHeader from "../../components/Header";

const { Header, Sider, Content } = Layout;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const lineData = [
    { date: "2021-01-01", value: 3 },
    { date: "2021-01-02", value: 4 },
    { date: "2021-01-03", value: 3.5 },
    { date: "2021-01-04", value: 5 },
    { date: "2021-01-05", value: 4.9 },
    { date: "2021-01-06", value: 6 },
    { date: "2021-01-07", value: 7 },
    { date: "2021-01-08", value: 9 },
    { date: "2021-01-09", value: 13 },
  ];

  const pieData = [
    { type: "A", value: 27 },
    { type: "B", value: 25 },
    { type: "C", value: 18 },
    { type: "D", value: 15 },
    { type: "E", value: 10 },
    { type: "F", value: 5 },
  ];

  const barData = [
    { type: "A", value: 30 },
    { type: "B", value: 20 },
    { type: "C", value: 10 },
    { type: "D", value: 40 },
    { type: "E", value: 50 },
    { type: "F", value: 60 },
  ];

  const lineConfig = {
    data: lineData,
    height: 200,
    xField: "date",
    yField: "value",
    point: {
      size: 5,
      shape: "diamond",
    },
  };

  const pieConfig = {
    appendPadding: 10,
    data: pieData,
    angleField: "value",
    colorField: "type",
    radius: 0.8,
    innerRadius: 0.5,
  };

  const barConfig = {
    data: barData,
    xField: "value",
    yField: "type",
    seriesField: "type",
    barStyle: { radius: [2, 2, 0, 0] },
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
          <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<DashboardOutlined />}>
              Dashboard
            </Menu.Item>
            <Menu.Item
              key="2"
              icon={<UserOutlined />}
              onClick={() => (window.location.href = "/profile-settings")}
            >
              Profile
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="bg-[#FFFFFF]">
          <Header className="bg-[#FFFFFF] text-2xl font-semibold text-blue-800 mt-4">
            Dashboard
          </Header>
          <Content style={{ margin: "24px 16px", padding: 24, minHeight: 280 }}>
            <Row gutter={16}>
              <Col span={8}>
                <Card title="Learning Curve - Line Chart">
                  <Line {...lineConfig} />
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Distribution - Pie Chart" size="small">
                  <Pie {...pieConfig} />
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Category - Bar Chart" size="small">
                  <Bar {...barConfig} />
                </Card>
              </Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Dashboard;

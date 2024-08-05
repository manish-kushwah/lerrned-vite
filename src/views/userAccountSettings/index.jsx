import React, { useState } from "react";
import {
  Collapse,
  Form,
  Input,
  Upload,
  Button,
  DatePicker,
  message,
  Select,
  Layout,
  Menu,
} from "antd";
import {
  UploadOutlined,
  LoadingOutlined,
  PlusOutlined,
  DashboardOutlined,
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import "antd/dist/reset.css";
const { TextArea } = Input;
const { Option } = Select;
const { Panel } = Collapse;
const { Header, Sider, Content } = Layout;
import MainHeader from "../../components/Header";

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

const Settings = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const [collapsed, setCollapsed] = useState(true);
  const [currentMenu, setCurrentMenu] = useState("2");

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );

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
              } else {
                window.location.href = "/profile-settings";
              }
              setCurrentMenu(e.key);
            }}
            defaultSelectedKeys={["2"]}
            selectedKeys={[currentMenu]}
          >
            <Menu.Item key="1" icon={<DashboardOutlined />}>
              Dashboard
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
              Profile
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="bg-[#FFFFFF]">
          <Content style={{ margin: "24px 16px", padding: 24, minHeight: 280 }}>
            <Collapse>
              <Panel header="Settings" key="1" className="bg-teal-200">
                <Form layout="vertical" className="p-4">
                  <Form.Item label="Profile Picture">
                    <Upload
                      name="avatar"
                      listType="picture-circle"
                      className="avatar-uploader"
                      showUploadList={false}
                      action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                      beforeUpload={beforeUpload}
                      onChange={handleChange}
                    >
                      {imageUrl ? (
                        <img
                          src={imageUrl}
                          alt="avatar"
                          style={{
                            width: "100%",
                          }}
                        />
                      ) : (
                        uploadButton
                      )}
                    </Upload>
                  </Form.Item>

                  <Form.Item label="Qualifications">
                    <TextArea rows={4} placeholder="Enter your qualifications" />
                  </Form.Item>

                  <Form.Item label="Work Experience">
                    <TextArea rows={4} placeholder="Enter your work experience" />
                  </Form.Item>

                  <Form.Item label="Specializations">
                    <TextArea rows={4} placeholder="Enter your specializations" />
                  </Form.Item>

                  <Form.Item label="Professional Work Experience Documents (for Professors)">
                    <Upload
                      action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                      listType="picture"
                      maxCount={3}
                      multiple
                    >
                      <Button icon={<UploadOutlined />}>Upload (Max: 3)</Button>
                    </Upload>
                  </Form.Item>

                  <Form.Item label="Biography">
                    <TextArea rows={4} placeholder="Enter your biography" />
                  </Form.Item>

                  <Form.Item label="Availability Schedule">
                    <DatePicker.RangePicker showTime />
                  </Form.Item>

                  <Form.Item label="Stripe Account Connection">
                    <Input placeholder="Enter your Stripe account details" />
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      style={{ backgroundColor: "steelblue" }}
                    >
                      Save
                    </Button>
                  </Form.Item>
                </Form>
              </Panel>

              <Panel header="Education Details" key="2" className="bg-blue-200">
                <Form layout="vertical">
                  <Form.Item
                    label="Current Educational Status"
                    name="educationalStatus"
                    rules={[
                      { required: true, message: "Please select your current educational status" },
                    ]}
                  >
                    <Select placeholder="Select your current educational status">
                      <Option value="school">School</Option>
                      <Option value="ug">Undergraduate</Option>
                      <Option value="pg">Postgraduate</Option>
                    </Select>
                  </Form.Item>

                  <Form.Item label="Subjects of Interest">
                    <TextArea rows={2} placeholder="Enter your subjects of interest" />
                  </Form.Item>

                  <Form.Item label="Guardian Information (if underage)">
                    <Form.Item
                      label="Guardian's Name"
                      name="guardianName"
                      rules={[
                        { required: true, message: "Please enter the full name of the guardian" },
                        {
                          pattern: /^[a-zA-Z\s]+$/,
                          message: "Name can only include letters and spaces",
                        },
                      ]}
                    >
                      <Input placeholder="Enter guardian's name" />
                    </Form.Item>

                    <Form.Item
                      label="Guardian's Contact Number"
                      name="guardianContact"
                      rules={[
                        {
                          required: true,
                          message: "Please enter the contact number of the guardian",
                        },
                        {
                          pattern: /^[0-9]{10}$/,
                          message: "Please enter a valid 10-digit phone number",
                        },
                      ]}
                    >
                      <Input placeholder="Enter guardian's contact number" />
                    </Form.Item>

                    <Form.Item
                      label="Guardian's Email Address"
                      name="guardianEmail"
                      rules={[
                        {
                          required: true,
                          message: "Please enter the email address of the guardian",
                        },
                        { type: "email", message: "Please enter a valid email address" },
                      ]}
                    >
                      <Input placeholder="Enter guardian's email address" />
                    </Form.Item>
                  </Form.Item>

                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
              </Panel>
            </Collapse>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 bg-gradient-to-tr from-[#E0FFFF] to-[#FFFFFF]">
      <div className="w-full max-w-4xl">
        <Collapse>
          <Panel header="Settings" key="1" className="bg-teal-200">
            <Form layout="vertical" className="p-4">
              <Form.Item label="Profile Picture">
                <Upload
                  name="avatar"
                  listType="picture-circle"
                  className="avatar-uploader"
                  showUploadList={false}
                  action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                  beforeUpload={beforeUpload}
                  onChange={handleChange}
                >
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt="avatar"
                      style={{
                        width: "100%",
                      }}
                    />
                  ) : (
                    uploadButton
                  )}
                </Upload>
              </Form.Item>

              <Form.Item label="Qualifications">
                <TextArea rows={4} placeholder="Enter your qualifications" />
              </Form.Item>

              <Form.Item label="Work Experience">
                <TextArea rows={4} placeholder="Enter your work experience" />
              </Form.Item>

              <Form.Item label="Specializations">
                <TextArea rows={4} placeholder="Enter your specializations" />
              </Form.Item>

              <Form.Item label="Professional Work Experience Documents (for Professors)">
                <Upload
                  action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                  listType="picture"
                  maxCount={3}
                  multiple
                >
                  <Button icon={<UploadOutlined />}>Upload (Max: 3)</Button>
                </Upload>
              </Form.Item>

              <Form.Item label="Biography">
                <TextArea rows={4} placeholder="Enter your biography" />
              </Form.Item>

              <Form.Item label="Availability Schedule">
                <DatePicker.RangePicker showTime />
              </Form.Item>

              <Form.Item label="Stripe Account Connection">
                <Input placeholder="Enter your Stripe account details" />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" style={{ backgroundColor: "steelblue" }}>
                  Save
                </Button>
              </Form.Item>
            </Form>
          </Panel>

          <Panel header="Education Details" key="2" className="bg-blue-200">
            <Form layout="vertical">
              <Form.Item
                label="Current Educational Status"
                name="educationalStatus"
                rules={[
                  { required: true, message: "Please select your current educational status" },
                ]}
              >
                <Select placeholder="Select your current educational status">
                  <Option value="school">School</Option>
                  <Option value="ug">Undergraduate</Option>
                  <Option value="pg">Postgraduate</Option>
                </Select>
              </Form.Item>

              <Form.Item label="Subjects of Interest">
                <TextArea rows={2} placeholder="Enter your subjects of interest" />
              </Form.Item>

              <Form.Item label="Guardian Information (if underage)">
                <Form.Item
                  label="Guardian's Name"
                  name="guardianName"
                  rules={[
                    { required: true, message: "Please enter the full name of the guardian" },
                    {
                      pattern: /^[a-zA-Z\s]+$/,
                      message: "Name can only include letters and spaces",
                    },
                  ]}
                >
                  <Input placeholder="Enter guardian's name" />
                </Form.Item>

                <Form.Item
                  label="Guardian's Contact Number"
                  name="guardianContact"
                  rules={[
                    { required: true, message: "Please enter the contact number of the guardian" },
                    {
                      pattern: /^[0-9]{10}$/,
                      message: "Please enter a valid 10-digit phone number",
                    },
                  ]}
                >
                  <Input placeholder="Enter guardian's contact number" />
                </Form.Item>

                <Form.Item
                  label="Guardian's Email Address"
                  name="guardianEmail"
                  rules={[
                    { required: true, message: "Please enter the email address of the guardian" },
                    { type: "email", message: "Please enter a valid email address" },
                  ]}
                >
                  <Input placeholder="Enter guardian's email address" />
                </Form.Item>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
};

export default Settings;

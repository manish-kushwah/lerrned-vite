import React, { useState, useContext } from "react";
import { UserContext } from "../../context/userContext";
import { Button, Form, Input, message, Modal } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { loginApiCall } from "../../apis/auth";
import { useAuth0 } from "@auth0/auth0-react";

const Login = (props) => {
  const { openModal, toggleLoginModal, toggleSignupModal } = props;
  const { user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const { user: userData, loginWithRedirect } = useAuth0();

  const onFinish = async () => {
    setLoading(true);
    loginWithRedirect();
    setTimeout(() => {
      setLoading(false);
      window.localStorage.setItem("userData", JSON.stringify(userData));
      setUser(userData);
      message.success("Login successful!");
      window.location.href = "/dashboard";
    }, 1000);
  };

  const onFinishFailed = () => {
    message.error("Login failed!");
  };
  
  return (
    <>
      <button
        className="text-[#302F2F] h-10 text-md flex items-center space-x-2 bg-transparent outline outline-1 outline-stone-400"
        onClick={toggleLoginModal}
      >
        <span>LOGIN</span>
      </button>
      <Modal
        open={openModal}
        centered
        closable={false}
        destroyOnClose
        onCancel={toggleLoginModal}
        footer={null}
        width={384}
      >
        <div className="w-full max-w-sm p-4 space-y-4 bg-white">
          <h2 className="text-4xl font-bold text-center text-[#1C3D7A] mb-8">Login</h2>
          <Form
            form={form}
            name="login"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            layout="vertical"
          >
            <Form.Item
              label="username"
              name="username"
              rules={[{ required: true, message: "Please enter your fullname!" }]}
            >
              <Input
                size="large"
                placeholder="Fullname"
                prefix={
                  <UserOutlined
                    style={{
                      color: "rgba(0,0,0,.25)",
                    }}
                  />
                }
              />
            </Form.Item>

            <Form.Item
              label="password"
              name="password"
              rules={[{ required: true, message: "Please enter your password!" }]}
            >
              <Input.Password
                size="large"
                placeholder="Password"
                prefix={
                  <LockOutlined
                    style={{
                      color: "rgba(0,0,0,.25)",
                    }}
                  />
                }
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                loading={loading}
                className="w-full bg-[#FF5722] hover:!bg-[#ff6822] mt-4"
              >
                Login
              </Button>
            </Form.Item>
            <div className="text-center">
              New user?{" "}
              <a onClick={toggleSignupModal} className="!text-[#0000cd]">
                Sign up
              </a>
            </div>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default Login;

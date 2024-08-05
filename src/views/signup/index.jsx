import { Button, DatePicker, Form, Input, message, Modal, Radio, Space } from "antd";
import React, { useState } from "react";

const SignUp = (props) => {
  const { openModal, toggleLoginModal, toggleSignupModal } = props;
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const onFinish = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      message.success("Sign-up successful!");
    }, 2000);
  };

  const onFinishFailed = () => {
    console.log("Sign-up failed!");
  };

  return (
    <>
      <button
        className="text-[#FFFFFF] h-10 text-md flex items-center space-x-2 bg-[#71C047] outline outline-1 outline-[#71C047]"
        onClick={toggleSignupModal}
      >
        <span>REGISTER</span>
      </button>
      <Modal
        open={openModal}
        centered
        closable={false}
        destroyOnClose
        onCancel={toggleSignupModal}
        footer={null}
        width={384}
      >
        <div className="w-full max-w-md p-4 space-y-4 bg-white">
          <h2 className="text-4xl font-bold text-center text-[#1C3D7A] mb-8">Sign Up</h2>
          <Form
            form={form}
            name="signup"
            initialValues={{ role: "student" }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            layout="vertical"
          >
            <Form.Item
              name="fullname"
              rules={[{ required: true, message: "Please enter your full name!" }]}
            >
              <Input size="large" placeholder="Your full name *" />
            </Form.Item>

            <Form.Item
              name="dob"
              rules={[{ required: true, message: "Please enter your date of birth!" }]}
            >
              <DatePicker className="w-full" placeholder="Date of birth *" />
            </Form.Item>

            <Form.Item
              name="phone"
              rules={[{ required: true, message: "Please enter your phone number!" }]}
            >
              <Input size="large" placeholder="Your contact no. *" />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please enter your email!" },
                { type: "email", message: "Please enter a valid email!" },
              ]}
            >
              <Input size="large" placeholder="Your email address *" />
            </Form.Item>

            <Form.Item
              name="role"
              rules={[{ required: true, message: "Please select your role!" }]}
            >
              <Radio.Group>
                <Radio value="student">Student</Radio>
                <Radio value="mentor">Mentor</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                loading={loading}
                className="w-full bg-[#71C047] hover:!bg-[#99e86e] mt-4"
              >
                Sign Up
              </Button>
            </Form.Item>
            <div className="text-center">
              Already registered?{" "}
              <a onClick={toggleLoginModal} className="!text-[#0000cd]">
                Log in
              </a>
            </div>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default SignUp;

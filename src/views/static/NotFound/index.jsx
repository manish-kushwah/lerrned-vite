import { useNavigate } from "react-router-dom";
import { Flex, Space } from "antd";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <Space align="center" direction="vertical">
          <h2>Error 404</h2>
          <div>Sorry we couldn&apos;t find the page/records you&apos;re looking for</div>
          <br />
          <button onClick={() => navigate("/")}>Home</button>
        </Space>
      </div>
    </>
  );
};

export default NotFound;

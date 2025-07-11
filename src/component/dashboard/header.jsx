import { Avatar, Input } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
const HeaderComponent = () => {
  return (
    <div className="d-flex justify-end align-center">
      <div className="padding-inline">
        <Input />
      </div>
      <div className="padding-inline">
        <InfoCircleOutlined className="wh-15" />
      </div>
      <div className="padding-inline">
        <img src="src\assets\bell.png" alt="bell" className="wh-15" />
      </div>
      <div className="padding-inline">
        <Avatar className="avtar" size="medium">
          SM
        </Avatar>
      </div>
    </div>
  );
};
export default HeaderComponent;

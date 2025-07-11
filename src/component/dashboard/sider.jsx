import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { bottomSideNavItem, topSideNavItem } from "../data/sideData";
const SiderComponent = (props) => {
  return (
    <div className="d-flex flex-direction-col">
      <div className="d-flex justify-end p16">
        {props?.collapsed ? (
          <RightCircleOutlined
            onClick={props?.toggleCollapsed}
            className="icon-size"
          />
        ) : (
          <LeftCircleOutlined
            onClick={props?.toggleCollapsed}
            className="icon-size"
          />
        )}
      </div>

      {/* Middle section - Main menu */}
      <div className='sider'
      >
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["2"]}
          items={topSideNavItem}
        />
      </div>

      {/* Bottom section - Additional menu item(s) */}
      <Menu
        theme="dark"
        mode="inline"
        selectable={false}
        className="border-line"
        items={bottomSideNavItem}
      />
    </div>
  );
};
export default SiderComponent;

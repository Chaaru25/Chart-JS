import { Avatar, Layout, Menu } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";
import "./dashboard.css";
import HeaderComponent from "./header";
import SiderComponent from "./sider";
import Dashboard from "./dashboard";

const LayoutComponent = () => {
  const [collapsed, setOnCollapse] = useState(false);

  const toggleCollapsed = () => {
    setOnCollapse(!collapsed);
  };
  return (
    <>
      <Layout className="wh-100">
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <SiderComponent
            collapsed={collapsed}
            toggleCollapsed={toggleCollapsed}
          />
        </Sider>
        <Layout>
          <Header className="headerBg">
            <HeaderComponent />
          </Header>
          <Content>
            <>
              <Dashboard />
            </>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};
export default LayoutComponent;

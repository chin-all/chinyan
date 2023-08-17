/**
 * @description 页面布局文件
 */
import React, { FC, useState } from "react";
import { useLocation, useNavigate, Link, Outlet } from "react-router-dom";
import { Layout, Menu } from "antd";
import { menuRouter, RouteType } from "@/router/config";
import { PageHead } from "../PageHead";
import "./style.scss";
const { Header, Content, Footer, Sider } = Layout;

// 生成菜单
const generateMenuItems = (routes: RouteType[], basePath = "") => {
  return routes.map((route) => {
    if (route.hidden) return;
    const fullPath = `${basePath}${route.path}`;
    if (route.children) {
      return (
        <Menu.SubMenu key={fullPath} title={route.name}>
          {generateMenuItems(route.children, fullPath)}
        </Menu.SubMenu>
      );
    }
    return (
      <Menu.Item key={fullPath}>
        <Link to={fullPath}>{route.name}</Link>
      </Menu.Item>
    );
  });
};

const WheelLibLayout: FC = () => {
  const navigate = useNavigate();
  const handleMenuClick = ({ key }: any) => {
    navigate(key);
  };

  return (
    <Layout className="generate-layout">
      <Sider>
        <div className="layout-logo">万维前端轮子库</div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["/"]}
          onClick={handleMenuClick}
        >
          {generateMenuItems(menuRouter)}
        </Menu>
      </Sider>
      <Layout>
        <Header className="layout-header">
          <PageHead />
        </Header>
        <Content className="layout-content">
          <Outlet />
        </Content>
        <Footer className="layout-footer">如无必要 勿增实体</Footer>
      </Layout>
    </Layout>
  );
};

export default WheelLibLayout;

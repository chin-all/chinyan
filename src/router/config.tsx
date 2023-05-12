/**
 * @description 定义路由用到的数据
 */
import React, { lazy } from "react";
const HomePage = lazy(async () => await import("../pages/Home"));
const PageTools = lazy(async () => await import("../pages/ToolUse"));
const ComponentUse = lazy(async () => await import("../pages/ComponentUse"));

export interface MetaType {
  title?: string;
  icon?: string;
  isNav?: boolean; // 导航栏页面
  type?: "group";
}
export declare interface RouteType {
  name: string; // 名称
  path: string; // 路径
  element?: React.ReactNode; // 对应的组件
  meta?: MetaType; // 路由元  {title:页面标题}
  children?: RouteType[]; // 嵌套路由
  introduction?: string; // 路由简介
}

export const allRoute: RouteType[] = [
  {
    name: "首页",
    path: "/",
    meta: { title: "首页" },
    element: <HomePage />,
  },
  {
    name: "函数工具",
    path: "/tool",
    introduction: "工具的使用案例",
    meta: { title: "函数工具" },
    element: <PageTools />,
  },
  {
    name: "函数组件",
    path: "/component",
    introduction: "组件的使用案例",
    meta: { title: "函数组件" },
    element: <ComponentUse />,
  },
];

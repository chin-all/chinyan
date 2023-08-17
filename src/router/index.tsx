/**
 * @description 页面路由
 */
import React, { FC, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { allRoute, RouteType, MetaType } from "./config";
import NotFound from "../pages/NotFound";
function AppRouter() {
  return (
    <BrowserRouter>
      <RoutesRender routes={allRoute} />
    </BrowserRouter>
  );
}
export default AppRouter;

/**
 * 生成路由
 * @param routes
 */
const RoutesRender: FC<{ routes: RouteType[] }> = ({ routes }) => {
  const { pathname } = useLocation();

  const renderRoutes = (routes: RouteType[]): JSX.Element[] => {
    return routes.map((route: RouteType) => {
      const { path, element, meta, children } = route;

      // 当前访问路由
      if (pathname.includes(path)) {
        frontendRoute(meta);
      }

      return (
        <Route
          key={path}
          path={path}
          element={<Suspense fallback={<NotFound />}>{element}</Suspense>}
        >
          {!!children?.length && renderRoutes(children)}
        </Route>
      );
    });
  };

  return <Routes>{renderRoutes(routes)}</Routes>;
};

/**  路由前置 */
const frontendRoute = (meta: MetaType | undefined): void => {
  if (meta?.title) document.title = meta.title; // 修改页面名称
};

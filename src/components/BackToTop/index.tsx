import React, { FC, useEffect, useState, CSSProperties } from "react";
import { throttle } from "lodash";
import "./style.scss";
interface IBackToTop {
  style?: CSSProperties;
  callback?: () => void; // 点击按钮的回调
}
/**
 * 返回顶部组件
 * @param style 自定义样式，包括并不限于right、bottom、background-color
 * @returns
 */
export const BackToTop: FC<IBackToTop> = ({ style, callback }) => {
  // 图标的显隐状态
  const [show, switchShow] = useState(false);

  useEffect(() => {
    const listener = throttle(() => {
      const shouldShow = window.scrollY > 300;
      if (shouldShow !== show) {
        switchShow(shouldShow);
      }
    }, 500) as EventListener; // 事件监听器
    document.addEventListener("scroll", listener);
    // 组件销毁时，取消监听
    return () => document.removeEventListener("scroll", listener);
  }, [show]);

  return show ? (
    <div
      className="chinyan-top-jumper"
      onClick={() => {
        window.scrollTo(0, 0);
        callback?.();
      }}
      style={style ?? {}}
    ></div>
  ) : null;
};

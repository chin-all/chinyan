/**
 * @description 组件的使用案例
 */
import { FC, useRef, useState, useEffect } from "react";
import { CaseComponent } from "@/components";
import "./style.scss";
const ComponentUse: FC = () => {
  const codeExample = `
  // 一个暂时代码的组件
  // 可以用于展示示例代码
  console.log('didi')
  `;
  return (
    <>
      <CaseComponent code={codeExample} width="600px" />
    </>
  );
};

export default ComponentUse;

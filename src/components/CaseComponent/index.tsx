/**
 * @description 案例组件
 */

import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { message, Collapse } from "antd";
import { CopyOutlined } from "@ant-design/icons";
import "./style.scss";

interface ICase {
  code: string;
  width?: string;
}
const { Panel } = Collapse;
export const CaseComponent: React.FC<ICase> = ({ code, width }) => {
  const handleCopyClick = (e) => {
    try {
      navigator.clipboard.writeText(code);
      message.success("已复制代码");
    } catch (error) {
      message.error("复制失败");
    }
    e.stopPropagation();
  };
  return (
    <div>
      <Collapse style={{ width: width ?? "400px" }}>
        <Panel
          header="查看代码"
          key="0"
          extra={<CopyOutlined onClick={handleCopyClick} />}
        >
          <SyntaxHighlighter language="javascript">{code}</SyntaxHighlighter>
        </Panel>
      </Collapse>
    </div>
  );
};

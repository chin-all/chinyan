/**
 * @description 计算固定宽度内容纳标签数
 */
import { ReactElement } from "react";
import { Tag } from "antd";
const dataSource = [
  "aaaaaaaaaa",
  "测试数",
  "eeeeeeeeeeeee",
  "测试数试数据",
  "ffff",
  "dd",
  "ffff",
  "dddddd",
  "a",
  "gggggg",
  "dddddddddddddddd",
  "bbbbb",
  "测试数据测数据",
  "bbbbb",
  "ccccccccccccc",
  "b",
  "测试数据数据",
  "bbbbb",
  "gggggg",
  "ccccccccccccc",
  "测试数据测试数据",
  "ccccccccccccc",
  "dddddddddddddddd",
  "eeeeeeeeeeeee",
  "测试数据",
  "测试数据测",
];

interface tagInfo {
  boxWidth: number; // 行宽
  tagList: string[]; // 标签列表
  columnNum: number; // 列数
  tagSize?: "large" | "middle" | "small"; // 标签大小
  leaveBlankWidth?: number; // 留白宽度
}
// 计算规定行数能装多少
function calculateTagCount(tagInfo: tagInfo): number {
  const { columnNum, tagList, boxWidth, leaveBlankWidth = 0 } = tagInfo;
  let columNum: number = columnNum;
  let tagCount = 0; // 能装多少
  let lastOneTagCount = 0; // 上一行装了多少
  let newList = tagList; // 删掉上一行后剩下的数据
  let lastLineWidth: number = boxWidth; // 最后一行的宽度
  // 有多少行就操作多少次
  while (columNum > 0) {
    newList = newList.slice(lastOneTagCount);
    // 最后一行预留一段距离出来
    if (columNum === 1) {
      lastLineWidth = boxWidth - leaveBlankWidth;
    }
    const newTagCount = calculateLineTagCount({
      ...tagInfo,
      tagList: newList,
      boxWidth: lastLineWidth,
    });
    tagCount += newTagCount;
    lastOneTagCount = newTagCount;
    columNum--;
  }
  return tagCount;
}
// 计算一行能装多少个
function calculateLineTagCount(tagInfo: tagInfo): number {
  const { tagList, tagSize = "middle" } = tagInfo;
  let boxWidth = tagInfo.boxWidth;
  // 创建一个临时元素来模拟单个标签
  const tempTag = document.createElement("div");
  tempTag.style.visibility = "hidden";
  tempTag.style.position = "absolute";
  document.body.appendChild(tempTag);
  let tagCount = 0;
  // 计算一行能放的最大标签数
  for (const tag of tagList) {
    tempTag.innerText = tag;
    tempTag.className = `ant-tag ant-tag-${tagSize}`;
    if (tempTag.offsetWidth + 8 <= boxWidth) {
      tagCount += 1;
      boxWidth -= tempTag.offsetWidth + 8; // 8px是标签的margin-right值
    } else {
      break;
    }
  }
  // 卸载临时元素
  document.body.removeChild(tempTag);
  return tagCount;
}

const TestUntilDemo = (): ReactElement => {
  const tagCount = calculateTagCount({
    boxWidth: 400,
    tagList: dataSource,
    columnNum: 3,
    leaveBlankWidth: 50,
  });
  console.log("thisLineTagCount: ", tagCount);
  return (
    <div
      style={{ width: "400px", height: "500px", border: "1px solid #000" }}
      className="out-box"
    >
      {dataSource.map((data, index) => {
        return <Tag key={index}>{data}</Tag>;
      })}
    </div>
  );
};

export default TestUntilDemo;

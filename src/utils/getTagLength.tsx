interface ITagInfo {
  boxWidth: number; // 行宽
  tagList: string[]; // 标签列表
  columnNum?: number; // 列数
  tagSize?: "large" | "middle" | "small" | "checkable"; // 标签大小
  leaveBlankWidth?: number; // 留白宽度，一般用于留出一个操作按钮的空间
  tagMargin?: number; // 标签间距，antd的间距默认是8，可自行设置
}
/**
 * @description 计算固定宽度内容纳标签数
 * @param boxWidth 行宽
 * @param tagList 标签列表
 * @param columnNum 列数 (可不传 默认1排)
 * @param tagSize 行宽 (可不传 默认middle)
 * @param leaveBlankWidth 留白宽度 (可不传 默认不留空)
 * @param tagMargin 标签间距 (可不传 默认8)
 * @return 可容纳标签数
 */
export function getCapacityTagCount(tagInfo: ITagInfo): number {
  const { columnNum = 1, tagList, boxWidth, leaveBlankWidth = 0 } = tagInfo;
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
function calculateLineTagCount(tagInfo: ITagInfo): number {
  const { tagList, tagSize = "middle", tagMargin = 8 } = tagInfo;
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
      boxWidth -= tempTag.offsetWidth + tagMargin; // 标签margin-right值，默认8px
    } else {
      break;
    }
  }
  // 卸载临时元素
  document.body.removeChild(tempTag);
  return tagCount;
}

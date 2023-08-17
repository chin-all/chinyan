/**
 * @description 组件的使用案例
 */
import { CaseComponent } from "@/components";
function ComponentUse() {
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
}

export default ComponentUse;

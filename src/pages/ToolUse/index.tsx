/**
 * @description 工具的使用案例
 */
import { getColorCombination } from "../../utils";
import { PreviousPage } from "../../components";
function PageTools() {
  const { backgroundColor, fontColor } = getColorCombination();
  return (
    <>
      <PreviousPage />
      <div
        style={{
          width: "100%",
          height: "20px",
          background: backgroundColor,
          color: fontColor,
        }}
      >
        按F12查看控制台
      </div>
    </>
  );
}

export default PageTools;

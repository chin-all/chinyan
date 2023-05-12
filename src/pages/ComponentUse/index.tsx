/**
 * @description 组件的使用案例
 */
import { Empty, PreviousPage } from "../../components";
function ComponentUse() {
  return (
    <>
      <PreviousPage />
      <div
        style={{
          width: "100%",
          height: "100px",
          background: "#000",
          color: "#fff",
        }}
      >
        组件页面
      </div>
      <h3>空组件</h3>
      <hr />
      <Empty />
    </>
  );
}

export default ComponentUse;

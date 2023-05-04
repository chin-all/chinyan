import { getRandomColorCombination } from "./utils/randomColor";

const jsonStr = [
  {
    label: "产业链图谱",
    value: "http://47.99.195.25:8007/industryInvest/allView",
    icon: "icon1.png",
    bg: "block-bg1.png",
    mask: "mask1.png",
  },
];

function App() {
  const { backgroundColor, fontColor } = getRandomColorCombination();
  console.log(`Background color: ${backgroundColor}`);
  console.log(`Font color: ${fontColor}`);
  return (
    <>
      <div
        style={{
          width: "200px",
          height: "200px",
          background: backgroundColor,
          color: fontColor,
        }}
      >
        按F12查看控制台
      </div>
    </>
  );
}

export default App;

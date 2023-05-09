import { useState } from "react";
import { getColorCombination, PubsubService, GetUrlParameter } from "./utils";

function App() {
  const { backgroundColor, fontColor } = getColorCombination();
  const [inputText, setInputText] = useState("1");
  PubsubService.clearSubsByTopic("clickEvent");
  PubsubService.subscribe("clickEvent", (params: any) => {
    console.log(params);
    setInputText(params.number + 1);
  });
  console.log(GetUrlParameter(["name", "cm"]));
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
      <button
        onClick={(e) => {
          PubsubService.publish("clickEvent", { number: inputText });
        }}
      >
        点击
      </button>
      <input value={inputText} />
    </>
  );
}

export default App;

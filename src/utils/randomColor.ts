/**
 * @description 获取一组颜色组的方法，可通过这个方法随机生成背景和字体的颜色
 * @return backgroundColor 背景颜色 fontColor 字体颜色
 */
export function getColorCombination(): {
  backgroundColor: string;
  fontColor: string;
} {
  const backgroundColor = getRandomColor();
  const fontColor = getContrastColor(backgroundColor);
  return { backgroundColor, fontColor };
}

// 生成随机背景颜色
function getRandomColor(): string {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// 判断生成的颜色是深还是浅，深就用白色显示文字，浅就用黑色
function getContrastColor(hexColor: string): string {
  const threshold = 130; // 颜色深浅的阈值
  const hRed = hexToR(hexColor);
  const hGreen = hexToG(hexColor);
  const hBlue = hexToB(hexColor);
  // 通过计算把 RGB 模式转换成 YUV 模式
  const cBrightness = Math.round(
    (parseInt(hRed) * 299 + parseInt(hGreen) * 587 + parseInt(hBlue) * 114) /
      1000
  );
  if (cBrightness > threshold) {
    return "#000000";
  } else {
    return "#FFFFFF";
  }
}

// 计算 RGB 的各项数值
function hexToR(h: string): string {
  return parseInt(cutHex(h).substring(0, 2), 16).toString();
}

function hexToG(h: string): string {
  return parseInt(cutHex(h).substring(2, 4), 16).toString();
}

function hexToB(h: string): string {
  return parseInt(cutHex(h).substring(4, 6), 16).toString();
}

function cutHex(h: string): string {
  return h.charAt(0) === "#" ? h.substring(1, 7) : h;
}

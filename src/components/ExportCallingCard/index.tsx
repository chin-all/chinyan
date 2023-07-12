/**
 * @description 导出图片卡片
 */
import React, { FC, ReactElement, useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";
import "./index.scss";
interface IProps {
  show?: boolean; // 组件的显隐
  setHidden?: any; // 设置隐藏的方法
  className?: string; // 导出图片的样式，包括大小、显示位置、显示图层等需自定义属性
  render: (ref) => ReactElement; // 要导出的组件，需在组件上设置ref
  bufferTime?: number; // 设置缓冲时长
}
const ExportCallingCard: FC<IProps> = ({
  show = false,
  setHidden,
  className,
  render,
  bufferTime = 0,
}) => {
  const [imgSrc, setImgSrc] = useState("");
  const cardRef = useRef(null);
  const textRef = useRef(null);

  // 获取图片的位置
  const getTopPosition = (): string => {
    const element = document.getElementById("export-calling-card");
    let TopPosition = 0;
    if (element != null) {
      const height = element.offsetHeight; // 获取元素高度
      const top = element.offsetTop; // 获取元素距离顶部的位置
      TopPosition = top + height / 2 + 20;
      return `${TopPosition}px`;
    }
    return "10px";
  };

  useEffect(() => {
    if (show) {
      const bufferTimer = setTimeout(() => {
        createPoster();
        clearTimeout(bufferTimer);
      }, bufferTime);
      const timer = setTimeout(() => {
        const textPosition = getTopPosition();
        if (textRef.current !== null) {
          textRef.current.style.display = "block";
          textRef.current.style.top = textPosition;
        }
        clearTimeout(timer);
      }, bufferTime + 500);
    }
  }, [show]);

  const createPoster = (): void => {
    const targetDoc: any = cardRef.current;
    if (targetDoc) {
      html2canvas(targetDoc, {
        scale: 4,
        useCORS: true,
      })
        .then((canvas) => {
          const image = canvas.toDataURL("image/png");
          setImgSrc(image);
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  };

  return show ? (
    <div>
      {!imgSrc && (
        <div style={{ width: "350px", height: "205px" }}>{render(cardRef)}</div>
      )}
      {imgSrc && (
        <div>
          <img
            id="export-calling-card"
            className={className}
            src={imgSrc}
            alt=""
            crossOrigin="anonymous"
          />
          <p id="export-calling-card-text" ref={textRef}>
            长按名片保存或转发
          </p>
        </div>
      )}
    </div>
  ) : null;
};
export default ExportCallingCard;

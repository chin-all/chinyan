/**
 * @description 空状态组件
 * 封装完发现，功能并没有增强或减少，好像只是套了层壳？？？
 */
import { FC, ReactNode, ReactElement, CSSProperties } from "react";
import { Empty } from "antd";

interface IEmpty {
  children?: ReactElement;
  description?: ReactNode;
  image?: ReactNode;
  imageStyle?: CSSProperties;
}
/**
 * 定制空状态组件
 * @param children 包裹的子节点
 * @param description 定制提示的内容
 * @returns {JSX.Element}
 */
export const CustomEmpty: FC<IEmpty> = ({
  description,
  children,
  image,
  imageStyle,
}) => {
  const descriptionInfo = description ?? "暂无数据";
  const imageInfo = image ?? Empty.PRESENTED_IMAGE_SIMPLE;
  const imageStyleInfo = imageStyle ?? {};
  return (
    <Empty
      description={descriptionInfo}
      image={imageInfo}
      imageStyle={imageStyleInfo}
    >
      {children ?? null}
    </Empty>
  );
};

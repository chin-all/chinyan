/**
 * @description 返回上一页
 */
import { useNavigate } from "react-router-dom";

export const PreviousPage = () => {
  const navigate = useNavigate();
  return <div onClick={() => navigate(-1)}>返回</div>;
};

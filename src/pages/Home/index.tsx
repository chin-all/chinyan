/**
 * @description 首页
 */
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { allRoute } from "../../router/config";
const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      {allRoute.map((page, key) => {
        return (
          <Button
            key={key + "-" + page.path}
            onClick={() => {
              navigate(page.path);
            }}
            style={{ margin: "10px" }}
          >
            {page.introduction ?? page.name}
          </Button>
        );
      })}
    </div>
  );
};
export default HomePage;

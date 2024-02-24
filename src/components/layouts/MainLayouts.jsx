import { Outlet } from "react-router-dom";
import Container from "../ui/Container";

const MainLayouts = () => {
  return (
    <div className="grid grid-cols-12">
      <Container />
      <Outlet />
    </div>
  );
};

export default MainLayouts;

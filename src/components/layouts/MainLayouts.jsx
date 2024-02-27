import { Outlet } from "react-router-dom";
import Container from "../ui/Container";

const MainLayouts = () => {
  return (
    <div className="grid-cols-12 lg:grid">
      <Container />
      <Outlet />
    </div>
  );
};

export default MainLayouts;

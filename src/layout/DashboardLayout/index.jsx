import { Outlet } from "react-router-dom";
import Header from "../shared/Header";

const DashboardLayout = () => {
  return (
    <>
      <Header />
      <div className="app_container">
        <Outlet />
      </div>
    </>
  );
};

export default DashboardLayout;

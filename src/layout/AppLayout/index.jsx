import { Outlet } from "react-router-dom";
import Header from "../shared/Header";
import AppFooter from "./AppFooter";
import AppNavbar from "./AppNavbar";

const AppLayout = ({ withNav = true }) => {
  return (
    <>
      <Header />
      {withNav ? <AppNavbar /> : null}
      <div className="app_container">
        <Outlet />
      </div>
      <AppFooter />
    </>
  );
};

export default AppLayout;

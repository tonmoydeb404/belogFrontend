import { Outlet } from "react-router-dom";
import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";
import AppNavbar from "./AppNavbar";

const AppLayout = ({ withNav = true }) => {
  return (
    <>
      <AppHeader />
      {withNav ? <AppNavbar /> : null}
      <div className="app_container">
        <Outlet />
      </div>
      <AppFooter />
    </>
  );
};

export default AppLayout;

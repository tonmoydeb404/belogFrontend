import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { selectAuth } from "../features/auth/authSlice";

const PrivateOutlet = () => {
  const { status, user } = useAppSelector(selectAuth);

  if (status === "UNAUTHORIZED") return <Navigate to={"/login"} replace />;

  if (status === "AUTHORIZED" && user) return <Outlet />;

  return <></>;
};

export default PrivateOutlet;

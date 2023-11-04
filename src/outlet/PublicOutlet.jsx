import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { selectAuth } from "../features/auth/authSlice";

const PublicOutlet = () => {
  const { status } = useAppSelector(selectAuth);

  if (status === "AUTHORIZED") return <Navigate to={"/"} replace />;

  if (status === "UNAUTHORIZED") return <Outlet />;

  return <></>;
};

export default PublicOutlet;

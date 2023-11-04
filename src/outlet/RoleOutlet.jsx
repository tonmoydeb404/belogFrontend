import PropTypes from "prop-types";
import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { selectAuth } from "../features/auth/authSlice";

const propTypes = {
  roles: PropTypes.arrayOf(PropTypes.string),
  redirect: PropTypes.string,
};

/**
 * Form Input
 * @type {React.FC<PropTypes.InferProps<propTypes>>}
 * @returns {React.ReactElement}
 */

const RoleOutlet = ({ roles, redirect = "/" }) => {
  const { user } = useAppSelector(selectAuth);

  const canAccess = roles.some((v) => user?.roles?.includes(v));

  if (user && user.roles.includes(canAccess)) return <Outlet />;

  return <Navigate to={redirect} replace />;
};

RoleOutlet.propTypes = propTypes;

export default RoleOutlet;

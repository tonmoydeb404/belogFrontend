import { useEffect } from "react";
import {
  BiArchive,
  BiFile,
  BiLabel,
  BiLogOut,
  BiSolidWidget,
} from "react-icons/bi";
import { Link } from "react-router-dom";
import { useLazyAuthLogoutQuery } from "../../api/authApi";
import { logInKey } from "../../config/localStorage";

const PrivateMenu = () => {
  const [logout, { isSuccess }] = useLazyAuthLogoutQuery();

  useEffect(() => {
    if (isSuccess) localStorage.removeItem(logInKey);
  }, [isSuccess]);

  return (
    <>
      <li>
        <Link to={"/dashboard"}>
          <BiSolidWidget />
          Dashboard
        </Link>
      </li>
      <li>
        <Link to={"/dashboard/posts"}>
          <BiFile />
          Manage Posts
        </Link>
      </li>
      <li>
        <Link to={"/dashboard/categories"}>
          <BiLabel />
          Manage Categories
        </Link>
      </li>
      <li>
        <Link to={"/dashboard/pages"}>
          <BiArchive />
          Manage Pages
        </Link>
      </li>
      <li>
        <button onClick={() => logout()}>
          <BiLogOut />
          Logout
        </button>
      </li>
    </>
  );
};

export default PrivateMenu;

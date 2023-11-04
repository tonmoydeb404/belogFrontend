import { BiLogIn } from "react-icons/bi";
import { Link } from "react-router-dom";

const PublicMenu = () => {
  return (
    <>
      <li>
        <Link to={"/login"}>
          <BiLogIn />
          Login
        </Link>
      </li>
    </>
  );
};

export default PublicMenu;

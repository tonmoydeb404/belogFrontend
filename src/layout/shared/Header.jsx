import { Dropdown } from "react-daisyui";
import {
  BiGridAlt,
  BiLogIn,
  BiMoon,
  BiSearch,
  BiSolidWidget,
} from "react-icons/bi";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <header className="app_container mt-4 mb-8 flex items-center">
      <div className="flex items-center gap-2 mr-auto">
        <Link to={"/"}>
          <img src={logo} alt="Be" className="w-[45px]" />
        </Link>
        <div className="hidden sm:block">
          <h2 className="text-2xl font-bold mb-0.5">
            <Link to={"/"}>Belog</Link>
          </h2>
          <p className="text-sm opacity-75">
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </p>
        </div>
      </div>

      <Dropdown end>
        <Dropdown.Toggle button={false} className="btn btn-square btn-ghost">
          <BiGridAlt className="text-xl" />
        </Dropdown.Toggle>
        <Dropdown.Menu className="w-52 bg-neutral rounded">
          <li>
            <button>
              <BiMoon />
              Toggle Theme
            </button>
          </li>
          <li>
            <button>
              <BiSearch />
              Search
            </button>
          </li>
          <li>
            <Link to={"/dashboard"}>
              <BiSolidWidget />
              Dashboard
            </Link>
          </li>
          <li>
            <Link to={"/login"}>
              <BiLogIn />
              Login
            </Link>
          </li>
        </Dropdown.Menu>
      </Dropdown>
    </header>
  );
};

export default Header;

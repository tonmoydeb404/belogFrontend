import { Dropdown } from "react-daisyui";
import {
  BiGridAlt,
  BiLogIn,
  BiMoon,
  BiReset,
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
        <div>
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
          <Dropdown.Item>
            <BiMoon />
            Toggle Theme
          </Dropdown.Item>
          <Dropdown.Item>
            <BiSearch />
            Search
          </Dropdown.Item>
          <Link to={"/dashboard"}>
            <Dropdown.Item>
              <BiSolidWidget />
              Dashboard
            </Dropdown.Item>
          </Link>
          <Link to={"/reset-auth"}>
            <Dropdown.Item>
              <BiReset />
              Reset Password
            </Dropdown.Item>
          </Link>
          <Link to={"/login"}>
            <Dropdown.Item>
              <BiLogIn />
              Login
            </Dropdown.Item>
          </Link>
        </Dropdown.Menu>
      </Dropdown>
    </header>
  );
};

export default Header;
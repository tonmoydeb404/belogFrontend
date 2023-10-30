import { Button } from "react-daisyui";
import { BiHome, BiLogoGithub, BiLogoGoogle } from "react-icons/bi";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="app_container min-h-screen flex flex-col items-center justify-center">
      <div className="p-5 rounded bg-neutral w-full max-w-lg shadow-xl">
        <div className="flex justify-between mb-5">
          <div>
            <h2 className="text-2xl font-bold mb-1">Sign In</h2>
            <p className="text-base opacity-70">to continue you need to...</p>
          </div>

          <Link className="text-2xl text-primary" to={"/"}>
            <BiHome />
          </Link>
        </div>

        <div className="flex flex-col gap-1.5">
          <Button
            className="text-white bg-[#4183F3] hover:bg-[#3f6cb8]"
            endIcon={<BiLogoGoogle className="text-xl" />}
          >
            Sign in with Google
          </Button>
          <Button
            className="text-white bg-black"
            endIcon={<BiLogoGithub className="text-xl" />}
          >
            Sign in with Github
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;

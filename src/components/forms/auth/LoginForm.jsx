import { Button } from "react-daisyui";
import { useForm } from "react-hook-form";
import { BiHome } from "react-icons/bi";
import { Link } from "react-router-dom";
import FormInput from "../FormInput";

const LoginForm = () => {
  const methods = useForm();
  const { handleSubmit, register } = methods;

  return (
    <form
      className="w-full max-w-md"
      onSubmit={handleSubmit((v) => console.log(v))}
    >
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-3xl font-bold ">Login</h1>
        <Link to={"/"}>
          <BiHome className="text-2xl" />
        </Link>
      </div>
      <FormInput label={"Email"} register={register("email")} />
      <FormInput label={"Password"} register={register("password")} />

      <div className="flex items-center mt-5">
        <Button color="primary" variant="outline">
          Continue
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;

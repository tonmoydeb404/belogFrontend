import React from "react";

export const Login = () => {
  return (
    <>
      <h2 className="text-center text-3xl font-bold">Login Here...</h2>
      <div className="hero-content flex-col lg:flex-row-reverse text-black">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-400">
          <form className="card-body p-1">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-medium text-black">
                  Email 
                  <span className="text-red-500 text-2xl font-bold">*</span>
                </span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input rounded-md  text-lg font-medium text-white"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text  text-lg font-medium text-black">
                  Password 
                  <span className="text-red-500 text-2xl font-bold">*</span>
                </span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input rounded-md  text-lg font-medium text-white"
                required
              />

              <a
                href="/forget-password"
                className="label-text-alt mt-3 link link-hover  text-lg font-medium text-black"
              >
                Forgot password?
              </a>
              <a
                href="/register"
                className="label-text-alt mt-3 link link-hover  text-lg font-medium text-black"
              >
                Don't Have Account? Register Now.
              </a>
            </div>
            <div className="form-control mt-6">
              <button className="capitalize btn btn-md bg-primary text-black border-none hover:text-primary rounded-md">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

import React from "react";
import { Link } from "react-router-dom";
export const Register = () => {
  return (
    <>
      <h2 className="text-center text-3xl font-bold">Register Here...</h2>
      <div className="hero-content flex-col lg:flex-row-reverse text-black">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-400">
          <form className="card-body p-1">
            {/* Require start */}

            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-medium text-black">
                  First Name
                  <span className="text-red-500 text-2xl font-bold">*</span>
                </span>
              </label>
              <input
                type="text"
                placeholder="Type your first name here..."
                className="input rounded-md  text-lg font-medium text-white"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-medium text-black">
                  Last Name
                  <span className="text-red-500 text-2xl font-bold">*</span>
                </span>
              </label>
              <input
                type="text"
                placeholder="Type your last name here..."
                className="input rounded-md  text-lg font-medium text-white"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-medium text-black">
                  Email
                  <span className="text-red-500 text-2xl font-bold">*</span>
                </span>
              </label>
              <input
                type="email"
                placeholder="Type your email here..."
                className="input rounded-md  text-lg font-medium text-white"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-medium text-black">
                  Username
                  <span className="text-red-500 text-2xl font-bold">*</span>
                </span>
              </label>
              <input
                type="text"
                placeholder="Type your username here..."
                className="input rounded-md  text-lg font-medium text-white"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-medium text-black">
                  Password
                  <span className="text-red-500 text-2xl font-bold">*</span>
                </span>
              </label>
              <input
                type="password"
                placeholder="Type your password here..."
                className="input rounded-md  text-lg font-medium text-white"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text  text-lg font-medium text-black">
                  Confirm Password
                  <span className="text-red-500 text-2xl font-bold">*</span>
                </span>
              </label>
              <input
                type="password"
                placeholder="Type your confirm password here..."
                className="input rounded-md  text-lg font-medium text-white"
                required
              />
            </div>
            {/* Require end */}
            {/* Optional start */}

            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-medium text-black">
                  Mobile Number
                </span>
              </label>
              <input
                type="text"
                placeholder="Type your mobile number here..."
                className="input rounded-md  text-lg font-medium text-white"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-medium text-black">
                  Profile Picture
                </span>
              </label>
              <input
                type="file"
                placeholder="Select your profile picture here..."
                className="input rounded-md  text-lg font-medium text-white"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-medium text-black">
                  Date of Birth
                </span>
              </label>
              <input
                type="date"
                placeholder="Select or type your date of birth here..."
                className="input rounded-md  text-lg font-medium text-white"
              />
            </div>
            {/* Optional end */}
            <Link
              to="/login"
              className="label-text-alt mt-3 link link-hover  text-lg font-medium text-black"
            >
              You Have A Account? Login Now.
            </Link>
            <div className="form-control mt-6">
              <button className="capitalize btn btn-md bg-primary text-black border-none hover:text-primary rounded-md">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

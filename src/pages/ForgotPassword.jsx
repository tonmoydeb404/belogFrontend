import React from "react";

export const ForgotPassword = () => {
  return (
    <div>
      {" "}
      <div className="hero-content flex-col lg:flex-row-reverse text-black">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-400">
          <form className="card-body p-1">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-medium text-black">
                  Email or Mobile Number
                  <span className="text-red-500 text-2xl font-bold">*</span>
                </span>
              </label>
              <input
                type="text"
                placeholder="Type here your email or mobile number!"
                className="input rounded-md  text-lg font-medium text-white"
                required
              />
              <p className="pt-3">
                Note: Type here your email or mobile number! which linked to
                your account. We send otp to your email or mobile number which
                you give us.
              </p>
            </div>

            <div className="form-control mt-6">
              <button className="capitalize btn btn-md bg-primary text-black border-none hover:text-primary rounded-md">
                Send OTP
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

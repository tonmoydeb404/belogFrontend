import React from "react";
import { Link } from "react-router-dom";

export const CreateBlog = () => {
  return (
    <>
      <ol className="breadcrumbnav m-5">
        <li className="me-1">
          <Link to="/admin">Admin</Link>
        </li>
        <li>Create Blog</li>
      </ol>
      <h2 className="text-center text-3xl font-bold">Create New Blog...</h2>
      <div className="hero-content flex-col lg:flex-row-reverse text-black">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-400">
          <form className="card-body p-1">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-medium text-black">
                  Blog Title
                  <span className="text-red-500 text-2xl font-bold">*</span>
                </span>
              </label>
              <input
                type="text"
                placeholder="Type your blog title here..."
                className="input rounded-md  text-lg font-medium text-white"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text  text-lg font-medium text-black">
                  Blog Description
                  <span className="text-red-500 text-2xl font-bold">*</span>
                </span>
              </label>
              <input
                type="text"
                placeholder="Type your blog description here..."
                className="input rounded-md  text-lg font-medium text-white"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text  text-lg font-medium text-black">
                  Blog Body
                  <span className="text-red-500 text-2xl font-bold">*</span>
                </span>
              </label>
              <input
                type="text"
                placeholder="Type your blog body text here..."
                className="input rounded-md  text-lg font-medium text-white"
                required
              />

              <div className="form-control">
                <label className="label">
                  <span className="label-text  text-lg font-medium text-black">
                    Blog Image
                    <span className="text-red-500 text-2xl font-bold">*</span>
                  </span>
                </label>
                <input
                  type="file"
                  placeholder="Select your blog image here..."
                  className="input rounded-md  text-lg font-medium text-white"
                  required
                />
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="form-control mt-6">
                <button className="capitalize btn btn-md bg-primary font-bold text-white border-none hover:text-primary rounded-md me-3">
                  Create
                </button>
              </div>
              <div className="form-control mt-6">
                <button className="capitalize btn btn-md bg-red-500 font-bold text-white border-none hover:text-primary rounded-md">
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

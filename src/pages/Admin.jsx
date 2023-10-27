import React from "react";
import { NavLink } from "react-router-dom";

export const Admin = () => {
  return (
    <>
      <div
        style={{ display: "flex", listStyle: "none", justifyContent: "center" }}
      >
        <div>
          <li className="m-5 -mb-5">
            <NavLink
              to="/create-blog"
              className="me-3 bg-gray-400 btn rounded-md border-none text-md text-black capitalize font-bold text-lg"
            >
              Create Blog
            </NavLink>
          </li>
        </div>
        <div>
          <li className="m-5 -ms-3 -mb-5">
            <NavLink
              to="/edit-blog"
              className="me-3 bg-gray-400 btn rounded-md border-none text-md text-black capitalize font-bold text-lg"
            >
              Edit Blog
            </NavLink>
          </li>
        </div>
      </div>
    </>
  );
};

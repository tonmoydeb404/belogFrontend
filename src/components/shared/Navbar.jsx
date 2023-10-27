import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";
import React from "react";
export const Navbar = () => {
  return (
    <>
      <div className="bg-forest">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <img
              className="btn btn-ghost normal-case text-4xl"
              onClick={() => document.getElementById("my_modal_1").showModal()}
              src={logo}
            />
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">
                  Welcome to belog! It's a blog website. So, enjoy our website.
                  All the best. <br></br>
                  <span className="text-orange-400">
                    {" "}
                    Press ESC key or click the button below to close!
                  </span>
                </p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
        <div className="navbar bg-gray-400 justify-between">
          <div className="navbar-start" style={{ listStyle: "none" }}>
            <li>
              <NavLink
                to="/belogFrontend"
                className="me-3 bg-gray-400 btn rounded-md border-none text-md text-black capitalize font-bold text-lg"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tech"
                className="me-3 bg-gray-400 btn rounded-md border-none text-md text-black capitalize font-bold text-lg"
              >
                Tech
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/programming"
                className="me-3 bg-gray-400 btn rounded-md border-none text-md text-black capitalize font-bold text-lg"
              >
                Programming
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/research"
                className="me-3 bg-gray-400 btn rounded-md border-none text-md text-black capitalize font-bold text-lg"
              >
                Research
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin"
                className="me-3 bg-gray-400 btn rounded-md border-none text-md text-black capitalize font-bold text-lg"
              >
                Admin
              </NavLink>
            </li>
          </div>

          <li>
            <NavLink
              to="/login"
              className="swap-on bg-gray-400 btn rounded-md border-none text-md text-black capitalize font-bold text-lg"
            >
              Login
            </NavLink>
          </li>
        </div>
      </div>
    </>
  );
};

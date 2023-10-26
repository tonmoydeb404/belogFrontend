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
                <p className="py-4">Welcome to belog! It's a blog website. So, enjoy our website. All the best. <br></br>
                 <span className="text-orange-400"> Press ESC key or click the button below to close!</span>
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
        <div className="navbar bg-gray-400">
          <div className="navbar-start">
            <ul className="flex">
              <li>
                <a className="btn btn-md rounded-md me-2 text-white hover:text-warning">Home</a>
              </li>
              <li>
                <a className="btn btn-md rounded-md me-2 text-white hover:text-warning">Tech</a>
              </li>
              <li>
                <a className="btn btn-md rounded-md me-2 text-white hover:text-warning">Programming</a>
              </li>
              <li>
                <a className="btn btn-md rounded-md me-2 text-white hover:text-warning">Research</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

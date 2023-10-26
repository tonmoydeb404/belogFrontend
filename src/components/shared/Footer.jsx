import React from "react";
import { BsFacebook, BsMessenger } from "react-icons/bs";
import { RiPhoneFill, RiWhatsappFill } from "react-icons/ri";
export const Footer = () => {
  return (
    <>
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover" href="/">
            Home
          </a>
          <a className="link link-hover" href="/tech">
            Tech
          </a>
          <a className="link link-hover" href="/programming">
            Programming
          </a>
          <a className="link link-hover" href="/research">
            Research
          </a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.facebook.com/muhammadjubayer.ahmedtayef">
              <BsFacebook
                h
                className="text-2xl text-blue-800 border-2 bg-white hover:bg-warning rounded-full hover:border-warning fill-current"
              />
            </a>
            <a href="https://m.me/muhammadjubayer.ahmedtayef">
              <BsMessenger className="text-2xl text-info border-2 bg-white hover:bg-warning rounded-full hover:border-warning fill-current" />
            </a>
            <a href="https://wa.me/qr/ITVOIOKJVOBSN1">
              <RiWhatsappFill className="text-2xl text-green-600 border-2 bg-white hover:bg-warning rounded-full hover:border-warning fill-current" />
            </a>
            <a href="tel:+8801891484760">
              <RiPhoneFill className="text-2xl text-black border-2 bg-white hover:bg-warning rounded-full  hover:border-warning fill-current" />
            </a>
          </div>
        </nav>
        <aside>
          <p>
            Copyright © 2023 - All right reserved by Tonmoy Deb (579420) &
            Jubayer Ahamad Tayef (579462)!
          </p>
        </aside>
      </footer>
    </>
  );
};

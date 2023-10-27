import React from "react";
import MyImg from "../assets/images/developer-image.jpg";
import { Link } from "react-router-dom";
export const BlogDetails = () => {
  return (
    <>
      <ol className="breadcrumbnav m-5 -mb-5">
        <li className="me-1">
          <Link to="/belogFrontend">Home</Link>
        </li>
        <li>Blog-Details</li>
      </ol>
      <div className="mx-3 mt-10">
        <div className="flex">
          <div className="text-center">
            <h1 className="text-xl sm:text-3xl font-bold">
              Acusantium quis pariatur molestiae porro eius
            </h1>
            <p className="font-bold">
              12 May 2023 <span className="text-primary"> Java, For Loop</span>
            </p>
            <div className="flex justify-center my-8">
              <img className="rounded md:h-96" src={MyImg} alt="" />
            </div>
            <p className="text-justify">
              et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad
              voluptatem doloribus vel accusantium quis pariatur molestiae porro
              eius odio et labore et velit autet iusto sed quo iure voluptatem
              occaecati omnis eligendi aut ad voluptatem doloribus vel
              accusantium quis pariatur molestiae porro eius odio et labore et
              velit autet iusto sed quo iure voluptatem occaecati omnis eligendi
              aut ad voluptatem doloribus vel accusantium quis pariatur
              molestiae porro eius odio et labore et velit autet iusto sed quo
              iure voluptatem occaecati omnis eligendi aut ad voluptatem
              doloribus vel accusantium quis pariatur molestiae porro eius odio
              et labore et velit aut
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

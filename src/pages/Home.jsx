import React from "react";
import { Link } from "react-router-dom";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import MyImg from "../assets/images/developer-image.jpg";
import TeamLeaderImg from "../assets/images/TeamLeaderImg.jpg";
export const Home = () => {
  return (
    <>
      <div className="mt-5">
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img
              className="object-cover h-40 w-35 border-redius-50%"
              src={MyImg}
              alt="Movie"
            />
          </figure>
          <div className="card-body text-start">
            <h2 className="card-title">Blog Title: New movie is released!</h2>
            <p>Blog Description: Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-end  items-center flex">
              <Link
                to={`/blog-details/`}
                className=" hover:font-bold text-primary  hover:ease-in duration-300 flex items-center text-xl mb-5"
              >
                <a className="text-wite me-2">Continue Reading...</a>

                <BsFillArrowRightCircleFill className="text-xl" />
              </Link>
            </div>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img
              className="object-cover h-40 w-35 border-redius-50%"
              src={TeamLeaderImg}
              alt="Movie"
            />
          </figure>
          <div className="card-body text-start">
            <h2 className="card-title">Blog Title: New movie is released!</h2>
            <p>Blog Description: Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-end  items-center flex">
              <Link
                to={`/blog-details/`}
                className=" hover:font-bold text-primary  hover:ease-in duration-300 flex items-center text-xl mb-5"
              >
                <a className="text-wite me-2">Continue Reading...</a>

                <BsFillArrowRightCircleFill className="text-xl" />
              </Link>
            </div>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img
              className="object-cover h-40 w-35 border-redius-50%"
              src={MyImg}
              alt="Movie"
            />
          </figure>
          <div className="card-body text-start">
            <h2 className="card-title">Blog Title: New movie is released!</h2>
            <p>Blog Description: Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-end  items-center flex">
              <Link
                to={`/blog-details/`}
                className=" hover:font-bold text-primary  hover:ease-in duration-300 flex items-center text-xl mb-5"
              >
                <a className="text-wite me-2">Continue Reading...</a>

                <BsFillArrowRightCircleFill className="text-xl" />
              </Link>
            </div>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img
              className="object-cover h-40 w-35 border-redius-50%"
              src={TeamLeaderImg}
              alt="Movie"
            />
          </figure>
          <div className="card-body text-start">
            <h2 className="card-title">Blog Title: New movie is released!</h2>
            <p>Blog Description: Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-end  items-center flex">
              <Link
                to={`/blog-details/`}
                className=" hover:font-bold text-primary  hover:ease-in duration-300 flex items-center text-xl mb-5"
              >
                <a className="text-wite me-2">Continue Reading...</a>

                <BsFillArrowRightCircleFill className="text-xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

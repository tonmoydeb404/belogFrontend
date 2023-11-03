import { useEffect } from "react";
import BlogCard from "../components/cards/BlogCard";
const Home = () => {
  useEffect(() => {
    const isAuthenticated =
      localStorage.getItem("BELOG_AUTH") === "AUTHENICATED";

    if (isAuthenticated) {
      fetch("http://localhost:9090/api/v1/auth/refresh", {
        credentials: "include",
      })
        .then((response) => {
          return response.json();
        })
        .then((v) => {
          if (v?.status === "ERROR") localStorage.removeItem("BELOG_AUTH");
          console.log(v);
        })
        .catch((err) => {
          console.log(err);
          localStorage.removeItem("BELOG_AUTH");
        });
    }
  }, []);
  return (
    <>
      <div className="mt-10 flex flex-col gap-8">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </>
  );
};

export default Home;

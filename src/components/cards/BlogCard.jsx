import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="blog_card">
      <div className="card_body">
        <Link to={"/post"}>
          <h1 className="card_title text-2xl font-bold mb-0.5">
            Markdown Crash Course
          </h1>
        </Link>
        <p className="mb-4">27 June, 2023</p>

        <p className="card_text text-base leading-snug mb-3">
          20 y/o semicolon dev trying to build better web interfaces. taught by
          the web itself, I love php but I write typescript, I love mern stack
          but I use the t3-stack ~ cus theo said typesaftey isn&#39;t optional
          apparently & btw I don&#39;t use neovim.
        </p>
        <div className="card_actions flex items-center">
          <Link to={`/post`} className="text-primary">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

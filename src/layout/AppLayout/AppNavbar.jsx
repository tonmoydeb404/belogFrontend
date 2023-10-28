import CategoryBadge from "../../components/badge/CategoryBadge";

const AppNavbar = () => {
  return (
    <nav className="app_container">
      <div className="w-full flex flex-wrap gap-2">
        <CategoryBadge title={"JavaScript"} count={6} />
        <CategoryBadge title={"TailwindCSS"} count={6} />
        <CategoryBadge title={"HTML"} count={6} />
        <CategoryBadge title={"CSS"} count={6} />
        <CategoryBadge title={"Node JS"} count={6} />
        <CategoryBadge title={"Technical Question"} count={6} />
        <CategoryBadge title={"Rust"} count={6} />
        <CategoryBadge title={"Web Development"} count={6} />
        <CategoryBadge title={"MongoDB"} count={6} />
        <CategoryBadge title={"MySql"} count={6} />
      </div>
    </nav>
  );
};

export default AppNavbar;

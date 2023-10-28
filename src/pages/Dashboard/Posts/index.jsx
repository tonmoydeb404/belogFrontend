import { Button } from "react-daisyui";
import DashboardStat from "../../../components/stats/DashboardStat";
import PostsTable from "../../../components/tables/PostsTable";

const Posts = () => {
  return (
    <div className="mt-10">
      <div className="stats stats-vertical sm:stats-horizontal shadow w-full border border-neutral rounded-lg mb-5">
        <DashboardStat title={"Total Posts"} value={"30K"} />
        <DashboardStat title={"Published"} value={"10.5K"} />
        <DashboardStat title={"Draft"} value={"99"} />
      </div>

      <div className="flex items-center mb-5">
        <Button color="primary" size="sm" className="ml-auto">
          Create New
        </Button>
      </div>

      <PostsTable />
    </div>
  );
};

export default Posts;

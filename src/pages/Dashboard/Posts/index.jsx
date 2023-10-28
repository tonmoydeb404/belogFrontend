import DashboardStat from "../../../components/stats/DashboardStat";

const Posts = () => {
  return (
    <div className="mt-10">
      <div className="stats stats-vertical sm:stats-horizontal shadow w-full border border-neutral rounded-lg mb-5">
        <DashboardStat title={"Total Posts"} value={"30K"} />
        <DashboardStat title={"Published"} value={"10.5K"} />
        <DashboardStat title={"Draft"} value={"99"} />
      </div>
    </div>
  );
};

export default Posts;

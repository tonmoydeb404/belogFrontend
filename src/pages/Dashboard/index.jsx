import DashboardCard from "../../components/cards/DashboardCard";
import DashboardStat from "../../components/stats/DashboardStat";

const Dashboard = () => {
  return (
    <div className="mt-10">
      <div className="stats stats-vertical sm:stats-horizontal shadow w-full border border-neutral rounded-lg mb-5">
        <DashboardStat title={"Total Visitors"} value={"30K"} />
        <DashboardStat title={"New Visitors"} value={"10.5K"} />
        <DashboardStat title={"Total Articles"} value={"99"} />
      </div>

      <div className="grid sm:grid-cols-2 gap-2">
        <DashboardCard
          title={"Posts"}
          value={"104"}
          text={"Published: 99, Draft: 5"}
          to="./posts"
        />
        <DashboardCard title={"Categories"} value={"10"} to="./posts" />
        <DashboardCard
          title={"Pages"}
          value={"104"}
          text={"Published: 99, Draft: 5"}
          to="./posts"
        />
        <DashboardCard
          title={"Users"}
          value={"104"}
          text={"Admin: 2, Editor: 10"}
          to="./posts"
        />
      </div>
    </div>
  );
};

export default Dashboard;

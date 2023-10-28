import PropTypes from "prop-types";

const DashboardStat = ({ title, value, text }) => {
  return (
    <div className="stat">
      <div className="stat-title">{title}</div>
      <div className="stat-value">{value}</div>
      <div className="stat-desc">{text}</div>
    </div>
  );
};

DashboardStat.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  text: PropTypes.string,
};

export default DashboardStat;

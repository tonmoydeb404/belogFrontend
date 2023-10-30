import PropTypes from "prop-types";
import { Card } from "react-daisyui";
import { BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const DashboardCard = ({ title, value, text, to }) => {
  return (
    <Card className="bg-neutral rounded-lg border-0 card-compact">
      <Card.Body>
        <div className="flex justify-between items-center">
          <span className="text-base opacity-70 uppercase">{title}</span>
          <Link to={to}>
            <BiRightArrowAlt className="text-xl text-primary" />
          </Link>
        </div>
        <h2 className="text-4xl font-extrabold">{value}</h2>
        <p className="text-sm opacity-70">{text}</p>
      </Card.Body>
    </Card>
  );
};

DashboardCard.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  text: PropTypes.string,
  to: PropTypes.string.isRequired,
};

export default DashboardCard;

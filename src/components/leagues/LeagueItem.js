import { Link } from "react-router-dom";

const LeagueItem = ({ league }) => {
  return (
    <div
      key={league._id}
      className="relative rounded-lg border my-2 border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-400"
    >
      <div className="flex-1 min-w-0">
        <Link to={`/leagues/${league._id}`} className="focus:outline-none">
          <span className="absolute inset-0" aria-hidden="true" />
          <p className="text-sm font-medium text-gray-900">{league.name}</p>
          <p className="text-sm text-gray-500 truncate">{`${
            league.city ? league.city : ""
          }, ${league.state ? league.state : ""} ${
            league.zipcode ? league.zipcode : ""
          }`}</p>
        </Link>
      </div>
    </div>
  );
};

export default LeagueItem;

import { Link } from "react-router-dom";
import { ChevronRightIcon, UserGroupIcon } from "@heroicons/react/solid";
import Warning from "../components/alerts/Warning";

const OrganizedLeaguesTable = ({ leagues }) => {
  return leagues.length === 0 ? (
    <Warning message="You currently do not manage any leagues." />
  ) : (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul className="divide-y divide-gray-200">
        {leagues.map((league) => (
          <li key={league._id}>
            <Link
              to={`/manage/${league._id}`}
              className="block hover:bg-gray-50"
            >
              <div className="flex items-center px-4 py-4 sm:px-6">
                <div className="min-w-0 flex-1 flex items-center">
                  <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                    <div>
                      <p className="text-sm font-medium truncate">
                        {league.name}
                      </p>
                      <p className="mt-2 flex items-center text-sm text-gray-500">
                        <UserGroupIcon
                          className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="truncate">
                          {league.players.length}
                        </span>
                      </p>
                    </div>
                    <div className="hidden md:block">
                      <div>
                        <p className="text-sm text-gray-900">
                          Created{" "}
                          <time dateTime={league.createdAt}>
                            {league.createdAt}
                          </time>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <ChevronRightIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrganizedLeaguesTable;

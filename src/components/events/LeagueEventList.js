import { ChevronRightIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { displayDate } from "../../utils/date";
import Info from "../alerts/Info";

const LeagueEventList = ({ leagueId, events, urlPrefix = "my-leagues" }) => {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      {events.length > 0 ? (
        <ul className="divide-y divide-gray-200">
          {events.map((event) => (
            <li key={event._id}>
              <Link
                to={`/${urlPrefix}/${leagueId}/events/${event._id}`}
                className="block hover:bg-gray-50"
              >
                <div className="flex items-center px-4 py-4 sm:px-6">
                  <div className="min-w-0 flex-1 flex items-center">
                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <p className="text-sm font-medium truncate">
                          {event.name}
                        </p>
                      </div>
                      <div className="hidden md:block">
                        <div>
                          <p className="text-sm text-gray-900">
                            <time dateTime={event.date}>
                              {displayDate(event.date)}
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
      ) : (
        <Info message="This league currently has no events scheduled." />
      )}
    </div>
  );
};

export default LeagueEventList;

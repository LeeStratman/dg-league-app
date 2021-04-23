import React from "react";
import EventList from "../../components/events/EventsList";
import useLeagueEvents from "../../hooks/queries/useLeagueEvents";
import Loading from "../../components/alerts/Loading";
import Error from "../../components/alerts/Error";
import { Link } from "react-router-dom";

const LeagueEvents = ({ leagueId }) => {
  const events = useLeagueEvents(leagueId);

  return (
    <div className="bg-white max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
        <div className="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
          <div className="ml-4 mt-2">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Events
            </h3>
          </div>
          <div className="ml-4 mt-2 flex-shrink-0">
            <Link
              to={`/manage/${leagueId}/create-event`}
              type="button"
              className="relative inline-flex items-center btn_primary"
            >
              Create New Event
            </Link>
          </div>
        </div>
        <div className="my-4">
          {events.isLoading ? (
            <Loading />
          ) : events.isError ? (
            <Error message={events.error.message} />
          ) : (
            <div className="mt-2">
              {events.isIdle ? null : events.data?.length > 0 ? (
                <EventList events={events.data} />
              ) : (
                <Error message="This league has no events." />
              )}
              {events.isFetching ? "Updating..." : null}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeagueEvents;

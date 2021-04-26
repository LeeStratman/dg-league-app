import React from "react";
import useUser from "../../hooks/queries/useUser";
import Info from "../../components/alerts/Info";
import Error from "../../components/alerts/Error";
import LeaguesTable from "../../components/leagues/LeaguesTable";

const MyScorecards = () => {
  const user = useUser();
  return (
    <div className="mt-4 bg-white max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
        <div className="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
          <div className="ml-4 mt-2">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              My Leagues
            </h3>
          </div>
        </div>
        <div className="my-4">
          {user.isLoading ? (
            <Info />
          ) : user.isError ? (
            <Error message="Unable to load your leagues." />
          ) : (
            <div>
              {user.isIdle ? null : (
                <LeaguesTable leagues={user.data?.leagues} />
              )}
              {user.isFetching ? "Updating..." : null}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyScorecards;

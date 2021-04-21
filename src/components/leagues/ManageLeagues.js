import React from "react";
import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser";
import Loading from "../../components/alerts/Loading";
import Error from "../../components/alerts/Error";
import OrganizedLeaguesTable from "../../components/OrganizedLeaguesTable";

const ManageLeagues = () => {
  const user = useUser();
  return (
    <div className="mt-4 bg-white max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
        <div className="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
          <div className="ml-4 mt-2">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Leagues
            </h3>
          </div>
          <div className="ml-4 mt-2 flex-shrink-0">
            <Link
              to="/create-league"
              type="button"
              className="relative inline-flex items-center btn_primary"
            >
              Create New League
            </Link>
          </div>
        </div>
        <div className="my-4">
          {user.isLoading ? (
            <Loading />
          ) : user.isError ? (
            <Error message="Unable to load your leagues." />
          ) : (
            <div>
              {user.isIdle ? null : (
                <OrganizedLeaguesTable leagues={user.data?.organizedLeagues} />
              )}
              {user.isFetching ? "Updating..." : null}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageLeagues;

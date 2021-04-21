import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../alerts/Loading";
import Error from "../alerts/Error";
import useLeague from "../../hooks/useLeague";
import useJoinLeague from "../../hooks/useJoinLeague";

const SingleLeague = () => {
  const { id } = useParams();
  const league = useLeague(id);
  const joinLeague = useJoinLeague(id);

  return league.isLoading ? (
    <Loading />
  ) : league.isError ? (
    <Error message={league.error.message} />
  ) : (
    <div>
      {league.data ? (
        <div className="mt-4">
          <div className="flex justify-between">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                {league.data.name}
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                {`${league.data.city}, ${league.data.state} ${
                  league.data.zip ? league.data.zip : ""
                }`}
              </p>
            </div>
            <div className="w-32">
              <button
                onClick={joinLeague.mutate}
                className="w-full btn_primary"
              >
                Join
              </button>
            </div>
          </div>
          <div className="mt-5 border-t border-gray-200">
            <dl className="sm:divide-y sm:divide-gray-200">
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium text-gray-500">About</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {league.data.description}
                </dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium text-gray-500">Organizer</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {`${league.data.organizer.firstName} ${league.data.organizer.lastName} (${league.data.organizer.email})`}
                </dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium text-gray-500">Members</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {league.data.players.length}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      ) : (
        <div>League not found</div>
      )}
      {league.isFetching ? "Updating..." : null}
    </div>
  );
};

export default SingleLeague;

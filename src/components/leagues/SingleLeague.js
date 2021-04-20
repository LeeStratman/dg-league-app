import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../alerts/loading";
import Error from "../alerts/error";
import useLeague from "../../hooks/useLeague";

const SingleLeague = () => {
  const { id } = useParams();
  const league = useLeague(id);

  console.log(league);

  return league.isLoading ? (
    <Loading />
  ) : league.isError ? (
    <Error message={league.error.message} />
  ) : (
    <div>
      {league.data ? (
        <div>{league.data.name}</div>
      ) : (
        <div>League not found</div>
      )}
      {league.isFetching ? "Updating..." : null}
    </div>
  );
};

export default SingleLeague;

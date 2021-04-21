import Loading from "../alerts/Loading";
import Error from "../alerts/Error";
import LeagueItem from "./LeagueItem";
import useLeagueSearch from "../../hooks/useLeagueSearch";

const LeagueList = ({ name }) => {
  const leagues = useLeagueSearch(name);

  return leagues.isLoading ? (
    <Loading />
  ) : leagues.isError ? (
    <Error message={leagues.error.message} />
  ) : (
    <div className="mt-2">
      {leagues.isIdle ? null : leagues.data?.length > 0 ? (
        leagues.data.map((league) => (
          <LeagueItem key={league._id} league={league} />
        ))
      ) : (
        <Error message="No leagues found!" />
      )}
      {leagues.isFetching ? "Updating..." : null}
    </div>
  );
};

export default LeagueList;

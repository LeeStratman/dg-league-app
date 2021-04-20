import Loading from "../alerts/loading";
import Error from "../alerts/error";
import LeagueItem from "./LeagueItem";
import useLeagueSearch from "../../hooks/useLeagueSearch";

const LeagueList = ({ name }) => {
  const leagues = useLeagueSearch(name);

  return leagues.isLoading ? (
    <Loading />
  ) : leagues.isError ? (
    <Error message={leagues.error.message} />
  ) : (
    <div>
      {leagues.data && leagues.data.length > 0 ? (
        leagues.data.map((league) => (
          <LeagueItem key={league._id} league={league} />
        ))
      ) : (
        <div>No leagues found</div>
      )}
      {leagues.isFetching ? "Updating..." : null}
    </div>
  );
};

export default LeagueList;

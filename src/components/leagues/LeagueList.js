import LeagueItem from "./LeagueItem";
import useLeagueSearch from "../../hooks/queries/useLeagueSearch";
import ServerContent from "../content/ServerContent";
import Error from "../alerts/Error";

const LeagueList = ({ name }) => {
  const leagues = useLeagueSearch(name);

  return (
    <ServerContent content={leagues}>
      {leagues.data?.length > 0 ? (
        leagues.data?.map((league) => (
          <LeagueItem key={league._id} league={league} />
        ))
      ) : (
        <Error
          message={`No leagues were found with the name containing '${name}'`}
        />
      )}
    </ServerContent>
  );
};

export default LeagueList;

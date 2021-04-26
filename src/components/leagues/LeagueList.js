import LeagueItem from "./LeagueItem";
import useLeagueSearch from "../../hooks/queries/useLeagueSearch";
import ServerContent from "../content/ServerContent";

const LeagueList = ({ name }) => {
  const leagues = useLeagueSearch(name);

  return (
    <ServerContent content={leagues}>
      {leagues.data?.map((league) => (
        <LeagueItem key={league._id} league={league} />
      ))}
    </ServerContent>
  );
};

export default LeagueList;

import React from "react";
import { useParams } from "react-router-dom";
import useLeague from "../../hooks/queries/useLeague";
import SubContent from "../../components/content/SubContent";
import LeagueDetails from "../../components/leagues/LeagueDetails";
import ServerContent from "../../components/content/ServerContent";
import SubHeader from "../../components/SubHeader";

const SingleLeague = () => {
  const { leagueId } = useParams();
  const league = useLeague(leagueId);

  return (
    <SubContent>
      <ServerContent content={league}>
        <>
          <SubHeader title={league.data.name} />
          <LeagueDetails league={league.data} />
        </>
      </ServerContent>
    </SubContent>
  );
};

export default SingleLeague;

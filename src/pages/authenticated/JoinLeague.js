import React from "react";
import { useParams } from "react-router-dom";
import useLeague from "../../hooks/queries/useLeague";
import SubContent from "../../components/content/SubContent";
import LeagueDetails from "../../components/leagues/LeagueDetails";
import ServerContent from "../../components/content/ServerContent";
import SubHeader from "../../components/SubHeader";
import JoinButton from "../../components/JoinButton";

const JoinLeague = () => {
  const { leagueId } = useParams();
  const league = useLeague(leagueId);

  return (
    <SubContent>
      <ServerContent content={league}>
        <>
          <div className="flex items-center justify-between flex-wrap sm:flex-nowrap">
            <SubHeader title={league.data.name} />
            <JoinButton leagueId={leagueId} />
          </div>
          <LeagueDetails league={league.data} />
        </>
      </ServerContent>
    </SubContent>
  );
};

export default JoinLeague;

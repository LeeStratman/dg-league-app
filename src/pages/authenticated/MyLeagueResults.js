import React from "react";

import useLeagueEvents from "../../hooks/queries/useLeagueEvents";
import SubContent from "../../components/content/SubContent";
import SubHeader from "../../components/SubHeader";
import ServerContent from "../../components/content/ServerContent";
import LeagueResultsTable from "../../components/events/LeagueResultsTable";

const MyLeagueResults = ({ leagueId }) => {
  const events = useLeagueEvents(leagueId);

  return (
    <SubContent>
      <SubHeader title="League Results" />
      <ServerContent content={events}>
        <LeagueResultsTable events={events.data} />
      </ServerContent>
    </SubContent>
  );
};

export default MyLeagueResults;

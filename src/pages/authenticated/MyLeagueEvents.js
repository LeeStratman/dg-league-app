import React from "react";
import LeagueEventList from "../../components/events/LeagueEventList";
import useLeagueEvents from "../../hooks/queries/useLeagueEvents";
import SubContent from "../../components/content/SubContent";
import SubHeader from "../../components/SubHeader";
import ServerContent from "../../components/content/ServerContent";

const MyLeagueEvents = ({ leagueId }) => {
  const events = useLeagueEvents(leagueId);

  return (
    <SubContent>
      <SubHeader title="Events" />
      <ServerContent content={events}>
        <LeagueEventList leagueId={leagueId} events={events.data} />
      </ServerContent>
    </SubContent>
  );
};

export default MyLeagueEvents;

import React from "react";
import useLeagueEvents from "../../hooks/queries/useLeagueEvents";
import SubContent from "../../components/content/SubContent";
import SubHeader from "../../components/SubHeader";
import ServerContent from "../../components/content/ServerContent";
import EventScheduleTable from "../../components/events/EventScheduleTable";

const MyLeagueEvents = ({ leagueId }) => {
  const events = useLeagueEvents(leagueId);

  return (
    <SubContent>
      <SubHeader title="Events" />
      <ServerContent content={events}>
        <EventScheduleTable events={events.data} />
      </ServerContent>
    </SubContent>
  );
};

export default MyLeagueEvents;

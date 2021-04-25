import React from "react";
import LeagueEventList from "../../components/events/LeagueEventList";
import useLeagueEvents from "../../hooks/queries/useLeagueEvents";
import SubContent from "../../components/content/SubContent";
import HeaderWithLink from "../../components/HeaderWithLink";
import ServerContent from "../../components/content/ServerContent";

const EditLeagueEvents = ({ leagueId }) => {
  const events = useLeagueEvents(leagueId);

  return (
    <SubContent>
      <HeaderWithLink
        title="Events"
        linkText="Create New Event"
        href={`/manage/${leagueId}/create-event`}
      />
      <ServerContent content={events}>
        <LeagueEventList
          leagueId={leagueId}
          events={events.data}
          urlPrefix="manage"
        />
      </ServerContent>
    </SubContent>
  );
};

export default EditLeagueEvents;

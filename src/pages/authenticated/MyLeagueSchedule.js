import React from "react";
import EventScheduleTable from "../../components/events/EventScheduleTable";
import useLeagueEvents from "../../hooks/queries/useLeagueEvents";
import Info from "../../components/alerts/Info";
import Error from "../../components/alerts/Error";

const MyLeagueSchedule = ({ leagueId }) => {
  const leagueEvents = useLeagueEvents(leagueId);

  return leagueEvents.isLoading ? (
    <Info />
  ) : leagueEvents.isError ? (
    <Error message={leagueEvents.error.message} />
  ) : (
    <div>
      {leagueEvents.data ? (
        <EventScheduleTable events={leagueEvents.data} />
      ) : (
        <Error message="Unable to load events!" />
      )}
      {leagueEvents.isFetching ? "Updating..." : null}
    </div>
  );
};

export default MyLeagueSchedule;

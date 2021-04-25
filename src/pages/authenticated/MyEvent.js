import React from "react";
import { useParams, useLocation } from "react-router-dom";
import Info from "../../components/alerts/Info";
import Error from "../../components/alerts/Error";
import useEvent from "../../hooks/queries/useEvent";
import { InformationCircleIcon } from "@heroicons/react/outline";
import WithSecondaryMenu from "../../components/content/WithSecondaryMenu";
import SubTitle from "../../components/SubTitle";
import MyEventRoutes from "../../components/routes/MyEventRoutes";

const MyEvent = () => {
  const { leagueId, eventId } = useParams();
  const event = useEvent(eventId);
  const location = useLocation();

  const navigation = [
    {
      name: "Details",
      href: `/my-leagues/${leagueId}/events/${eventId}`,
      icon: InformationCircleIcon,
      current:
        location.pathname === `/my-leagues/${leagueId}/events/${eventId}`
          ? true
          : false,
    },
    {
      name: "Results",
      href: `/my-leagues/${leagueId}/events/${eventId}/results`,
      icon: InformationCircleIcon,
      current:
        location.pathname ===
        `/my-leagues/${leagueId}/events/${eventId}/results`
          ? true
          : false,
    },
  ];

  return event.isLoading ? (
    <Info />
  ) : event.isError ? (
    <Error message={event.error.message} />
  ) : (
    <div>
      {event.isIdle ? null : event.data ? (
        <>
          <SubTitle title={event.data.name} />
          <WithSecondaryMenu navigation={navigation}>
            <MyEventRoutes event={event.data} />
          </WithSecondaryMenu>
        </>
      ) : (
        <Error message="League not found." />
      )}
      {event.isFetching ? "Updating..." : null}
    </div>
  );
};

export default MyEvent;

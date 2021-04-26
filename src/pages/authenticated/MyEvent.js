import React from "react";
import { useParams, useLocation } from "react-router-dom";
import useEvent from "../../hooks/queries/useEvent";
import { InformationCircleIcon } from "@heroicons/react/outline";
import WithSecondaryMenu from "../../components/content/WithSecondaryMenu";
import SubTitle from "../../components/SubTitle";
import MyEventRoutes from "../../components/routes/MyEventRoutes";
import { ChartBarIcon } from "@heroicons/react/solid";
import ServerContent from "../../components/content/ServerContent";

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
      icon: ChartBarIcon,
      current:
        location.pathname ===
        `/my-leagues/${leagueId}/events/${eventId}/results`
          ? true
          : false,
    },
  ];

  return (
    <ServerContent content={event}>
      <SubTitle title={event.data?.name} />
      <WithSecondaryMenu navigation={navigation}>
        <MyEventRoutes event={event.data} />
      </WithSecondaryMenu>
    </ServerContent>
  );
};

export default MyEvent;

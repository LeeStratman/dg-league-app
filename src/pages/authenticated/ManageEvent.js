import React from "react";
import { useParams, useLocation } from "react-router-dom";
import useEvent from "../../hooks/queries/useEvent";
import { InformationCircleIcon, ChartBarIcon } from "@heroicons/react/outline";
import WithSecondaryMenu from "../../components/content/WithSecondaryMenu";
import ManageEventRoutes from "../../components/routes/ManageEventRoutes";
import SubTitle from "../../components/SubTitle";
import ServerContent from "../../components/content/ServerContent";

const ManageEvent = () => {
  const { leagueId, eventId } = useParams();
  const event = useEvent(eventId);
  const location = useLocation();

  const navigation = [
    {
      name: "Details",
      href: `/manage/${leagueId}/events/${eventId}`,
      icon: InformationCircleIcon,
      current:
        location.pathname === `/manage/${leagueId}/events/${eventId}`
          ? true
          : false,
    },
    {
      name: "Results",
      href: `/manage/${leagueId}/events/${eventId}/results`,
      icon: ChartBarIcon,
      current:
        location.pathname === `/manage/${leagueId}/events/${eventId}/results`
          ? true
          : false,
    },
  ];

  return (
    <ServerContent content={event}>
      <SubTitle title={event.data?.name} />
      <WithSecondaryMenu navigation={navigation}>
        <ManageEventRoutes event={event.data} />
      </WithSecondaryMenu>
    </ServerContent>
  );
};

export default ManageEvent;

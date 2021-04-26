import React from "react";
import { useParams, useLocation } from "react-router-dom";
import useLeague from "../../hooks/queries/useLeague";
import {
  InformationCircleIcon,
  LocationMarkerIcon,
  CalendarIcon,
} from "@heroicons/react/outline";
import WithSecondaryMenu from "../../components/content/WithSecondaryMenu";
import ManageLeagueRoutes from "../../components/routes/ManageLeagueRoutes";
import SubTitle from "../../components/SubTitle";
import ServerContent from "../../components/content/ServerContent";

const ManageLeague = () => {
  const { leagueId } = useParams();
  const league = useLeague(leagueId);
  const location = useLocation();

  const navigation = [
    {
      name: "Details",
      href: `/manage/${leagueId}`,
      icon: InformationCircleIcon,
      current: location.pathname === `/manage/${leagueId}` ? true : false,
    },
    {
      name: "Courses",
      href: `/manage/${leagueId}/courses`,
      icon: LocationMarkerIcon,
      current:
        location.pathname === `/manage/${leagueId}/courses` ? true : false,
    },
    {
      name: "Events",
      href: `/manage/${leagueId}/events`,
      icon: CalendarIcon,
      current:
        location.pathname === `/manage/${leagueId}/events` ? true : false,
    },
  ];

  return (
    <ServerContent content={league}>
      <SubTitle title={league.data?.name} />
      <WithSecondaryMenu navigation={navigation}>
        <ManageLeagueRoutes league={league.data} />
      </WithSecondaryMenu>
    </ServerContent>
  );
};

export default ManageLeague;

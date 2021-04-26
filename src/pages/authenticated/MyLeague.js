import React from "react";
import { useParams, useLocation } from "react-router-dom";
import useLeague from "../../hooks/queries/useLeague";
import {
  InformationCircleIcon,
  LocationMarkerIcon,
  CalendarIcon,
} from "@heroicons/react/outline";
import WithSecondaryMenu from "../../components/content/WithSecondaryMenu";
import SubTitle from "../../components/SubTitle";
import MyLeagueRoutes from "../../components/routes/MyLeagueRoutes";
import ServerContent from "../../components/content/ServerContent";

const MyLeague = () => {
  const { leagueId } = useParams();
  const league = useLeague(leagueId);
  const location = useLocation();

  const navigation = [
    {
      name: "Details",
      href: `/my-leagues/${leagueId}`,
      icon: InformationCircleIcon,
      current: location.pathname === `/my-leagues/${leagueId}` ? true : false,
    },
    {
      name: "Courses",
      href: `/my-leagues/${leagueId}/courses`,
      icon: LocationMarkerIcon,
      current:
        location.pathname === `/my-leagues/${leagueId}/courses` ? true : false,
    },
    {
      name: "Events",
      href: `/my-leagues/${leagueId}/events`,
      icon: CalendarIcon,
      current:
        location.pathname === `/my-leagues/${leagueId}/events` ? true : false,
    },
  ];

  return (
    <ServerContent content={league}>
      <SubTitle title={league.data?.name} />
      <WithSecondaryMenu navigation={navigation}>
        <MyLeagueRoutes league={league.data} />
      </WithSecondaryMenu>
    </ServerContent>
  );
};

export default MyLeague;

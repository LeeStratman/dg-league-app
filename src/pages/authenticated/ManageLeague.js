import React from "react";
import { useParams, useLocation } from "react-router-dom";
import Info from "../../components/alerts/Info";
import Error from "../../components/alerts/Error";
import useLeague from "../../hooks/queries/useLeague";
import {
  InformationCircleIcon,
  LocationMarkerIcon,
  CalendarIcon,
} from "@heroicons/react/outline";
import WithSecondaryMenu from "../../components/content/WithSecondaryMenu";
import ManageLeagueRoutes from "../../components/routes/ManageLeagueRoutes";
import SubTitle from "../../components/SubTitle";

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

  return league.isLoading ? (
    <Info />
  ) : league.isError ? (
    <Error message={league.error.message} />
  ) : (
    <div>
      {league.isIdle ? null : league.data ? (
        <>
          <SubTitle title={league.data.name} />
          <WithSecondaryMenu navigation={navigation}>
            <ManageLeagueRoutes league={league.data} />
          </WithSecondaryMenu>
        </>
      ) : (
        <Error message="League not found." />
      )}
      {league.isFetching ? "Updating..." : null}
    </div>
  );
};

export default ManageLeague;

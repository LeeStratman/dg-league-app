import React from "react";
import { useParams, useLocation } from "react-router-dom";
import Loading from "../../components/alerts/Loading";
import Error from "../../components/alerts/Error";
import useLeague from "../../hooks/useLeague";
import {
  InformationCircleIcon,
  LocationMarkerIcon,
  CalendarIcon,
} from "@heroicons/react/outline";
import WithSecondaryMenu from "../../components/content/WithSecondaryMenu";
import ManageLeagueRoutes from "../../components/routes/ManageLeagueRoutes";
import SubTitle from "../../components/SubTitle";

const ManageLeague = () => {
  const { id } = useParams();
  const league = useLeague(id);
  const location = useLocation();

  const navigation = [
    {
      name: "Details",
      href: `/manage/${id}`,
      icon: InformationCircleIcon,
      current: location.pathname === `/manage/${id}` ? true : false,
    },
    {
      name: "Courses",
      href: `/manage/${id}/add-course`,
      icon: LocationMarkerIcon,
      current: location.pathname === `/manage/${id}/add-course` ? true : false,
    },
    {
      name: "Events",
      href: `/manage/${id}/events`,
      icon: CalendarIcon,
      current: location.pathname === `/manage/${id}/events` ? true : false,
    },
  ];

  return league.isLoading ? (
    <Loading />
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

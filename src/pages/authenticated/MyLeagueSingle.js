import React from "react";
import useLeague from "../../hooks/queries/useLeague";
import { useParams, useLocation } from "react-router-dom";
import { InformationCircleIcon, CalendarIcon } from "@heroicons/react/outline";
import Info from "../../components/alerts/Info";
import Error from "../../components/alerts/Error";
import SubTitle from "../../components/SubTitle";
import WithSecondaryMenu from "../../components/content/WithSecondaryMenu";
import MyLeagueRoutes from "../../components/routes/MyLeaguesRoutes";
import Content from "../../components/content/Content";

const MyLeagueSingle = () => {
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
      name: "Schedule",
      href: `/my-leagues/${leagueId}/events`,
      icon: CalendarIcon,
      current:
        location.pathname === `/my-leagues/${leagueId}/events` ? true : false,
    },
  ];
  return (
    <Content title="My League">
      {league.isLoading ? (
        <Info />
      ) : league.isError ? (
        <Error message={league.error.message} />
      ) : (
        <div>
          {league.isIdle ? null : league.data ? (
            <>
              <SubTitle title={league.data.name} />
              <WithSecondaryMenu navigation={navigation}>
                <MyLeagueRoutes league={league.data} />
              </WithSecondaryMenu>
            </>
          ) : (
            <Error message="League not found." />
          )}
          {league.isFetching ? "Updating..." : null}
        </div>
      )}
    </Content>
  );
};

export default MyLeagueSingle;

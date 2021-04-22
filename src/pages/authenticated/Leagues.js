import React from "react";
import Content from "../../components/content/Content";
import Aside from "../../components/content/Aside";
import LeagueSearch from "../../components/leagues/LeagueSearch";
import LeagueRoutes from "../../components/routes/LeagueRoutes";

const Leagues = () => {
  return (
    <>
      <Content title="Leagues">
        <LeagueRoutes />
      </Content>
      <Aside>
        <LeagueSearch />
      </Aside>
    </>
  );
};

export default Leagues;

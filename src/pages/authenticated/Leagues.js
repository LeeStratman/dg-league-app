import React from "react";
import { Switch, Route } from "react-router-dom";
import Content from "../../components/Content";
import LeagueSearch from "../../components/leagues/LeagueSearch";
import SingleLeague from "../../components/leagues/SingleLeague";

const Leagues = () => {
  return (
    <Content title="Leagues" Aside={LeagueSearch}>
      <Switch>
        <Route path="/leagues/:id" exact component={SingleLeague} />
        <Route path="*" component={() => <div>No league selected</div>} />
      </Switch>
    </Content>
  );
};

export default Leagues;

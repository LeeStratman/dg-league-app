import React from "react";
import { Switch, Route } from "react-router-dom";
import SingleLeague from "../leagues/SingleLeague";

const LeagueRoutes = () => {
  return (
    <Switch>
      <Route path="/leagues/:id" exact component={SingleLeague} />
      <Route path="*" component={() => <div>No league selected</div>} />
    </Switch>
  );
};

export default LeagueRoutes;

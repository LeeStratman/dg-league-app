import React from "react";
import { Switch, Route } from "react-router-dom";
import Info from "../alerts/Info";
import SingleLeague from "../leagues/SingleLeague";

const LeagueRoutes = () => {
  return (
    <Switch>
      <Route path="/leagues/:leagueId" exact>
        <SingleLeague />
      </Route>
      <Route
        path="*"
        component={() => (
          <Info
            message="
          No league selected. To find a league, please enter a name in the
            searchbox."
          />
        )}
      />
    </Switch>
  );
};

export default LeagueRoutes;

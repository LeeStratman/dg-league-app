import React from "react";
import { Switch, Route } from "react-router-dom";
import Info from "../alerts/Info";
import JoinLeague from "../../pages/authenticated/JoinLeague";

const LeagueRoutes = () => {
  return (
    <Switch>
      <Route path="/leagues/:leagueId" exact>
        <JoinLeague />
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

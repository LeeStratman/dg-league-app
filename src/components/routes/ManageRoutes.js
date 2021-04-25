import React from "react";
import { Switch, Route } from "react-router-dom";
import ManageLeague from "../../pages/authenticated/ManageLeague";
import ManageLeagues from "../leagues/ManageLeagues";
import ManageEvent from "../../pages/authenticated/ManageEvent";

const ManageRoutes = () => {
  return (
    <Switch>
      <Route path="/manage/:leagueId/events/:eventId" exact>
        <ManageEvent />
      </Route>
      <Route path="/manage/:leagueId">
        <ManageLeague />
      </Route>
      <Route path="/manage">
        <ManageLeagues />
      </Route>
    </Switch>
  );
};

export default ManageRoutes;

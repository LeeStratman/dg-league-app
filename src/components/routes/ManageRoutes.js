import React from "react";
import { Switch, Route } from "react-router-dom";
import ManageLeague from "../../pages/authenticated/ManageLeague";
import ManageLeagues from "../leagues/ManageLeagues";

const ManageRoutes = () => {
  return (
    <Switch>
      <Route path="/manage/:leagueId" component={ManageLeague} />
      <Route path="*" component={ManageLeagues} />
    </Switch>
  );
};

export default ManageRoutes;

import React from "react";
import { Switch, Route } from "react-router-dom";
import ManageLeague from "../leagues/ManageLeague";
import ManageLeagues from "../leagues/ManageLeagues";

const ManageRoutes = () => {
  return (
    <Switch>
      <Route path="/manage/:id" component={ManageLeague} />
      <Route path="*" component={ManageLeagues} />
    </Switch>
  );
};

export default ManageRoutes;

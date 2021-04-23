import React from "react";
import { Switch, Route } from "react-router-dom";
import ManageLeague from "../../pages/authenticated/ManageLeague";
import ManageLeagues from "../leagues/ManageLeagues";
import ManageEvent from "../../pages/authenticated/ManageEvent";

const ManageRoutes = () => {
  return (
    <Switch>
      <Route path="/manage/events/:eventId" exact component={ManageEvent} />
      <Route path="/manage/:leagueId" component={ManageLeague} />
      <Route path="*" component={ManageLeagues} />
    </Switch>
  );
};

export default ManageRoutes;

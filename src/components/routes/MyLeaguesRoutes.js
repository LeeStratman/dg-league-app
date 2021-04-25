import React from "react";
import { Switch, Route } from "react-router-dom";
import MyEvent from "../../pages/authenticated/MyEvent";
import MyLeague from "../../pages/authenticated/MyLeague";
import MyLeagues from "../../pages/authenticated/MyLeagues";

const MyLeaguesRoutes = () => {
  return (
    <Switch>
      <Route path="/my-leagues/:leagueId/events/:eventId" exact>
        <MyEvent />
      </Route>
      <Route path="/my-leagues/:leagueId">
        <MyLeague />
      </Route>
      <Route path="/my-leagues">
        <MyLeagues />
      </Route>
    </Switch>
  );
};

export default MyLeaguesRoutes;

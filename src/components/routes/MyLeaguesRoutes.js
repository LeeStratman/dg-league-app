import React from "react";
import { Switch, Route } from "react-router-dom";
import MyLeague from "../../pages/authenticated/MyLeague";
import MyLeagues from "../../pages/authenticated/MyLeagues";
import MyEvent from "../../pages/authenticated/MyEvent";
import MyScorecard from "../../pages/authenticated/MyScorecard";

const MyLeaguesRoutes = () => {
  return (
    <Switch>
      <Route
        path="/my-leagues/:leagueId/events/:eventId/scorecards/:scorecardId"
        exact
      >
        <MyScorecard />
      </Route>
      <Route path="/my-leagues/:leagueId/events/:eventId">
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

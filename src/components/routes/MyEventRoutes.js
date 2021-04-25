import React from "react";
import { Switch, Route } from "react-router-dom";
import MyEventDetails from "../../pages/authenticated/MyEventDetails";
import MyEventResults from "../../pages/authenticated/MyEventResults";

const MyEventRoutes = ({ event }) => {
  return (
    <Switch>
      <Route path="/my-leagues/:leagueId/events/:eventId/results" exact>
        <MyEventResults event={event} />
      </Route>
      <Route path="/my-leagues/:leagueId/events/:eventId">
        <MyEventDetails event={event} />
      </Route>
    </Switch>
  );
};

export default MyEventRoutes;

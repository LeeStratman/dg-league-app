import React from "react";
import { Switch, Route } from "react-router-dom";
import EditEventDetails from "../../pages/authenticated/EditEventDetails";
import ManageEventResults from "../../pages/authenticated/ManageEventResults";

const ManageEventRoutes = ({ event }) => {
  return (
    <Switch>
      <Route path="/manage/:leagueId/events/:eventId/results">
        <ManageEventResults event={event} />
      </Route>
      <Route path="/manage/:leagueId/events/:eventId">
        <EditEventDetails event={event} />
      </Route>
    </Switch>
  );
};

export default ManageEventRoutes;

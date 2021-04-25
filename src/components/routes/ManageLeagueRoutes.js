import React from "react";
import { Switch, Route } from "react-router-dom";
import EditLeagueEvents from "../../pages/authenticated/EditLeagueEvents";
import EditLeagueCourses from "../../pages/authenticated/EditLeagueCourses";
import CreateEvent from "../../pages/authenticated/CreateEvent";
import EditLeagueDetails from "../../pages/authenticated/EditLeagueDetails";

const ManageLeagueRoutes = ({ league }) => {
  return (
    <Switch>
      <Route path="/manage/:leagueId/courses">
        <EditLeagueCourses league={league} />
      </Route>
      <Route path="/manage/:leagueId/events">
        <EditLeagueEvents leagueId={league._id} />
      </Route>
      <Route path="/manage/:leagueId/create-event">
        <CreateEvent leagueId={league._id} />
      </Route>
      <Route path="/manage/:leagueId" exact>
        <EditLeagueDetails league={league} />
      </Route>
    </Switch>
  );
};

export default ManageLeagueRoutes;

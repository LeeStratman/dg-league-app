import React from "react";
import { Switch, Route } from "react-router-dom";
import LeagueEvents from "../../pages/authenticated/LeagueEvents";
import AddCourse from "../../components/leagues/AddCourse";
import CreateEvent from "../../pages/authenticated/CreateEvent";
import EditLeagueDetails from "../../pages/authenticated/EditLeagueDetails";

const ManageLeagueRoutes = ({ league }) => {
  return (
    <Switch>
      <Route path="/manage/:id/add-course">
        <AddCourse league={league} />
      </Route>
      <Route path="/manage/:id/events">
        <LeagueEvents leagueId={league._id} />
      </Route>
      <Route path="/manage/:id/create-event">
        <CreateEvent leagueId={league._id} />
      </Route>
      <Route path="/manage/*">
        <EditLeagueDetails league={league} />
      </Route>
    </Switch>
  );
};

export default ManageLeagueRoutes;

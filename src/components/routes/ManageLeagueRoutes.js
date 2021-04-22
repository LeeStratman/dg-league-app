import React from "react";
import { Switch, Route } from "react-router-dom";
import LeagueEvents from "../../components/events/LeagueEvents";
import AddCourse from "../../components/leagues/AddCourse";
import CreateEvent from "../../components/leagues/CreateEvent";
import EditLeagueDetails from "../../pages/authenticated/EditLeagueDetails";

const ManageLeagueRoutes = ({ league }) => {
  return (
    <Switch>
      <Route path="/manage/:id/add-course" exact>
        <AddCourse league={league} />
      </Route>
      <Route path="/manage/:id/events" exact>
        <LeagueEvents league={league} />
      </Route>
      <Route path="/manage/:id/create-event" exact>
        <CreateEvent league={league} />
      </Route>
      <Route path="*">
        <EditLeagueDetails league={league} />
      </Route>
    </Switch>
  );
};

export default ManageLeagueRoutes;

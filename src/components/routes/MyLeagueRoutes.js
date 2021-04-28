import React from "react";
import { Switch, Route } from "react-router-dom";
import MyLeagueDetails from "../../pages/authenticated/MyLeagueDetails";
import MyLeagueEvents from "../../pages/authenticated/MyLeagueEvents";
import MyLeagueCourses from "../../pages/authenticated/MyLeagueCourses";
import MyLeagueResults from "../../pages/authenticated/MyLeagueResults";

const MyLeagueRoutes = ({ league }) => {
  return (
    <Switch>
      <Route path="/my-leagues/:leagueId/courses">
        <MyLeagueCourses league={league} />
      </Route>
      <Route path="/my-leagues/:leagueId/events">
        <MyLeagueEvents leagueId={league._id} />
      </Route>
      <Route path="/my-leagues/:leagueId/results">
        <MyLeagueResults leagueId={league._id} />
      </Route>
      <Route path="/my-leagues/:leagueId" exact>
        <MyLeagueDetails league={league} />
      </Route>
    </Switch>
  );
};

export default MyLeagueRoutes;

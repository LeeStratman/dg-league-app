import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "../../pages/authenticated/Dashboard";
import Manage from "../../pages/authenticated/Manage";
import Courses from "../../pages/authenticated/Courses";
import Leagues from "../../pages/authenticated/Leagues";
import CreateLeague from "../../pages/authenticated/CreateLeague";
import Schedule from "../../pages/authenticated/Schedule";
import MyLeaguesWrapper from "../../pages/authenticated/MyLeaguesWrapper";
import CreateScorecard from "../../pages/authenticated/CreateScorecard";

const AuthenticatedRoutes = () => (
  <Switch>
    <Route path="/" exact>
      <Dashboard />
    </Route>
    <Route path="/leagues">
      <Leagues />
    </Route>
    <Route path="/courses">
      <Courses />
    </Route>
    <Route path="/schedule">
      <Schedule />
    </Route>
    <Route path="/scorecards">
      <Dashboard />
    </Route>
    <Route path="/manage">
      <Manage />
    </Route>
    <Route path="/settings" exact>
      <Dashboard />
    </Route>
    <Route path="/create-league" exact>
      <CreateLeague />
    </Route>
    <Route path="/create-scorecard" exact>
      <CreateScorecard />
    </Route>
    <Route path="/my-leagues">
      <MyLeaguesWrapper />
    </Route>
    <Route path="*">
      <Redirect to="/" />
    </Route>
  </Switch>
);

export default AuthenticatedRoutes;

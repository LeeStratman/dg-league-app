import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "../pages/authenticated/Dashboard";
import Manage from "../pages/authenticated/Manage";
import Courses from "../pages/authenticated/Courses";
import Leagues from "../pages/authenticated/Leagues";
import CreateLeague from "../pages/authenticated/CreateLeague";

const LinkRouter = () => (
  <Switch>
    <Route path="/" exact>
      <Dashboard />
    </Route>
    <Route path="/leagues">
      <Leagues />
    </Route>
    <Route path="/courses" component={Courses}>
      <Courses />
    </Route>
    <Route path="/schedule">
      <Dashboard />
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
    <Route path="*">
      <Redirect to="/" />
    </Route>
  </Switch>
);

export default LinkRouter;

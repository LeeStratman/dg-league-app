import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "../pages/authenticated/Dashboard";
import Manage from "../pages/authenticated/Manage";
import Courses from "../pages/authenticated/Courses";
import Leagues from "../pages/authenticated/Leagues";

const LinkRouter = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/leagues" component={Leagues} />
    <Route path="/courses" component={Courses} />
    <Route path="/schedule" component={Dashboard} />
    <Route path="/scorecards" component={Dashboard} />
    <Route path="/manage" component={Manage} />
    <Route path="/settings" exact component={Dashboard} />
    <Route path="*">
      <Redirect to="/" />
    </Route>
  </Switch>
);

export default LinkRouter;

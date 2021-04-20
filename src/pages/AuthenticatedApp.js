import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./authenticated/Dashboard";

const AuthenticatedApp = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </>
  );
};

export default AuthenticatedApp;

import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./authenticated/Dashboard";

const AuthenticatedApp = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Dashboard} />
      </Switch>
    </>
  );
};

export default AuthenticatedApp;

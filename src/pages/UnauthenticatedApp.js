import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";

const UnauthenticatedApp = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  );
};

export default UnauthenticatedApp;

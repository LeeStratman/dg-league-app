import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./unauthenticated/Home";
import Signup from "./unauthenticated/Signup";
import Header from "../components/Header";

const UnauthenticatedApp = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={Signup} />
      </Switch>
    </>
  );
};

export default UnauthenticatedApp;

import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import Home from "./unauthenticated/Home";
import Signup from "./unauthenticated/Signup";
import Signin from "./unauthenticated/Signin";

const UnauthenticatedApp = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
      </Switch>
    </div>
  );
};

export default UnauthenticatedApp;

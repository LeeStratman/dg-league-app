import React from "react";
import Content from "../../components/Content";
import { Switch, Route } from "react-router-dom";
import ManageLeague from "../../components/leagues/ManageLeague";
import ManageLeagues from "../../components/leagues/ManageLeagues";

const Manage = () => {
  return (
    <Content title="Manage My Leagues">
      <Switch>
        <Route path="/manage/:id" exact component={ManageLeague} />
        <Route path="/manage" component={ManageLeagues} />
      </Switch>
    </Content>
  );
};

export default Manage;

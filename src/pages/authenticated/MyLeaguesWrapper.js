import React from "react";
import Content from "../../components/content/Content";
import MyLeaguesRoutes from "../../components/routes/MyLeaguesRoutes";

const MyLeaguesWrapper = () => {
  return (
    <Content title="My Leagues">
      <MyLeaguesRoutes />
    </Content>
  );
};

export default MyLeaguesWrapper;

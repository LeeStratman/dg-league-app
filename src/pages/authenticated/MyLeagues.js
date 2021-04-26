import React from "react";
import useUser from "../../hooks/queries/useUser";
import LeaguesTable from "../../components/leagues/LeaguesTable";
import SubContent from "../../components/content/SubContent";
import SubHeader from "../../components/SubHeader";
import ServerContent from "../../components/content/ServerContent";

const MyLeagues = () => {
  const user = useUser();
  return (
    <SubContent>
      <SubHeader title="My Leagues" />
      <ServerContent content={user}>
        <LeaguesTable leagues={user.data?.leagues} />
      </ServerContent>
    </SubContent>
  );
};

export default MyLeagues;

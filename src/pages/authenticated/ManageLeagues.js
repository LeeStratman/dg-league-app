import React from "react";
import useUser from "../../hooks/queries/useUser";
import LeaguesTable from "../../components/leagues/LeaguesTable";
import SubContent from "../../components/content/SubContent";
import HeaderWithLink from "../../components/HeaderWithLink";
import ServerContent from "../../components/content/ServerContent";

const ManageLeagues = () => {
  const user = useUser();
  return (
    <SubContent>
      <HeaderWithLink
        title="Leagues"
        linkText="Create New League"
        href="/create-league"
      />
      <ServerContent content={user}>
        <LeaguesTable
          leagues={user.data?.organizedLeagues}
          urlPrefix="manage"
        />
      </ServerContent>
    </SubContent>
  );
};

export default ManageLeagues;

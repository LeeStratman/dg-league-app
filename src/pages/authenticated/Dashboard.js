import React from "react";
import Content from "../../components/content/Content";
import useUser from "../../hooks/queries/useUser";
import Actions from "../../components/Actions";
import EventScheduleTable from "../../components/events/EventScheduleTable";
import SubHeader from "../../components/SubHeader";
import SubContent from "../../components/content/SubContent";
import ServerContent from "../../components/content/ServerContent";

const Dashboard = () => {
  const user = useUser();

  return (
    <Content title="Dashboard">
      <SubContent>
        <Actions />
      </SubContent>
      <SubContent>
        <SubHeader title="Upcoming Events" />
        <ServerContent content={user}>
          <EventScheduleTable events={user.data.upcomingEvents} />
        </ServerContent>
      </SubContent>
    </Content>
  );
};

export default Dashboard;

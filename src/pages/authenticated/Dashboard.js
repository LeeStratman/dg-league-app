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
        <ServerContent content={user}>
          <div className="mb-8">
            <SubHeader title="Today's Events" />
            <EventScheduleTable events={user.data?.todayEvents} />
          </div>
        </ServerContent>
      </SubContent>
    </Content>
  );
};

export default Dashboard;

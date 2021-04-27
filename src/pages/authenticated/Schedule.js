import React from "react";
import Content from "../../components/content/Content";
import SubContent from "../../components/content/SubContent";
import EventScheduleTable from "../../components/events/EventScheduleTable";
import SubHeader from "../../components/SubHeader";
import useUser from "../../hooks/queries/useUser";
import ServerContent from "../../components/content/ServerContent";

const Schedule = () => {
  const user = useUser();

  return (
    <>
      <Content title="Schedule">
        <SubContent>
          <ServerContent content={user}>
            <div className="mb-8">
              <SubHeader title="Today's Events" />
              <EventScheduleTable events={user.data?.todayEvents} />
            </div>
            <div className="mb-8">
              <SubHeader title="Upcoming Events" />
              <EventScheduleTable events={user.data?.upcomingEvents} />
            </div>
            <div className="mb-8">
              <SubHeader title="Recent Events" />
              <EventScheduleTable events={user.data?.recentEvents} />
            </div>
          </ServerContent>
        </SubContent>
      </Content>
    </>
  );
};

export default Schedule;

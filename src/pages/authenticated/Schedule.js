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
          <SubHeader title="Upcoming Events" />
          <ServerContent content={user}>
            <EventScheduleTable events={user.data?.upcomingEvents} />
          </ServerContent>
        </SubContent>
      </Content>
    </>
  );
};

export default Schedule;

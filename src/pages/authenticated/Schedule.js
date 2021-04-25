import React from "react";
import Content from "../../components/content/Content";
import EventScheduleTable from "../../components/events/EventScheduleTable";
import useUser from "../../hooks/queries/useUser";

const Schedule = () => {
  const user = useUser();
  console.log(user);
  return (
    <>
      <Content title="Schedule">
        {/* <CourseRoutes /> */}
        {user.isLoading ? (
          "Loading"
        ) : user.isError ? (
          "Error!"
        ) : user.isSuccess ? (
          <EventScheduleTable
            events={user.data.upcomingEvents}
            title="Upcoming Events"
          />
        ) : (
          "Update user"
        )}
      </Content>
    </>
  );
};

export default Schedule;

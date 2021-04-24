import React from "react";
import Content from "../../components/content/Content";
import EventScheduleTable from "../../components/events/EventScheduleTable";
import useUser from "../../hooks/queries/useUser";

const Schedule = () => {
  const user = useUser();
  return (
    <>
      <Content title="Schedule">
        {/* <CourseRoutes /> */}
        {user.isLoading ? (
          "Loading"
        ) : user.isError ? (
          "Error!"
        ) : user.isSuccess ? (
          <EventScheduleTable events={user.data.events} />
        ) : (
          "Update user"
        )}
      </Content>
    </>
  );
};

export default Schedule;

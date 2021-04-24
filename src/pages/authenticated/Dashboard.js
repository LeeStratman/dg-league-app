import React from "react";
import Content from "../../components/content/Content";
import useUser from "../../hooks/queries/useUser";
import Error from "../../components/alerts/Error";
import Info from "../../components/alerts/Info";
import Actions from "../../components/Actions";
import EventScheduleTable from "../../components/events/EventScheduleTable";

const Dashboard = () => {
  const user = useUser();

  return (
    <Content title="Dashboard">
      <Actions />
      {user.isLoading ? (
        <Info />
      ) : user.isError ? (
        <Error message={user.error.message} />
      ) : (
        <div>
          {user.data ? (
            <EventScheduleTable
              events={user.data.upcomingEvents}
              title="Upcoming Events"
            />
          ) : (
            <div>Unable to load user data!</div>
          )}
          {user.isFetching ? "Updating..." : null}
        </div>
      )}
    </Content>
  );
};

export default Dashboard;

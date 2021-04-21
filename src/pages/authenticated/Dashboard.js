import React from "react";
import Content from "../../components/Content";
import useUser from "../../hooks/useUser";
import Error from "../../components/alerts/error";
import Loading from "../../components/alerts/loading";

const Dashboard = () => {
  const user = useUser();

  return (
    <Content title="Dashboard">
      {user.isLoading ? (
        <Loading />
      ) : user.isError ? (
        <Error message={user.error.message} />
      ) : (
        <div>
          {user.data ? (
            <div>{user.data.firstName}</div>
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

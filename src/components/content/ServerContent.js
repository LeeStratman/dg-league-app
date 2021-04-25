import React from "react";
import Info from "../../components/alerts/Info";
import Error from "../../components/alerts/Error";

const EditLeagueEvents = ({ content, children }) => {
  return (
    <div className="my-4">
      {content.isLoading ? (
        <Info />
      ) : content.isError ? (
        <Error message={content.error.message} />
      ) : content.isIdle ? null : content.data ? (
        <div>{children}</div>
      ) : (
        <Error message="Content failed to load." />
      )}
      {content.isFetching ? "Updating..." : null}
    </div>
  );
};

export default EditLeagueEvents;

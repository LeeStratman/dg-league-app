import React from "react";
import { useParams, useLocation } from "react-router-dom";
import Loading from "../../components/alerts/Loading";
import Error from "../../components/alerts/Error";
import useEvent from "../../hooks/queries/useEvent";
import { InformationCircleIcon } from "@heroicons/react/outline";
import WithSecondaryMenu from "../../components/content/WithSecondaryMenu";
import ManageEventRoutes from "../../components/routes/ManageEventRoutes";
import SubTitle from "../../components/SubTitle";

const ManageEvent = () => {
  const { leagueId, eventId } = useParams();
  const event = useEvent(eventId);
  const location = useLocation();

  const navigation = [
    {
      name: "Details",
      href: `/manage/events/${eventId}`,
      icon: InformationCircleIcon,
      current: location.pathname === `/manage/events/${eventId}` ? true : false,
    },
    {
      name: "Results",
      href: `/manage/events/${eventId}/results`,
      icon: InformationCircleIcon,
      current:
        location.pathname === `/manage/events/${eventId}/results`
          ? true
          : false,
    },
  ];

  return event.isLoading ? (
    <Loading />
  ) : event.isError ? (
    <Error message={event.error.message} />
  ) : (
    <div>
      {event.isIdle ? null : event.data ? (
        <>
          <SubTitle title={event.data.name} />
          <WithSecondaryMenu navigation={navigation}>
            <ManageEventRoutes event={event.data} />
          </WithSecondaryMenu>
        </>
      ) : (
        <Error message="League not found." />
      )}
      {event.isFetching ? "Updating..." : null}
    </div>
  );
};

export default ManageEvent;

import React, { useState } from "react";
import useCreateScorecard from "../../hooks/mutations/useCreateScorecard";
import useUser from "../../hooks/queries/useUser";
import { Redirect } from "react-router-dom";
import SubHeader from "../SubHeader";
import EventDropdown from "./EventDropdown";
import ServerContent from "../content/ServerContent";
import Info from "../alerts/Info";

const CreateScorecardForm = () => {
  const [event, setEvent] = useState("");
  const user = useUser();
  const createScorecard = useCreateScorecard();

  return createScorecard.isSuccess ? (
    <Redirect
      to={`/my-leagues/${event.leagueId._id}/events/${event._id}/scorecards/${createScorecard.data.data._id}`}
    />
  ) : user.data?.todayEvents.length > 0 ? (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createScorecard.mutate({
          eventId: event._id,
          scorecard: {
            players: [user.data._id],
            numHoles: event.layout.numHoles,
          },
        });
      }}
    >
      <div className="shadow sm:rounded-md">
        <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
          <div>
            <SubHeader title="Create Scorecard" />
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-3 sm:col-span-2">
              <label
                htmlFor="events"
                className="block text-sm font-medium text-gray-700"
              >
                Choose Event
              </label>
              <div className="mt-1 rounded-md shadow-sm flex">
                <ServerContent content={user}>
                  <EventDropdown
                    selected={event}
                    setSelected={setEvent}
                    options={user.data?.todayEvents}
                  />
                </ServerContent>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button type="submit" className="btn_primary">
            {createScorecard.isLoading
              ? "Creating..."
              : createScorecard.isError
              ? "Error!"
              : createScorecard.isSuccess
              ? "Created!"
              : "Create Scorecard"}
          </button>
        </div>
      </div>
    </form>
  ) : (
    <Info message="You don't have any events today to submit a scorecard." />
  );
};

export default CreateScorecardForm;

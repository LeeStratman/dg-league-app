import React, { useState } from "react";
import useCreateEvent from "../../hooks/mutations/useCreateEvent";
import useLeague from "../../hooks/queries/useLeague";
import Error from "../../components/alerts/Error";
import Info from "../alerts/Info";
import CourseDropdown from "./CourseDropdown";
import { prepareDate } from "../../utils/date";

const CreateEventForm = ({ leagueId }) => {
  const league = useLeague(leagueId);
  const createEvent = useCreateEvent();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [course, setCourse] = useState("");
  const [numHoles, setNumHoles] = useState(18);
  const [layoutDescription, setLayoutDescription] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createEvent.mutate({
          leagueId,
          name,
          description,
          date: prepareDate(date),
          layout: {
            description: layoutDescription,
            numHoles: numHoles,
            course,
          },
        });
      }}
    >
      <div className="shadow sm:rounded-md sm:overflow-hidden">
        <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Create Event
            </h3>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-3 sm:col-span-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Event Name
              </label>
              <div className="mt-1 rounded-md shadow-sm flex">
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  name="name"
                  id="name"
                  className="input_basic"
                />
              </div>
            </div>

            <div className="col-span-3 sm:col-span-2">
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700"
              >
                Event Date
              </label>
              <div className="mt-1 rounded-md shadow-sm flex">
                <input
                  onChange={(e) => setDate(e.target.value)}
                  value={date}
                  type="date"
                  name="name"
                  id="name"
                  className="input_basic"
                />
              </div>
            </div>

            <div className="col-span-3">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <div className="mt-1">
                <textarea
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  id="description"
                  name="description"
                  rows={3}
                  className="input_basic"
                />
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Brief description of your league.
              </p>
            </div>
          </div>

          <div className="col-span-6 sm:col-span-6 lg:col-span-2">
            <label
              htmlFor="course"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Course
            </label>
            {league.isLoading ? (
              <Info />
            ) : league.isError ? (
              <Error message={league.error.message} />
            ) : (
              <div className="mt-2">
                {league.isIdle ? null : league.data?.courses?.length > 0 ? (
                  <>
                    <CourseDropdown
                      selected={course}
                      setSelected={setCourse}
                      options={league.data.courses}
                    />
                    <div className="mt-4 col-span-3">
                      <label
                        htmlFor="numHoles"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Number of Holes
                      </label>
                      <div className="mt-1">
                        <input
                          onChange={(e) => setNumHoles(e.target.value)}
                          value={numHoles}
                          type="number"
                          name="numHoles"
                          id="numHoles"
                          className="input_basic"
                        />
                      </div>
                    </div>
                    <div className="mt-4 col-span-3">
                      <label
                        htmlFor="layoutDescription"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Layout Notes
                      </label>
                      <div className="mt-1">
                        <textarea
                          onChange={(e) => setLayoutDescription(e.target.value)}
                          value={layoutDescription}
                          id="layoutDescription"
                          name="layoutDescription"
                          rows={3}
                          className="input_basic"
                        />
                      </div>
                      <p className="mt-2 text-sm text-gray-500">
                        Provide layout instructions to the players.
                      </p>
                    </div>
                  </>
                ) : (
                  <Error message="No courses found!" />
                )}
                {league.isFetching ? "Getting courses..." : null}
              </div>
            )}
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button type="submit" className="btn_primary">
            {createEvent.isLoading
              ? "Saving..."
              : createEvent.isError
              ? "Error!"
              : createEvent.isSuccess
              ? "Saved!"
              : "Create Event"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreateEventForm;

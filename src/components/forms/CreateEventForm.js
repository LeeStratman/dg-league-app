import React, { useState } from "react";
import useCreateEvent from "../../hooks/mutations/useCreateEvent";

const CreateEventForm = ({ leagueId }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const createEvent = useCreateEvent();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createEvent.mutate({ leagueId, name, description, date });
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
                  type="text"
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

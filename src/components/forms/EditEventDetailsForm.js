import React, { useState } from "react";
import useUpdateEvent from "../../hooks/mutations/useUpdateEvent";

const EditEventDetailsForm = ({ event }) => {
  const [name, setName] = useState(event.name);
  const [description, setDescription] = useState(event.description);
  const [date, setDate] = useState(() => {
    function appendLeadingZeroes(n) {
      if (n <= 9) {
        return "0" + n;
      }
      return n;
    }
    let date = new Date(event.date);

    return (
      date.getFullYear() +
      "-" +
      appendLeadingZeroes(date.getMonth() + 1) +
      "-" +
      appendLeadingZeroes(date.getDate())
    );
  });
  const updateEvent = useUpdateEvent();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        updateEvent.mutate({
          _id: event._id,
          name,
          description,
          date,
        });
      }}
    >
      <div className="shadow sm:rounded-md sm:overflow-hidden">
        <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Details
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              This information will be displayed publicly.
            </p>
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
                Extra info about your event.
              </p>
            </div>
          </div>
          <div className="col-span-6 sm:col-span-6 lg:col-span-2">
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700"
            >
              Date
            </label>
            <input
              onChange={(e) => setDate(e.target.value)}
              value={date}
              type="date"
              name="date"
              id="date"
              className="mt-1 input_basic"
            />
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button type="submit" className="btn_primary">
            {updateEvent.isLoading
              ? "Saving..."
              : updateEvent.isError
              ? "Error!"
              : updateEvent.isSuccess
              ? "Saved!"
              : "Update League"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditEventDetailsForm;

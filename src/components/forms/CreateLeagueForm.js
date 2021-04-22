import React, { useState } from "react";
import useCreateLeague from "../../hooks/useCreateLeague";
import { Redirect } from "react-router-dom";

const CreateLeagueForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const createLeague = useCreateLeague();

  return createLeague.isSuccess ? (
    <Redirect to={`/manage`} />
  ) : (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createLeague.mutate({ name, description, city, state, zip });
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
                League Name
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
                Brief description of your league.
              </p>
            </div>
          </div>
          <div className="col-span-6 sm:col-span-6 lg:col-span-2">
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700"
            >
              City
            </label>
            <input
              onChange={(e) => setCity(e.target.value)}
              value={city}
              type="text"
              name="city"
              id="city"
              className="mt-1 input_basic"
            />
          </div>

          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
            <label
              htmlFor="state"
              className="block text-sm font-medium text-gray-700"
            >
              State
            </label>
            <input
              onChange={(e) => setState(e.target.value)}
              value={state}
              type="text"
              name="state"
              id="state"
              className="mt-1 input_basic"
            />
          </div>

          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
            <label
              htmlFor="postal_code"
              className="block text-sm font-medium text-gray-700"
            >
              ZIP / Postal
            </label>
            <input
              onChange={(e) => setZip(e.target.value)}
              value={zip}
              type="text"
              name="postal_code"
              id="postal_code"
              autoComplete="postal-code"
              className="mt-1 input_basic"
            />
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button type="submit" className="btn_primary">
            {createLeague.isLoading
              ? "Saving..."
              : createLeague.isError
              ? "Error!"
              : createLeague.isSuccess
              ? "Saved!"
              : "Create League"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreateLeagueForm;

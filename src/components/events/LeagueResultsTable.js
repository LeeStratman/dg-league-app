import React, { useMemo } from "react";
import Info from "../alerts/Info";

const calculateResults = (events = []) => {
  let resultsToReturn = [];

  events.forEach((event) => {
    event.results.forEach((result) => {
      const match = resultsToReturn.find(
        (resultToReturn) => resultToReturn.player._id === result.player._id
      );

      if (match) {
        match.points += result.points;
      } else {
        resultsToReturn.push(result);
      }
    });
  });

  return resultsToReturn;
};

const LeagueResultsTable = ({ events = [] }) => {
  const results = useMemo(() => calculateResults(events), [events]);

  return (
    <>
      <div className="mt-4 flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            {results.length > 0 ? (
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Player
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Points
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.map((result, eventIdx) => (
                      <tr
                        key={result.player._id}
                        className={
                          eventIdx % 2 === 0 ? "bg-white" : "bg-gray-50"
                        }
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {`${result.player.firstName} ${result.player.lastName}`}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {`${result.points}`}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="mt-2">
                <Info message="There are currently no results." />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LeagueResultsTable;

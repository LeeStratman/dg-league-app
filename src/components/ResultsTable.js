import React from "react";
import { useTable, useSortBy } from "react-table";
import Info from "./alerts/Info";

const ResultsTable = ({ scorecards, numHoles, results }) => {
  const data = React.useMemo(() => {
    let scoreData = [];

    scorecards.forEach((card) => {
      if (card.status === "pending") {
        return;
      }

      const scores = card.scores.map((score) => {
        let total = 0;
        const holes = score.holes.reduce((acc, hole, index) => {
          total = total + hole;
          return { ...acc, [`hole-${index}`]: hole };
        }, {});

        let points = "-";

        const pointResult = results.find(
          (result) => result.player._id === score.player._id
        );

        if (pointResult) {
          points = pointResult.points;
        }

        return {
          player: `${score.player.firstName} ${score.player.lastName}`,
          ...holes,
          total,
          points,
        };
      });

      scoreData = scoreData.concat(scores);
    });

    const sortResults = (results) => {
      if (results.length < 2) {
        return results;
      }

      const middle = Math.floor(results.length / 2);
      const left = results.slice(0, middle);
      const right = results.slice(middle);
      return mergeResults(sortResults(left), sortResults(right));
    };

    const mergeResults = (left, right) => {
      const sorted = [];
      while (left.length && right.length) {
        if (left[0].total <= right[0].total) {
          sorted.push(left.shift());
        } else {
          sorted.push(right.shift());
        }
      }

      const results = [...sorted, ...left, ...right];
      return results;
    };

    return sortResults(scoreData);
  }, [scorecards, results]);

  const columns = React.useMemo(() => {
    let columnData = [{ Header: "Player", accessor: "player" }];
    for (let i = 0; i < numHoles; i++) {
      columnData.push({ Header: `${i + 1}`, accessor: `hole-${i}` });
    }
    columnData.push({ Header: "Total", accessor: "total" });
    columnData.push({ Header: "Points", accessor: "points" });
    return columnData;
  }, [numHoles]);

  const tableInstance = useTable({ columns, data }, useSortBy);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return data.length > 0 ? (
    <table
      {...getTableProps()}
      className="min-w-full divide-y divide-gray-200 bg-white shadow sm:rounded-md"
    >
      <thead className="bg-gray-50">
        {
          // Loop over the header rows
          headerGroups.map((headerGroup) => (
            // Apply the header row props
            <tr {...headerGroup.getHeaderGroupProps()}>
              {
                // Loop over the headers in each row
                headerGroup.headers.map((column) => (
                  // Apply the header cell props
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    <div className="flex">
                      <span className="inline">{column.render("Header")}</span>
                      <span className="inline">
                        {column.isSorted ? (
                          column.isSortedDesc ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 13l-5 5m0 0l-5-5m5 5V6"
                              />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M7 11l5-5m0 0l5 5m-5-5v12"
                              />
                            </svg>
                          )
                        ) : (
                          ""
                        )}
                      </span>
                    </div>
                  </th>
                ))
              }
            </tr>
          ))
        }
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, rowIdx) => {
          prepareRow(row);
          return (
            <tr
              {...row.getRowProps()}
              className={rowIdx % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  ) : (
    <Info message="There are currently no results available." />
  );
};

export default ResultsTable;

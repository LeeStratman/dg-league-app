import React from "react";
import { useTable, useSortBy } from "react-table";

const ResultsTable = ({ scorecards, numHoles }) => {
  const data = React.useMemo(() => {
    let scoreData = [];
    scorecards.forEach((card) => {
      const scores = card.scores.map((score) => {
        let total = 0;
        const holes = score.holes.reduce((acc, hole, index) => {
          total = total + hole;
          return { ...acc, [`hole-${index}`]: hole };
        }, {});

        return {
          player: `${score.player.firstName} ${score.player.lastName}`,
          ...holes,
          total,
        };
      });
      scoreData = scoreData.concat(scores);
    });

    return scoreData;
  }, [scorecards]);

  const columns = React.useMemo(() => {
    let columnData = [{ Header: "Player", accessor: "player" }];
    for (let i = 0; i < numHoles; i++) {
      columnData.push({ Header: `${i + 1}`, accessor: `hole-${i}` });
    }
    columnData.push({ Header: "Total", accessor: "total" });
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

  return (
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
                    {
                      // Render the header
                      column.render("Header")
                    }
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                        : ""}
                    </span>
                  </th>
                ))
              }
            </tr>
          ))
        }
      </thead>
      {/* Apply the table body props */}
      <tbody {...getTableBodyProps()}>
        {
          // Loop over the table rows
          rows.map((row) => {
            // Prepare the row for display
            prepareRow(row);
            return (
              // Apply the row props
              <tr {...row.getRowProps()}>
                {
                  // Loop over the rows cells
                  row.cells.map((cell) => {
                    // Apply the cell props
                    return (
                      <td
                        {...cell.getCellProps()}
                        className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                      >
                        {
                          // Render the cell contents
                          cell.render("Cell")
                        }
                      </td>
                    );
                  })
                }
              </tr>
            );
          })
        }
      </tbody>
    </table>
  );
};

export default ResultsTable;

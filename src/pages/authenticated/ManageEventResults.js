import React from "react";
import ResultsTable from "../../components/ResultsTable";

// TODO: Eventually only show completed scorecards.
const ManageEventResults = ({ event }) => {
  return (
    <ResultsTable
      scorecards={event.scorecards}
      numHoles={event.layout.numHoles}
    />
  );
};

export default ManageEventResults;

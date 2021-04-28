import React from "react";
import ResultsTable from "../../components/ResultsTable";

// TODO: Eventually only show completed scorecards.
const MyEventResults = ({ event }) => {
  return (
    <ResultsTable
      scorecards={event.scorecards}
      numHoles={event.layout.numHoles}
      results={event.results}
    />
  );
};

export default MyEventResults;

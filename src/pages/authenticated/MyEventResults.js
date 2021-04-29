import React from "react";
import ResultsTable from "../../components/ResultsTable";
import ScoringInfoModal from "../../components/ScoringInfoModal";

const MyEventResults = ({ event }) => {
  return (
    <>
      <ScoringInfoModal />
      <ResultsTable
        scorecards={event.scorecards}
        numHoles={event.layout.numHoles}
        results={event.results}
      />
    </>
  );
};

export default MyEventResults;

import React from "react";
import { useParams } from "react-router-dom";
import Info from "../../components/alerts/Info";
import Error from "../../components/alerts/Error";
import useScorecard from "../../hooks/queries/useScorecard";
import SubTitle from "../../components/SubTitle";
import ScorecardForm from "../../components/forms/ScorecardForm";

const MyScorecard = () => {
  const { eventId, scorecardId } = useParams();
  const scorecard = useScorecard(eventId, scorecardId);

  return scorecard.isLoading ? (
    <Info />
  ) : scorecard.isError ? (
    <Error message={scorecard.error.message} />
  ) : (
    <div>
      {scorecard.isIdle ? null : scorecard.data ? (
        <>
          <SubTitle title="My Scorecard" />
          <ScorecardForm scorecard={scorecard.data} />
        </>
      ) : (
        <Error message="League not found." />
      )}
      {scorecard.isFetching ? "Updating..." : null}
    </div>
  );
};

export default MyScorecard;

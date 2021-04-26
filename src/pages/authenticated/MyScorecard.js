import React from "react";
import { useParams } from "react-router-dom";
import useScorecard from "../../hooks/queries/useScorecard";
import SubTitle from "../../components/SubTitle";
import ScorecardForm from "../../components/forms/ScorecardForm";
import ServerContent from "../../components/content/ServerContent";

const MyScorecard = () => {
  const { eventId, scorecardId } = useParams();
  const scorecard = useScorecard(eventId, scorecardId);

  return (
    <ServerContent content={scorecard}>
      <SubTitle title="My Scorecard" />
      <ScorecardForm scorecard={scorecard.data} />
    </ServerContent>
  );
};

export default MyScorecard;

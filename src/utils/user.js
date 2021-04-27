import React from "react";
import { Link } from "react-router-dom";

export const scorecardStatus = (event, userId) => {
  const scorecard = event.scorecards.find((scorecard) =>
    scorecard.players.includes(userId)
  );

  if (scorecard) {
    return scorecard.status;
  }
  return "not started";
};

export const getScorecard = (event, userId) => {
  return event.scorecards.find((scorecard) =>
    scorecard.players.includes(userId)
  );
};

export const scorecardAction = (event, userId) => {
  const scorecard = getScorecard(event, userId);

  if (scorecard) {
    if (scorecard.status === "pending") {
      return (
        <Link
          className="text-primary"
          to={`/my-leagues/${event.leagueId._id}/events/${event._id}/scorecards/${scorecard._id}`}
        >
          Edit Scorecard
        </Link>
      );
    } else {
      return (
        <Link
          className="text-primary"
          to={`/my-leagues/${event.leagueId._id}/events/${event._id}/results`}
        >
          View Results
        </Link>
      );
    }
  } else {
    return (
      <Link className="text-primary" to={"/create-scorecard"}>
        Create Scorecard
      </Link>
    );
  }
};

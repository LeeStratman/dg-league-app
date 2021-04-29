import React from "react";
import { Link } from "react-router-dom";
import { isToday } from "./date";

export const scorecardStatus = (event, userId) => {
  const scorecard = event.scorecards.find((scorecard) =>
    scorecard.players.includes(userId)
  );

  if (scorecard) {
    return scorecard.status === "pending" ? (
      <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
        Pending
      </span>
    ) : scorecard.status === "complete" ? (
      <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
        Complete
      </span>
    ) : (
      <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
        {scorecard.status}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-red-100 text-red-800">
      Not Started
    </span>
  );
};

export const getScorecard = (event, userId) => {
  return event.scorecards.find((scorecard) =>
    scorecard.players.includes(userId)
  );
};

export const scorecardAction = (event, userId) => {
  const scorecard = getScorecard(event, userId);
  const isEventToday = isToday(event.date);

  if (scorecard) {
    if (scorecard.status === "pending" && isEventToday) {
      return (
        <Link
          className="text-primary"
          to={`/my-leagues/${event.leagueId._id}/events/${event._id}/scorecards/${scorecard._id}`}
        >
          Edit Scorecard
        </Link>
      );
    } else if (
      isEventToday &&
      scorecard.status !== "complete" &&
      scorecard.status !== "pending"
    ) {
      <Link className="text-primary" to={"/create-scorecard"}>
        Create Scorecard
      </Link>;
    } else if (scorecard.status === "complete") {
      return (
        <Link
          className="text-primary"
          to={`/my-leagues/${event.leagueId._id}/events/${event._id}/results`}
        >
          View Results
        </Link>
      );
    }
  } else if (isEventToday) {
    return (
      <Link className="text-primary" to={"/create-scorecard"}>
        Create Scorecard
      </Link>
    );
  } else {
    return <p>No action available</p>;
  }
};

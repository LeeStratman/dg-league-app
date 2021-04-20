import React from "react";

const CourseRating = ({ rating }) => {
  let ratingColor =
    rating < 2.5
      ? "bg-red-100 text-red-800"
      : rating < 3.5
      ? "bg-yellow-100 text-yellow-800"
      : "bg-green-100 text-green-800";

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${ratingColor}`}
    >
      {rating}
    </span>
  );
};

export default CourseRating;

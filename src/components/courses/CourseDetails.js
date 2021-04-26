import React from "react";

const CourseDetails = ({ course }) => {
  const courseInfo = course[0];
  return (
    <div className="mt-5 border-t border-gray-200">
      <dl className="sm:divide-y sm:divide-gray-200">
        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
          <dt className="text-sm font-medium text-gray-500">Location</dt>
          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {`${courseInfo.city}, ${courseInfo.state} ${
              courseInfo.zip ? courseInfo.zip : ""
            }`}
          </dd>
        </div>
        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
          <dt className="text-sm font-medium text-gray-500">Rating</dt>
          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {courseInfo.rating}
          </dd>
        </div>
        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
          <dt className="text-sm font-medium text-gray-500">Reviews</dt>
          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <a
              className="text-primary"
              target="_blank"
              href={`${courseInfo.dgcr_url}`}
              rel="noreferrer"
            >
              Reviews
            </a>
          </dd>
        </div>
      </dl>
    </div>
  );
};

export default CourseDetails;

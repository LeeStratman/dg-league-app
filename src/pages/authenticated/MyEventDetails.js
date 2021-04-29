import React from "react";
import { Link } from "react-router-dom";
import SubContent from "../../components/content/SubContent";
import SubHeader from "../../components/SubHeader";
import { displayDate } from "../../utils/date";

const MyEventDetails = ({ event }) => {
  return (
    <SubContent>
      <SubHeader title={event.name} />
      <div className="mt-5 border-t border-gray-200">
        <dl className="sm:divide-y sm:divide-gray-200">
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-500">Date</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {`${displayDate(event.date)}`}
            </dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-500">Description</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {event.description ? event.description : "NA"}
            </dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-500">Course</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <Link
                className="color-primary underline"
                to={`/courses/${event.layout.course.sourceId}`}
              >{`${event.layout.course.name}`}</Link>
            </dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-500">
              Layout Instructions
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {`${event.layout.description ? event.layout.description : "NA"}`}
            </dd>
          </div>
        </dl>
      </div>
    </SubContent>
  );
};

export default MyEventDetails;

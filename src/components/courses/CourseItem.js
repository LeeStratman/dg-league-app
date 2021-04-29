import { Link } from "react-router-dom";
import CourseRating from "./CourseRating";

const CourseItem = ({ course }) => {
  return (
    <div
      key={course.course_id}
      className="relative rounded-lg border my-2 border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-400"
    >
      <div className="flex-1 min-w-0">
        <Link
          to={`/courses/${course.course_id}`}
          className="focus:outline-none"
        >
          <span className="absolute inset-0" aria-hidden="true" />
          <div className="flex justify-between">
            <p className="text-sm font-medium text-gray-900">{course.name}</p>
            <CourseRating rating={course.rating} />
          </div>
          <p className="text-sm text-gray-500 truncate">{`${
            course.city ? course.city : ""
          }, ${course.state ? course.state : ""} ${
            course.zipcode ? course.zipcode : ""
          }`}</p>
          <p className="text-sm text-gray-500 truncate">{`Holes: ${course.holes}`}</p>
        </Link>
      </div>
    </div>
  );
};

export default CourseItem;

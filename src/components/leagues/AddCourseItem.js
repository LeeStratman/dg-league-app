import CourseRating from "../courses/CourseRating";
import useAddCourseToLeague from "../../hooks/mutations/useAddCourseToLeague";
import { useParams } from "react-router-dom";

const AddCourseItem = ({ course }) => {
  const addCourse = useAddCourseToLeague();
  const { leagueId } = useParams();

  return (
    <div
      key={course.course_id}
      className="relative rounded-lg border my-2 border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-400"
    >
      <div className="flex-1 min-w-0">
        <button
          onClick={() =>
            addCourse.mutate({
              leagueId: leagueId,
              course: {
                name: course.name,
                city: course.city,
                state: course.state,
                zip: course.zip,
                sourceId: course.course_id,
              },
            })
          }
          className="block w-full focus:outline-none"
        >
          <span className="absolute inset-0" aria-hidden="true" />
          <div className="flex justify-between">
            <p className="text-sm text-left font-medium text-gray-900">
              {course.name}
            </p>
            <CourseRating rating={course.rating} />
          </div>
          <p className="text-sm text-gray-500 text-left truncate">{`${
            course.city ? course.city : ""
          }, ${course.state ? course.state : ""} ${
            course.zipcode ? course.zipcode : ""
          }`}</p>
          <p className="text-sm text-gray-500 text-left truncate">{`Holes: ${course.holes}`}</p>
          <p className="btn_primary text-left inline-block">
            {addCourse.isLoading
              ? "Adding..."
              : addCourse.isError
              ? "Error!"
              : addCourse.isSuccess
              ? "Added!"
              : "Add Course"}
          </p>
        </button>
      </div>
    </div>
  );
};

export default AddCourseItem;

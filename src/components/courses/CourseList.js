import Loading from "../alerts/Loading";
import Error from "../alerts/Error";
import CourseItem from "./CourseItem";
import useCourseSearch from "../../hooks/useCourseSearch";

const CourseList = ({ name }) => {
  const courses = useCourseSearch(name);

  return courses.isLoading ? (
    <Loading />
  ) : courses.isError ? (
    <Error message={courses.error.message} />
  ) : (
    <div className="mt-2">
      {courses.isIdle ? null : courses.data?.length > 0 ? (
        courses.data.map((course) => (
          <CourseItem key={course.course_id} course={course} />
        ))
      ) : (
        <Error message="No courses found!" />
      )}
      {courses.isFetching ? "Updating..." : null}
    </div>
  );
};

export default CourseList;

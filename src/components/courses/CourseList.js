import Loading from "../alerts/Loading";
import Error from "../alerts/Error";
import useCourseSearch from "../../hooks/queries/useCourseSearch";

const CourseList = ({ name, CourseComponent }) => {
  const courses = useCourseSearch(name);

  return courses.isLoading ? (
    <Loading />
  ) : courses.isError ? (
    <Error message={courses.error.message} />
  ) : (
    <div className="mt-2">
      {courses.isIdle ? null : courses.data?.length > 0 ? (
        courses.data.map((course) => (
          <CourseComponent key={course.course_id} course={course} />
        ))
      ) : (
        <Error message="No courses found!" />
      )}
      {courses.isFetching ? "Updating..." : null}
    </div>
  );
};

export default CourseList;

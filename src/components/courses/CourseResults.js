import Loading from "../alerts/Loading";
import Error from "../alerts/Error";
import CourseItem from "./CourseItem";
import useCourseSearch from "../../hooks/useCourseSearch";

const CourseResults = ({ name }) => {
  const courses = useCourseSearch(name);

  return courses.isLoading ? (
    <Loading />
  ) : courses.isError ? (
    <Error message={courses.error.message} />
  ) : (
    <div>
      {courses.data && courses.data.length > 0 ? (
        courses.data.map((course) => <CourseItem course={course} />)
      ) : (
        <div>No courses found</div>
      )}
      {courses.isFetching ? "Updating..." : null}
    </div>
  );
};

export default CourseResults;

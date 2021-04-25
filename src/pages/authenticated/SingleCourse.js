import React from "react";
import { useParams } from "react-router-dom";
import Info from "../../components/alerts/Info";
import Error from "../../components/alerts/Error";
import useCourse from "../../hooks/queries/useCourse";

const SingleCourse = () => {
  const { courseId } = useParams();
  const course = useCourse(courseId);

  return course.isLoading ? (
    <Info />
  ) : course.isError ? (
    <Error message={course.error.message} />
  ) : (
    <div>
      {course.data ? (
        <div>{course.data[0].name}</div>
      ) : (
        <div>No course found</div>
      )}
      {course.isFetching ? "Updating..." : null}
    </div>
  );
};

export default SingleCourse;

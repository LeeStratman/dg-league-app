import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../alerts/Loading";
import Error from "../alerts/Error";
import useCourse from "../../hooks/useCourse";

const SingleCourse = () => {
  const { id } = useParams();
  const course = useCourse(id);

  return course.isLoading ? (
    <Loading />
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

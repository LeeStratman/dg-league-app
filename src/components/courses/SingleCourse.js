import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../alerts/loading";
import Error from "../alerts/error";
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

import React from "react";
import { useParams } from "react-router-dom";
import useCourse from "../../hooks/queries/useCourse";
import ServerContent from "../../components/content/ServerContent";
import CourseDetails from "../../components/courses/CourseDetails";

const SingleCourse = () => {
  const { courseId } = useParams();
  const course = useCourse(courseId);

  return (
    <ServerContent content={course}>
      <CourseDetails course={course.data} />
    </ServerContent>
  );
};

export default SingleCourse;

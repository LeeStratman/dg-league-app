import React from "react";
import CourseTable from "../../components/courses/CourseTable";

const MyLeagueCourses = ({ league }) => {
  return (
    <>
      <CourseTable courses={league.courses} />
    </>
  );
};

export default MyLeagueCourses;

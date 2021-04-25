import React from "react";
import CourseTable from "../../components/courses/CourseTable";
import SubContent from "../../components/content/SubContent";
import SubHeader from "../../components/SubHeader";

const MyLeagueCourses = ({ league }) => {
  return (
    <SubContent>
      <SubHeader title="Courses" />
      <CourseTable courses={league.courses} />
    </SubContent>
  );
};

export default MyLeagueCourses;

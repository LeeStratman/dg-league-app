import React from "react";
import CourseTable from "../../components/courses/CourseTable";
import SubContent from "../../components/content/SubContent";
import SubHeader from "../../components/SubHeader";

const MyLeagueCourses = ({ league }) => {
  return (
    <SubContent>
      <SubHeader title="Courses" />
      <div className="mt-4">
        <CourseTable courses={league.courses} />
      </div>
    </SubContent>
  );
};

export default MyLeagueCourses;

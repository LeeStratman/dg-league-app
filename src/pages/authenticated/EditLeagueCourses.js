import React, { useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import Search from "../../components/Search";
import CourseList from "../../components/courses/CourseList";
import AddCourseItem from "../../components/leagues/AddCourseItem";
import EditCourseTable from "../../components/courses/EditCourseTable";
import SubContent from "../../components/content/SubContent";
import SubHeader from "../../components/SubHeader";

const EditLeagueCourses = ({ league }) => {
  const [name, setName] = useState("");
  const onSearch = useDebounce(setName);

  return (
    <SubContent>
      <SubHeader title="Edit League Courses" />
      <div className="mt-4 relative">
        <Search onSearch={onSearch} placeholder="Add course to league..." />
        <CourseList name={name} CourseComponent={AddCourseItem} />
        <EditCourseTable courses={league.courses} />
      </div>
    </SubContent>
  );
};

export default EditLeagueCourses;

import React, { useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import Search from "../../components/Search";
import CourseList from "../../components/courses/CourseList";
import AddCourseItem from "../../components/leagues/AddCourseItem";
import CourseTable from "../../components/courses/CourseTable";

const EditLeagueCourses = ({ league }) => {
  const [name, setName] = useState("");
  const onSearch = useDebounce(setName);

  return (
    <>
      <div className="relative">
        <Search onSearch={onSearch} />
        <CourseList name={name} CourseComponent={AddCourseItem} />
        <CourseTable courses={league.courses} />
      </div>
    </>
  );
};

export default EditLeagueCourses;

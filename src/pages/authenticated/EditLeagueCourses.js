import React, { useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import Search from "../../components/Search";
import CourseList from "../../components/courses/CourseList";
import AddCourseItem from "../../components/leagues/AddCourseItem";

const EditLeagueCourses = () => {
  const [name, setName] = useState("");
  const onSearch = useDebounce(setName);

  return (
    <>
      <div className="relative">
        <Search onSearch={onSearch} />
        <CourseList name={name} CourseComponent={AddCourseItem} />
      </div>
    </>
  );
};

export default EditLeagueCourses;

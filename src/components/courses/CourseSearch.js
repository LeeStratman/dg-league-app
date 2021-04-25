import React, { useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import Search from "../Search";
import CourseList from "./CourseList";
import CourseItem from "./CourseItem";

const CourseSearch = () => {
  const [query, setQuery] = useState("");
  const onSearch = useDebounce(setQuery);

  return (
    <>
      <Search onSearch={onSearch} placeholder="Search courses..." />
      <CourseList name={query} CourseComponent={CourseItem} />
    </>
  );
};

export default CourseSearch;

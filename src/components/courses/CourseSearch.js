import React, { useState } from "react";
import Search from "../Search";
import CourseList from "./CourseList";

const CourseSearch = () => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <Search handleChange={handleChange} value={query} />
      <CourseList name={query} />
    </>
  );
};

export default CourseSearch;

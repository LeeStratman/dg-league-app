import React, { useState } from "react";
import Search from "../Search";
import CourseResults from "./CourseResults";

const CourseSearch = () => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <Search handleChange={handleChange} value={query} />
      <CourseResults name={query} />
    </>
  );
};

export default CourseSearch;

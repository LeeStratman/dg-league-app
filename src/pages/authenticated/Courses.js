import React from "react";
import Content from "../../components/content/Content";
import Aside from "../../components/content/Aside";
import CourseSearch from "../../components/courses/CourseSearch";
import CourseRoutes from "../../components/routes/CourseRoutes";

const Courses = () => {
  return (
    <>
      <Content title="Courses">
        <CourseRoutes />
      </Content>
      <Aside>
        <CourseSearch />
      </Aside>
    </>
  );
};

export default Courses;

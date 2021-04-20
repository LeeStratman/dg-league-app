import React from "react";
import { Switch, Route } from "react-router-dom";
import Content from "../../components/Content";
import CourseSearch from "../../components/courses/CourseSearch";
import SingleCourse from "../../components/courses/SingleCourse";

const Courses = () => {
  return (
    <Content title="Courses" Aside={CourseSearch}>
      <Switch>
        <Route path="/courses/:id" exact component={SingleCourse} />
        <Route path="*" component={() => <div>No course selected</div>} />
      </Switch>
    </Content>
  );
};

export default Courses;

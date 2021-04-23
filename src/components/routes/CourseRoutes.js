import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import SingleCourse from "../../components/courses/SingleCourse";

const CourseRoutes = () => (
  <Switch>
    <Route path="/courses/:courseId" exact component={SingleCourse} />
    <Route path="*" component={() => <div>No course selected</div>} />
    <Route path="*">
      <Redirect to="/courses" />
    </Route>
  </Switch>
);

export default CourseRoutes;

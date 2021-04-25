import React from "react";
import { Switch, Route } from "react-router-dom";
import SingleCourse from "../../pages/authenticated/SingleCourse";
import Info from "../alerts/Info";

const CourseRoutes = () => (
  <Switch>
    <Route path="/courses/:courseId" exact>
      <SingleCourse />
    </Route>
    <Route path="*">
      <Info
        message="
          No course selected. To find a course, please enter a name in the
            searchbox."
      />
    </Route>
  </Switch>
);

export default CourseRoutes;

import React from "react";

const CourseMenu = ({ courses = [] }) => {
  return (
    <div className="relative inset-0 block text-left">
      <div className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="py-1">
          {courses.map((course) => (
            <div key={course.course_id}>
              <button className="text-gray-700 block px-4 py-2 text-sm">
                {course.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseMenu;

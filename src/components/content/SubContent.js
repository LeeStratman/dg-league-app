import React from "react";

const SubContent = ({ children }) => {
  return (
    <div className="mt-4 mx-auto lg:px-8  sm:rounded-md">
      <div className="px-4 py-5">{children}</div>
    </div>
  );
};

export default SubContent;

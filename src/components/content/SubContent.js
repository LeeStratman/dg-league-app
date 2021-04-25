import React from "react";

const SubContent = ({ children }) => {
  return (
    <div className="mt-4 bg-white max-w-7xl mx-auto sm:px-6 lg:px-8 shadow sm:rounded-md">
      <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
        {children}
      </div>
    </div>
  );
};

export default SubContent;

import React from "react";

const SubHeader = ({ title }) => {
  return (
    <div className="mt-2">
      <h3 className="text-lg leading-6 font-medium text-gray-900">{title}</h3>
    </div>
  );
};

export default SubHeader;

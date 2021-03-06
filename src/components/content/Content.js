import React from "react";

const Content = ({ title, children }) => {
  return (
    <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
      <div className="py-6">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
        </div>
        <div className="mt-4 mx-auto px-4 sm:px-6 md:px-8">{children}</div>
      </div>
    </main>
  );
};

export default Content;

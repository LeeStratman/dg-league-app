import React from "react";

const Aside = ({ children }) => (
  <aside className="w-4/12 hidden relative xl:order-first xl:flex xl:flex-col flex-shrink-0 w-96 border-r border-gray-200">
    <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">{children}</div>
  </aside>
);

export default Aside;

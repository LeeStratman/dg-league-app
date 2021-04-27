import React from "react";
import Tabs from "../navigation/Tabs";

const WithSecondaryMenu = ({ navigation, children }) => {
  return (
    <div className="mt-4">
      <Tabs tabs={navigation} />
      <div className="mt-4 space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
        {children}
      </div>
    </div>
  );
};

export default WithSecondaryMenu;

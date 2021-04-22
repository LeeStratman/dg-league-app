import React from "react";
import SecondaryMenu from "../navigation/SecondaryMenu";

const WithSecondaryMenu = ({ navigation, children }) => {
  return (
    <div className="mt-4 lg:grid lg:grid-cols-12 lg:gap-x-5">
      <SecondaryMenu navigation={navigation} />
      <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">{children}</div>
    </div>
  );
};

export default WithSecondaryMenu;

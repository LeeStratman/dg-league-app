import React from "react";
import { Link } from "react-router-dom";
import SubHeader from "./SubHeader";

const HeaderWithLink = ({ title, linkText, href }) => {
  return (
    <div className="flex items-center justify-between flex-wrap sm:flex-nowrap">
      <SubHeader title={title} />
      <div className="flex-shrink-0">
        <Link
          to={href}
          type="button"
          className="relative inline-flex items-center btn_primary"
        >
          {linkText}
        </Link>
      </div>
    </div>
  );
};

export default HeaderWithLink;

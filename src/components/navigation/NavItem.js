import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ item, setSidebarOpen }) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <Link
      onClick={() => setSidebarOpen(false)}
      key={item.name}
      to={item.href}
      className={classNames(
        item.current
          ? "bg-gray-900 text-white"
          : "text-gray-300 hover:bg-gray-700 hover:text-white",
        "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
      )}
    >
      <item.icon
        className={classNames(
          item.current
            ? "text-gray-300"
            : "text-gray-400 group-hover:text-gray-300",
          "mr-4 h-6 w-6"
        )}
        aria-hidden="true"
      />
      {item.name}
    </Link>
  );
};

export default NavItem;

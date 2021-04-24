import React from "react";
import { Link } from "react-router-dom";

const SecondaryMenu = ({ navigation }) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <aside className="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
      <nav className="space-y-1">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={classNames(
              item.current
                ? "bg-gray-50 text-primary hover:text-primary hover:bg-white"
                : "text-gray-900 hover:text-gray-900 hover:bg-gray-50",
              "group rounded-md px-3 py-2 flex items-center text-sm font-medium"
            )}
            aria-current={item.current ? "page" : undefined}
          >
            <item.icon
              className={classNames(
                item.current
                  ? "text-primary-400 group-hover:text-primary-400"
                  : "text-gray-400 group-hover:text-gray-500",
                "flex-shrink-0 -ml-1 mr-3 h-6 w-6"
              )}
              aria-hidden="true"
            />
            <span className="truncate">{item.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default SecondaryMenu;

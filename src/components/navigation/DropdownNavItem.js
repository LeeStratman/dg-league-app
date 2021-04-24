import React from "react";
import { Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const DropdownNavItem = ({ item, subitems }) => {
  return (
    <Disclosure as="div" className="space-y-1">
      {({ open }) => (
        <>
          <Disclosure.Button
            className={classNames(
              item.current
                ? "bg-gray-100 text-gray-900"
                : "text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md",
              "group w-full flex items-center pl-2 pr-1 py-2 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            )}
          >
            <item.icon
              className="text-gray-400 group-hover:text-gray-300 mr-4 h-6 w-6"
              aria-hidden="true"
            />
            {item.name}
            <svg
              className={classNames(
                open ? "text-gray-400 rotate-90" : "text-gray-300",
                "ml-auto h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150"
              )}
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
            </svg>
          </Disclosure.Button>
          <Disclosure.Panel className="space-y-1">
            {subitems.map((subItem) => (
              <Link
                to={subItem.href}
                key={subItem.key}
                className="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-400 rounded-md hover:text-primary"
              >
                {subItem.name}
              </Link>
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default DropdownNavItem;

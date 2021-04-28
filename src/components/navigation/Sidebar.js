import React from "react";
import { connect } from "react-redux";
import { logoutRequest } from "../../redux/auth/thunks";
import { Link, useLocation } from "react-router-dom";
import useUser from "../../hooks/queries/useUser";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  CalendarIcon,
  HomeIcon,
  UserGroupIcon,
  XIcon,
  ClipboardIcon,
  LogoutIcon,
} from "@heroicons/react/outline";
import Logo from "../Logo";
import Avatar from "../Avatar";
import DropdownNavItem from "./DropdownNavItem";
import NavItem from "./NavItem";

const Sidebar = ({ logout, sidebarOpen, setSidebarOpen }) => {
  const { pathname } = useLocation();
  const user = useUser();
  const navigation = [
    {
      name: "Dashboard",
      href: "/",
      icon: HomeIcon,
      current: pathname === "/" ? true : false,
    },
    {
      name: "Search Leagues",
      href: "/leagues",
      icon: UserGroupIcon,
      current: pathname === "/leagues" ? true : false,
    },
    {
      name: "Schedule",
      href: "/schedule",
      icon: CalendarIcon,
      current: pathname === "/schedule" ? true : false,
    },
    {
      name: "Manage",
      href: "/manage",
      icon: ClipboardIcon,
      current: pathname === "/manage" ? true : false,
    },
  ];

  const getLeagueNav = (leagues) => {
    return leagues.map((league) => {
      return {
        href: `/my-leagues/${league._id}`,
        key: league._id,
        name: league.name,
      };
    });
  };

  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed inset-0 flex z-40 md:hidden"
          open={sidebarOpen}
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full bg-gray-800">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                <div className="flex-shrink-0 flex items-center px-4">
                  <Logo size={125} />
                </div>
                <nav className="mt-5 px-2 space-y-1">
                  {navigation.map((item) => (
                    <NavItem
                      key={item.name}
                      item={{
                        name: item.name,
                        href: item.href,
                        current: item.current,
                        icon: item.icon,
                      }}
                      setSidebarOpen={setSidebarOpen}
                    />
                  ))}
                  <Link
                    key="Logout"
                    to="/signin"
                    onClick={logout}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                  >
                    <LogoutIcon
                      className="text-gray-400 group-hover:text-gray-300 mr-4 h-6 w-6"
                      aria-hidden="true"
                    />
                    Logout
                  </Link>
                  {user.data?.leagues && user.data.leagues?.length > 0 && (
                    <DropdownNavItem
                      item={{
                        name: "My Leagues",
                        current: pathname === "/my-leagues" ? true : false,
                        icon: UserGroupIcon,
                      }}
                      subitems={getLeagueNav(user.data.leagues)}
                    />
                  )}
                </nav>
              </div>
              <div className="flex-shrink-0 flex bg-gray-700 p-4">
                <Link to="/settings" className="flex-shrink-0 group block">
                  <div className="flex items-center">
                    <div>
                      <Avatar size={10} />
                    </div>
                    <div className="ml-3">
                      {user.data && (
                        <p className="text-base font-medium text-white">
                          {`${user.data.firstName} ${user.data.lastName}`}
                        </p>
                      )}
                      <p className="text-sm font-medium text-gray-400 group-hover:text-gray-300">
                        Settings
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14">
            {/* Force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col h-0 flex-1 bg-gray-800">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <Logo size={125} />
              </div>
              <nav className="mt-5 flex-1 px-2 bg-gray-800 space-y-1">
                {navigation.map((item) => (
                  <NavItem
                    key={item.name}
                    item={{
                      name: item.name,
                      href: item.href,
                      current: item.current,
                      icon: item.icon,
                    }}
                    setSidebarOpen={setSidebarOpen}
                  />
                ))}
                <Link
                  key="Logout"
                  to="/signin"
                  onClick={() => {
                    logout();
                  }}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                >
                  <LogoutIcon
                    className="text-gray-400 group-hover:text-gray-300 mr-3 h-6 w-6"
                    aria-hidden="true"
                  />
                  Logout
                </Link>

                {user.data?.leagues && user.data.leagues?.length > 0 && (
                  <DropdownNavItem
                    item={{
                      name: "My Leagues",
                      current: pathname === "/my-leagues" ? true : false,
                      icon: UserGroupIcon,
                    }}
                    subitems={getLeagueNav(user.data.leagues)}
                  />
                )}
              </nav>
            </div>
            <div className="flex-shrink-0 flex bg-gray-700 p-4">
              <Link to="/settings" className="flex-shrink-0 w-full group block">
                <div className="flex items-center">
                  <div>
                    <Avatar size={9} />
                  </div>
                  <div className="ml-3">
                    {user.data && (
                      <p className="text-sm font-medium text-white">
                        {`${user.data.firstName} ${user.data.lastName}`}
                      </p>
                    )}
                    <p className="text-xs font-medium text-gray-300 group-hover:text-gray-200">
                      Settings
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logoutRequest()),
});

export default connect(null, mapDispatchToProps)(Sidebar);

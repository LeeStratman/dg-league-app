import React from "react";
import { Switch, Route, Redirect, Link, useLocation } from "react-router-dom";
import Dashboard from "./authenticated/Dashboard";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  CalendarIcon,
  ChartBarIcon,
  LocationMarkerIcon,
  HomeIcon,
  MenuIcon,
  UserGroupIcon,
  XIcon,
  ClipboardIcon,
  LogoutIcon,
} from "@heroicons/react/outline";
import Logo from "../components/Logo";
import Avatar from "../components/Avatar";

const AuthenticatedApp = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    {
      name: "Dashboard",
      href: "/",
      icon: HomeIcon,
      current: location.pathname === "/" ? true : false,
    },
    {
      name: "Leagues",
      href: "/leagues",
      icon: UserGroupIcon,
      current: location.pathname === "/leagues" ? true : false,
    },
    {
      name: "Courses",
      href: "/courses",
      icon: LocationMarkerIcon,
      current: location.pathname === "/courses" ? true : false,
    },
    {
      name: "Schedule",
      href: "/schedule",
      icon: CalendarIcon,
      current: location.pathname === "/schedule" ? true : false,
    },
    {
      name: "Scorecards",
      href: "/scorecards",
      icon: ChartBarIcon,
      current: location.pathname === "/scorecards" ? true : false,
    },
    {
      name: "Admin",
      href: "/admin",
      icon: ClipboardIcon,
      current: location.pathname === "/admin" ? true : false,
    },
    { name: "Logout", href: "/", icon: LogoutIcon, current: false },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <div className="h-screen flex overflow-hidden bg-gray-100">
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
                      <XIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                  <div className="flex-shrink-0 flex items-center px-4">
                    <Logo size={125} />
                  </div>
                  <nav className="mt-5 px-2 space-y-1">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "group flex items-center px-2 py-2 text-base font-medium rounded-md"
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
                    ))}
                  </nav>
                </div>
                <div className="flex-shrink-0 flex bg-gray-700 p-4">
                  <Link to="/settings" className="flex-shrink-0 group block">
                    <div className="flex items-center">
                      <div>
                        <Avatar size={10} />
                      </div>
                      <div className="ml-3">
                        <p className="text-base font-medium text-white">
                          Name of User
                        </p>
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
                    <Link
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
                          "mr-3 h-6 w-6"
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
              <div className="flex-shrink-0 flex bg-gray-700 p-4">
                <Link
                  to="/settings"
                  className="flex-shrink-0 w-full group block"
                >
                  <div className="flex items-center">
                    <div>
                      <Avatar size={9} />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-white">
                        Name of user
                      </p>
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
        <div className="flex flex-col w-0 flex-1 overflow-hidden">
          <div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
            <button
              className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
            <div className="py-6">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-2xl font-semibold text-gray-900">
                  Dashboard
                </h1>
              </div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <Switch>
                  <Route path="/" exact component={Dashboard} />
                  <Route path="/leagues" exact component={Dashboard} />
                  <Route path="/courses" exact component={Dashboard} />
                  <Route path="/schedule" exact component={Dashboard} />
                  <Route path="/scorecards" exact component={Dashboard} />
                  <Route path="/admin" exact component={Dashboard} />
                  <Route path="/settings" exact component={Dashboard} />
                  <Route path="*">
                    <Redirect to="/" />
                  </Route>
                </Switch>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default AuthenticatedApp;

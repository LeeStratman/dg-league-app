import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const CourseDropdown = ({
  options,
  selected = { name: "Choose course" },
  setSelected,
}) => {
  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Listbox.Label className="sr-only">Change course</Listbox.Label>
          <div className="relative">
            <div className="inline-flex shadow-sm rounded-md divide-x divide-primary-400">
              <div className="relative z-0 inline-flex shadow-sm rounded-md divide-x divide-primary-400">
                <div className="relative inline-flex items-center bg-primary-400 py-2 pl-3 pr-4 border border-transparent rounded-l-md shadow-sm text-white">
                  <CheckIcon className="h-5 w-5" aria-hidden="true" />
                  <p className="ml-2.5 text-sm font-medium">{selected.name}</p>
                </div>
                <Listbox.Button className="relative inline-flex items-center bg-primary p-2 rounded-l-none rounded-r-md text-sm font-medium text-white hover:bg-primary-400 focus:outline-none focus:z-10 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-primary-400">
                  <span className="sr-only">Change course</span>
                  <ChevronDownIcon
                    className="h-5 w-5 text-white"
                    aria-hidden="true"
                  />
                </Listbox.Button>
              </div>
            </div>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options
                static
                className="z-10 origin-top-right absolute left-0 mt-2 w-72 rounded-md shadow-lg overflow-hidden bg-white divide-y divide-gray-200 ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                {options.map((option) => (
                  <Listbox.Option
                    key={option._id}
                    className={({ active }) =>
                      classNames(
                        active ? "text-white bg-primary-400" : "text-gray-900",
                        "cursor-default select-none relative p-4 text-sm"
                      )
                    }
                    value={option}
                  >
                    {({ selected, active }) => (
                      <div className="flex flex-col">
                        <div className="flex justify-between">
                          <p
                            className={
                              selected ? "font-semibold" : "font-normal"
                            }
                          >
                            {option.name}
                          </p>
                          {selected ? (
                            <span
                              className={
                                active ? "text-white" : "text-primary-400"
                              }
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </div>
                        <p
                          className={classNames(
                            active ? "text-white" : "",
                            "mt-2"
                          )}
                        >
                          {`${option.city}, ${option.state}`}
                        </p>
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};

export default CourseDropdown;

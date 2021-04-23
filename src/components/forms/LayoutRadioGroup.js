import { RadioGroup } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const LayoutRadioGroup = ({ layouts, selected, setSelected }) => {
  return (
    <RadioGroup value={selected} onChange={setSelected}>
      <RadioGroup.Label className="sr-only">Privacy setting</RadioGroup.Label>
      <div className="bg-white rounded-md -space-y-px">
        {layouts.map((layout, layoutIdx) => (
          <RadioGroup.Option
            key={layoutIdx}
            value={layoutIdx}
            className={({ checked }) =>
              classNames(
                layoutIdx === 0 ? "rounded-tl-md rounded-tr-md" : "",
                layoutIdx === layouts.length - 1
                  ? "rounded-bl-md rounded-br-md"
                  : "",
                checked ? "bg-indigo-50 border-indigo-200" : "border-gray-200",
                "relative border p-4 flex cursor-pointer focus:outline-none"
              )
            }
          >
            {({ active, checked }) => (
              <>
                <span
                  className={classNames(
                    checked
                      ? "bg-indigo-600 border-transparent"
                      : "bg-white border-gray-300",
                    active ? "ring-2 ring-offset-2 ring-indigo-500" : "",
                    "h-4 w-4 mt-0.5 cursor-pointer rounded-full border flex items-center justify-center"
                  )}
                  aria-hidden="true"
                >
                  <span className="rounded-full bg-white w-1.5 h-1.5" />
                </span>
                <div className="ml-3 flex flex-col">
                  <RadioGroup.Label
                    as="span"
                    className={classNames(
                      checked ? "text-indigo-900" : "text-gray-900",
                      "block text-sm font-medium"
                    )}
                  >
                    {`Layout ${layoutIdx + 1}`}
                  </RadioGroup.Label>
                  <RadioGroup.Description
                    as="span"
                    className={classNames(
                      checked ? "text-indigo-700" : "text-gray-500",
                      "block text-sm"
                    )}
                  >
                    <div>{`Holes: ${layout.length}`}</div>
                    <div>
                      {`Total ft:
                      ${layout.reduce(
                        (acc, hole) => acc + Number(hole.length),
                        0
                      )}`}
                    </div>
                    <div>
                      {`Total par:
                      ${layout.reduce(
                        (acc, hole) => acc + Number(hole.par),
                        0
                      )}`}
                    </div>
                  </RadioGroup.Description>
                </div>
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
};

export default LayoutRadioGroup;

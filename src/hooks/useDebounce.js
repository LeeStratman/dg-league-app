import { useCallback } from "react";
import debounce from "lodash/debounce";

const useDebounce = (setValue) => {
  const handleSearch = useCallback(
    debounce((value) => {
      setValue(value);
    }, 800),
    []
  );

  const onChange = (value) => {
    handleSearch(value);
  };

  return onChange;
};

export default useDebounce;

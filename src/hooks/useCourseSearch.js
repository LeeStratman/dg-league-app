import { useQuery } from "react-query";
import { CancelToken } from "axios";
import API from "../utils/api";

function useCourseSearch(name) {
  return useQuery(
    ["courses", name],
    () => {
      const source = CancelToken.source();
      const promise = API.get(`/courses/?name=${name}`, {
        cancelToken: source.token,
      }).then((res) => res.data);

      promise.cancel = () => {
        source.cancel("Query was cancelled by React Query");
      };

      return promise;
    },
    {
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      cacheTime: 5000,
      enabled: name ? true : false,
      retry: 1,
      retryDelay: 1000,
    }
  );
}

export default useCourseSearch;

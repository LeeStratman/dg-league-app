import { useQuery } from "react-query";
import axios, { CancelToken } from "axios";

function useCourseSearch(name) {
  return useQuery(
    ["courses", name],
    () => {
      const source = CancelToken.source();
      const promise = axios
        .get(`http://localhost:5000/api/courses/?name=${name}`, {
          cancelToken: source.token,
        })
        .then((res) => res.data);

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

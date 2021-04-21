import { useQuery } from "react-query";
import { CancelToken } from "axios";
import API from "../utils/api";

const useCourse = (courseId) => {
  return useQuery(
    ["course", courseId],
    () => {
      const source = CancelToken.source();
      const promise = API.get(`/courses/${courseId}`, {
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
      enabled: courseId ? true : false,
      retry: 1,
      retryDelay: 1000,
    }
  );
};

export default useCourse;

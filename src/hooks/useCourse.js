import { useQuery } from "react-query";
import axios, { CancelToken } from "axios";

const useCourse = ({ courseId }) => {
  return useQuery(
    ["course", courseId],
    () => {
      const source = CancelToken.source();
      const promise = axios
        .get(`http://localhost:5000/api/courses/${courseId}`, {
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
      enabled: courseId ? true : false,
      retry: 1,
      retryDelay: 1000,
    }
  );
};

export default useCourse;

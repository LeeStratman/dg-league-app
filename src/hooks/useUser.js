import { useQuery } from "react-query";
import { CancelToken } from "axios";
import { getTokenFromLocalStorage } from "../redux/auth/thunks";
import API from "../utils/api";

const useUser = () => {
  const token = getTokenFromLocalStorage();

  return useQuery(
    "user",
    () => {
      const source = CancelToken.source();

      const promise = API.get(`/users/me`, {
        cancelToken: source.token,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => res.data);

      promise.cancel = () => {
        source.cancel("Query was cancelled by React Query");
      };

      return promise;
    },
    {
      refetchOnWindowFocus: true,
      staleTime: 10000,
      // cacheTime: 10000,
      enabled: token ? true : false,
      retry: 3,
      retryDelay: 1000,
    }
  );
};

export default useUser;

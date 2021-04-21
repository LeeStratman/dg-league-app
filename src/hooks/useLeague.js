import { useQuery } from "react-query";
import { CancelToken } from "axios";
import API from "../utils/api";
import { getTokenFromLocalStorage } from "../redux/auth/thunks";

const useLeague = (leagueId) => {
  const token = getTokenFromLocalStorage();

  return useQuery(
    ["league", leagueId],
    () => {
      const source = CancelToken.source();

      const promise = API.get(`/leagues/${leagueId}`, {
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
      staleTime: 1000,
      cacheTime: 10000,
      enabled: leagueId && token ? true : false,
      retry: 3,
      retryDelay: 1000,
    }
  );
};

export default useLeague;

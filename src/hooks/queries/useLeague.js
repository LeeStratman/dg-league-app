import { useQuery } from "react-query";
import { CancelToken } from "axios";
import API from "../../utils/api";
import { getTokenFromLocalStorage } from "../../redux/auth/thunks";

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
      refetchOnWindowFocus: false,
      // staleTime: Infinity,
      // cacheTime: Infinity,
      enabled: leagueId && token ? true : false,
      retry: 0,
      retryDelay: 1000,
    }
  );
};

export default useLeague;

import { useQuery } from "react-query";
import { CancelToken } from "axios";
import API from "../../utils/api";
import { getTokenFromLocalStorage } from "../../redux/auth/thunks";

function useLeagueEvents(leagueId) {
  const token = getTokenFromLocalStorage();

  return useQuery(
    ["events", leagueId],
    () => {
      const source = CancelToken.source();

      const promise = API.get(`/leagues/${String(leagueId)}/events`, {
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
      staleTime: Infinity,
      cacheTime: 5000,
      enabled: leagueId ? true : false,
      retry: 1,
      retryDelay: 1000,
    }
  );
}

export default useLeagueEvents;

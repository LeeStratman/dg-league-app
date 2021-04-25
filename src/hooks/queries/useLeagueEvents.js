import { useQuery } from "react-query";
import API from "../../utils/api";
import { getTokenFromLocalStorage } from "../../redux/auth/thunks";

function useLeagueEvents(leagueId) {
  const token = getTokenFromLocalStorage();

  return useQuery(
    ["events", leagueId],
    () => {
      return API.get(`/leagues/${String(leagueId)}/events`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => res.data);
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

import { useQuery } from "react-query";
import { CancelToken } from "axios";
import API from "../../utils/api";
import { getTokenFromLocalStorage } from "../../redux/auth/thunks";

function useLeagueSearch(name, location) {
  const token = getTokenFromLocalStorage();

  return useQuery(
    ["leagues", name, location],
    () => {
      const source = CancelToken.source();
      let params = "";

      if (name) {
        params += `name=${name}`;

        if (location) {
          params += `&location=${location}`;
        }
      } else if (location) {
        params += `location=${location}`;
      }

      const promise = API.get(`/leagues/search/?${params}`, {
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
      enabled: (name || location) && token ? true : false,
      retry: 1,
      retryDelay: 1000,
    }
  );
}

export default useLeagueSearch;

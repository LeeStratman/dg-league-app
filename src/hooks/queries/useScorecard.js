import { useQuery } from "react-query";
import API from "../../utils/api";
import { getTokenFromLocalStorage } from "../../redux/auth/thunks";

const useScorecard = (eventId, scorecardId) => {
  const token = getTokenFromLocalStorage();

  return useQuery(
    ["scorecard", scorecardId],
    () => {
      return API.get(
        `/events/${String(eventId)}/scorecard/${String(scorecardId)}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      ).then((res) => res.data);
    },
    {
      refetchOnWindowFocus: false,
      enabled: eventId && scorecardId && token ? true : false,
      retry: 3,
      retryDelay: 1000,
    }
  );
};

export default useScorecard;

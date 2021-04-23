import { useQuery } from "react-query";
import API from "../../utils/api";
import { getTokenFromLocalStorage } from "../../redux/auth/thunks";

const useEvent = (eventId) => {
  const token = getTokenFromLocalStorage();

  return useQuery(
    ["event", eventId],
    () => {
      return API.get(`/events/${String(eventId)}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => res.data);
    },
    {
      refetchOnWindowFocus: true,
      staleTime: Infinity,
      cacheTime: Infinity,
      enabled: eventId && token ? true : false,
      retry: 3,
      retryDelay: 1000,
    }
  );
};

export default useEvent;

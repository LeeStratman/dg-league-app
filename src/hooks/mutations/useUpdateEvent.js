import { useMutation, useQueryClient } from "react-query";
import API from "../../utils/api";
import { getTokenFromLocalStorage } from "../../redux/auth/thunks";

const useUpdateEvent = () => {
  const token = getTokenFromLocalStorage();

  const queryClient = useQueryClient();

  return useMutation(
    (event) =>
      API.put(`/events/${event._id}`, event, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries(["event", data._id]);
      },
      onError: (err) => {
        //Alert user. err.response.data.error
      },
    }
  );
};

export default useUpdateEvent;

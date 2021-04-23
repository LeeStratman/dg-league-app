import { useMutation, useQueryClient } from "react-query";
import API from "../../utils/api";
import { getTokenFromLocalStorage } from "../../redux/auth/thunks";

const useCreateEvent = () => {
  const token = getTokenFromLocalStorage();

  const queryClient = useQueryClient();

  return useMutation(
    (event) =>
      API.post(`/events`, event, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("user");
      },
      onError: (err) => {
        //Alert user. err.response.data.error
      },
    }
  );
};

export default useCreateEvent;

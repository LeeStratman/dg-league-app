import { useMutation, useQueryClient } from "react-query";
import API from "../utils/api";
import { getTokenFromLocalStorage } from "../redux/auth/thunks";

const useCreateLeague = () => {
  const token = getTokenFromLocalStorage();

  const queryClient = useQueryClient();

  return useMutation(
    (league) =>
      API.post(`/leagues`, league, {
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

export default useCreateLeague;

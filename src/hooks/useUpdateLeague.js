import { useMutation, useQueryClient } from "react-query";
import API from "../utils/api";
import { getTokenFromLocalStorage } from "../redux/auth/thunks";

const useUpdateLeague = () => {
  const token = getTokenFromLocalStorage();

  const queryClient = useQueryClient();

  return useMutation(
    (league) =>
      API.put(`/leagues/${league._id}`, league, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    {
      onSuccess: (data, leagueId) => {
        queryClient.invalidateQueries(["league", leagueId]);
      },
      onError: (err) => {
        //Alert user. err.response.data.error
      },
    }
  );
};

export default useUpdateLeague;

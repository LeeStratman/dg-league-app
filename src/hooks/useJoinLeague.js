import { useMutation, useQueryClient } from "react-query";
import API from "../utils/api";
import { getTokenFromLocalStorage } from "../redux/auth/thunks";

const useJoinLeague = (leagueId) => {
  const token = getTokenFromLocalStorage();

  const queryClient = useQueryClient();

  return useMutation(
    () =>
      API.post(
        `/leagues/${leagueId}/join`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      ),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("user");
      },
    }
  );
};

export default useJoinLeague;

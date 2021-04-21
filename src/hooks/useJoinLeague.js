import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { getTokenFromLocalStorage } from "../redux/auth/thunks";

const useJoinLeague = (leagueId) => {
  const token = getTokenFromLocalStorage();

  const queryClient = useQueryClient();

  return useMutation(
    () =>
      axios.post(
        `http://localhost:5000/api/leagues/${leagueId}/join`,
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

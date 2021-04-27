import { useMutation, useQueryClient } from "react-query";
import API from "../../utils/api";
import { getTokenFromLocalStorage } from "../../redux/auth/thunks";

const useCompleteScorecard = () => {
  const token = getTokenFromLocalStorage();

  const queryClient = useQueryClient();

  return useMutation(
    (data) =>
      API.post(
        `/events/${data.eventId}/scorecard/${data.scorecardId}/complete`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      ),
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries("user");
        queryClient.invalidateQueries("event");
        queryClient.invalidateQueries(["scorecard", data._id]);
      },
      onError: (err) => {
        //Alert user. err.response.data.error
      },
    }
  );
};

export default useCompleteScorecard;

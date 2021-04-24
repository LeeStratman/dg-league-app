import { useMutation, useQueryClient } from "react-query";
import API from "../../utils/api";
import { getTokenFromLocalStorage } from "../../redux/auth/thunks";

const useAddCourseToLeague = () => {
  const token = getTokenFromLocalStorage();

  const queryClient = useQueryClient();

  return useMutation(
    (data) =>
      API.post(
        `/leagues/${data.leagueId}/add-course`,
        { course: data.course },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      ),
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries(["league", data.data._id]);
      },
      onError: (err) => {
        //Alert user. err.response.data.error
      },
    }
  );
};

export default useAddCourseToLeague;

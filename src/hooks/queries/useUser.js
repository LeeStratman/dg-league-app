import { useQuery } from "react-query";
import { getTokenFromLocalStorage } from "../../redux/auth/thunks";
import API from "../../utils/api";

const useUser = () => {
  const token = getTokenFromLocalStorage();

  return useQuery(
    "user",
    () => {
      return API.get(`/users/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => res.data);
    },
    {
      refetchOnWindowFocus: true,
      staleTime: 100000,
      enabled: token ? true : false,
      retry: 2,
    }
  );
};

export default useUser;

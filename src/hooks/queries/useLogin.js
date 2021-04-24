import { useMutation } from "react-query";
import API from "../../utils/api";

const useLogin = () => {
  return useMutation(
    ["user", "isLoggedIn"],
    (user) => {
      return API.post(`/auth/signin`, user).then((res) => res.data);
    },
    {
      onSuccess: (data) => {
        window.localStorage.setItem("dgleague", JSON.stringify(data.token));
      },
    }
  );
};

export default useLogin;

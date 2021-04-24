import React from "react";
import useUser from "../hooks/queries/useUser";
import useJoinLeague from "../hooks/mutations/useJoinLeague";

const JoinButton = ({ leagueId }) => {
  const user = useUser();
  const joinLeague = useJoinLeague(leagueId);

  const userInLeague = (leagueId, userLeagues) => {
    return !userLeagues.find((league) => league._id === leagueId);
  };

  return user.isLoading ? (
    "loading"
  ) : user.isError ? (
    "userError"
  ) : user.isSuccess && userInLeague(leagueId, user.data.leagues) ? (
    <div className="w-32">
      <button onClick={joinLeague.mutate} className="w-full btn_primary">
        {joinLeague.isLoading
          ? "Saving..."
          : joinLeague.isError
          ? "Error!"
          : joinLeague.isSuccess
          ? "Joined!"
          : "Join"}
      </button>
    </div>
  ) : (
    <div className="w-32">
      <button disabled={true} className="w-full btn_primary">
        Joined
      </button>
    </div>
  );
};

export default JoinButton;

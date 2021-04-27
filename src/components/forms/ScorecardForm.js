import React, { useReducer, useState } from "react";
import useUpdateScorecard from "../../hooks/mutations/useUpdateScorecard";

function scoreReducer(state, payload) {
  const { value, player, hole } = payload;
  if (Number(value) < 0) return state;

  return state.map((score) => {
    if (score.player === player) {
      score.holes[hole] = Number(value);
    }

    return score;
  });
}

const ScorecardForm = ({ scorecard }) => {
  const updateScorecard = useUpdateScorecard();
  const [scores, setScores] = useReducer(scoreReducer, scorecard.scores);
  const [holes, setHoles] = useState(
    new Array(scorecard.event.layout.numHoles).fill(0)
  );

  function getPlayerHoleScore(playerId, hole) {
    const score = scorecard.scores.find((score) => score.player === playerId);

    return score.holes ? score.holes[hole - 1] : 3;
  }

  function getPlayerTotalScore(playerId) {
    const score = scorecard.scores.find((score) => score.player === playerId);

    if (score) {
      return score.holes.reduce((acc, hole) => acc + Number(hole), 0);
    }

    return "-";
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        updateScorecard.mutate({
          eventId: scorecard.event._id,
          scorecardId: scorecard._id,
          scorecard: { scores },
        });
      }}
    >
      <div className="shadow sm:rounded-md sm:overflow-hidden">
        <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              {`Scorecard - ${scorecard.event.name}`}
            </h3>
            <p className="mt-1 text-sm text-gray-500">{`${scorecard.event.layout.course.name} - ${scorecard.event.layout.description}`}</p>
            <p className="mt-1 text-sm text-gray-500">{`${scorecard.event.layout.numHoles}`}</p>
          </div>

          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Player
                </th>
                {holes.map((hole, index) => (
                  <th
                    key={index}
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {index + 1}
                  </th>
                ))}
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {scorecard.players.map((player) => (
                <tr key={player._id}>
                  <td>{`${player.firstName} ${player.lastName}`}</td>
                  {holes.map((hole, index) => (
                    <td key={index}>
                      <input
                        onChange={(e) =>
                          setScores({
                            hole: index,
                            value: e.target.value,
                            player: player._id,
                          })
                        }
                        value={getPlayerHoleScore(player._id, index + 1)}
                        type="number"
                        className="input_basic px-1 py-1"
                        size="2"
                      />
                    </td>
                  ))}
                  <td className="text-center whitespace-nowrap text-sm font-medium text-gray-900">
                    {getPlayerTotalScore(player._id)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button type="submit" className="btn_primary">
            {updateScorecard.isLoading
              ? "Saving..."
              : updateScorecard.isError
              ? "Error!"
              : updateScorecard.isSuccess
              ? "Saved!"
              : updateScorecard.isIdle
              ? "Save"
              : "Save"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ScorecardForm;

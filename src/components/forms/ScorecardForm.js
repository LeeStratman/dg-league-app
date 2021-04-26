import React, { useReducer, useState } from "react";
import useUpdateScorecard from "../../hooks/mutations/useUpdateScorecard";

function scoreReducer(state, payload) {
  const { value, player, hole } = payload;
  if (value < 0) return state;

  return state.map((score) => {
    if (score.player === player) {
      score.holes[hole] = value;
    }

    return score;
  });
}

const ScorecardForm = ({ scorecard }) => {
  const updateScorecard = useUpdateScorecard();
  const [scores, setScores] = useReducer(scoreReducer, scorecard.scores);
  const [holes, setHoles] = useState(() =>
    new Array(scorecard.event.layout.numHoles).fill(0)
  );

  function getPlayerHoleScore(playerId, hole) {
    const score = scorecard.scores.find((score) => score.player === playerId);

    return score.holes ? score.holes[hole - 1] : 3;
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

          {holes.map((hole, index) => (
            <div key={index} className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
              <h2>{`Hole ${index + 1}`}</h2>
              {scorecard.players.map((player) => (
                <div
                  key={player._id}
                  className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-0"
                >
                  <label
                    htmlFor={`score-${player._id}-${index}`}
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    {`${player.firstName} ${player.lastName}`}
                  </label>
                  <div className="mt-1 rounded-md shadow-sm flex">
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
                      name={`score-${player._id}-${index}`}
                      id={`score-${player._id}-${index}`}
                      className="input_basic"
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button type="submit" className="btn_primary">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default ScorecardForm;

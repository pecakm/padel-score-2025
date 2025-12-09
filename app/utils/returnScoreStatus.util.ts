import { MaxSetScore } from '@/constants';

import { Score } from '../interfaces';

import { incrementGame } from './incrementGame.util';
import { incrementSet } from './incrementSet.util';
import { incrementMatch } from './incrementMatch.util';

export const returnScoreStatus = (
  scorerScore: Score,
  opponentScore: Score
) => {
  const gameStatus = incrementGame(
    scorerScore.game,
    opponentScore.game,
    scorerScore.set === MaxSetScore - 1 && opponentScore.set === MaxSetScore - 1
  );

  if (!gameStatus.gameFinished) {
    return {
      scorer: {
        match: scorerScore.match,
        set: scorerScore.set,
        game: gameStatus.scorerScore,
      },
      opponent: {
        match: opponentScore.match,
        set: opponentScore.set,
        game: gameStatus.opponentScore,
      },
      matchFinished: false,
    };
  }

  const setStatus = incrementSet(scorerScore.set, opponentScore.set);

  if (!setStatus.setFinished) {
    return {
      scorer: {
        match: scorerScore.match,
        set: setStatus.scorerScore,
        game: 0,
      },
      opponent: {
        match: opponentScore.match,
        set: setStatus.opponentScore,
        game: 0,
      },
      matchFinished: false,
    };
  }

  const matchStatus = incrementMatch(scorerScore.match, opponentScore.match);

  return {
    scorer: {
      match: matchStatus.scorerScore,
      set: 0,
      game: 0,
    },
    opponent: {
      match: matchStatus.opponentScore,
      set: 0,
      game: 0,
    },
    matchFinished: matchStatus.matchFinished,
  };
};

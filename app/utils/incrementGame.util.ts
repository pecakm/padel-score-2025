import { MaxGameScore } from '@/constants';

export const incrementGame = (scorerScore: number, opponentScore: number, isTieBreak: boolean) => {
  if (isTieBreak) {
    const newScorerScore = scorerScore + 1;

    if (newScorerScore > 6 && newScorerScore > opponentScore + 1) {
      return {
        scorerScore: 0,
        opponentScore: 0,
        gameFinished: true,
      };
    }

    return {
      scorerScore: newScorerScore,
      opponentScore: opponentScore,
      gameFinished: false,
    };
  }
  
  // Scorer wins without deuce
  if (scorerScore === MaxGameScore - 2 && opponentScore < MaxGameScore - 2) {
    return {
      scorerScore: 0,
      opponentScore: 0,
      gameFinished: true,
    };
  }

  // Scorer wins after deuce
  if (scorerScore === MaxGameScore - 1 && opponentScore < MaxGameScore - 1) {
    return {
      scorerScore: 0,
      opponentScore: 0,
      gameFinished: true,
    };
  }

  // Opponent loses advantage
  if (opponentScore === MaxGameScore - 1) {
    return {
      scorerScore: scorerScore,
      opponentScore: opponentScore - 1,
      gameFinished: false,
    };
  }

  return {
    scorerScore: scorerScore + 1,
    opponentScore: opponentScore,
    gameFinished: false,
  };
};

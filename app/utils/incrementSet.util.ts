import { MaxSetScore } from '@/constants';

export const incrementSet = (scorerScore: number, opponentScore: number) => {
  // Scorer wins with 6 gems
  if (scorerScore === MaxSetScore - 2 && opponentScore < MaxSetScore - 2) {
    return {
      scorerScore: 0,
      opponentScore: 0,
      setFinished: true,
    };
  }

  // Scorer wins with 7 gems
  if (scorerScore === MaxSetScore - 1) {
    return {
      scorerScore: 0,
      opponentScore: 0,
      setFinished: true,
    };
  }

  return {
    scorerScore: scorerScore + 1,
    opponentScore: opponentScore,
    setFinished: false,
  };
};

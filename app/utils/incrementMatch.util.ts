import { MaxMatchScore } from '@/constants';

export const incrementMatch = (scorerScore: number, opponentScore: number) => {
  if (scorerScore === MaxMatchScore - 1) {
    return {
      scorerScore: scorerScore + 1,
      opponentScore: opponentScore,
      matchFinished: true,
    };
  }

  return {
    scorerScore: scorerScore + 1,
    opponentScore: opponentScore,
    matchFinished: false,
  };
};

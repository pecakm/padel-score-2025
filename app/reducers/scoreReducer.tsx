import { Score } from '../interfaces';
import { returnScoreStatus } from '../utils';

export const scoreReducer = (
  state: {
    home: Score;
    away: Score;
    matchFinished: boolean;
  },
  action: { type: 'incrementHome' | 'incrementAway' }
) => {
  switch (action.type) {
    case 'incrementHome':
      const homeScore = returnScoreStatus(state.home, state.away);

      return {
        ...state,
        home: homeScore.scorer,
        away: homeScore.opponent,
        matchFinished: homeScore.matchFinished,
      };
    case 'incrementAway':
      const awayScore = returnScoreStatus(state.away, state.home);

      return {
        ...state,
        home: awayScore.opponent,
        away: awayScore.scorer,
        matchFinished: awayScore.matchFinished,
      };
    default:
      return state;
  }
};

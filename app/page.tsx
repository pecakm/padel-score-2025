'use client';

import { useReducer } from 'react';

import { MaxSetScore } from '@/constants';

import { MatchScore } from './components/matchScore';
import { SetScore } from './components/setScore';
import { GameScore } from './components/gameScore';
import { scoreReducer } from './reducers';
import {
  Container,
  Buttons,
  Button,
} from './page.styled';

export default function Home() {
  const [score, dispatch] = useReducer(
    scoreReducer,
    {
      home: { match: 0, set: 0, game: 0 },
      away: { match: 0, set: 0, game: 0 },
      matchFinished: false,
    },
  );

  return (
    <Container>
      <MatchScore homeScore={score.home.match} awayScore={score.away.match} />
      <SetScore homeScore={score.home.set} awayScore={score.away.set} />
      <GameScore
        homeScore={score.home.game}
        awayScore={score.away.game}
        isTieBreak={score.home.set === MaxSetScore - 1 && score.away.set === MaxSetScore - 1}
      />
      {!score.matchFinished && (
      <Buttons>
        <Button onClick={() => dispatch({ type: 'incrementHome' })}>+</Button>
        <Button onClick={() => dispatch({ type: 'incrementAway' })}>+</Button>
      </Buttons>
      )}
    </Container>
  );
}

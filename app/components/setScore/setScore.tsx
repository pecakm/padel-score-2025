'use client';

import { Container } from './setScore.styled';
import { SetScoreProps } from './setScore.types';

export default function SetScore({ homeScore, awayScore, className }: SetScoreProps) {
  return (
    <Container className={className}>
      Set: {homeScore} - {awayScore}
    </Container>
  );
}

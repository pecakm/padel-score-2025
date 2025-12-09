'use client';

import { Container, Label, ScoreContainer, Score, Separator } from './setScore.styled';
import { SetScoreProps } from './setScore.types';

export default function SetScore({ homeScore, awayScore, className }: SetScoreProps) {
  return (
    <Container className={className}>
      <Label>Set</Label>
      <ScoreContainer>
        <Score $isHome>{homeScore}</Score>
        <Separator>—</Separator>
        <Score>{awayScore}</Score>
      </ScoreContainer>
    </Container>
  );
}

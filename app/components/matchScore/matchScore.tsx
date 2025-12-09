'use client';

import { Container, Label, ScoreContainer, Score, Separator } from './matchScore.styled';
import { MatchScoreProps } from './matchScore.types';

export default function MatchScore({ homeScore, awayScore, className }: MatchScoreProps) {
  return (
    <Container className={className}>
      <Label>Match</Label>
      <ScoreContainer>
        <Score $isHome>{homeScore}</Score>
        <Separator>—</Separator>
        <Score>{awayScore}</Score>
      </ScoreContainer>
    </Container>
  );
}

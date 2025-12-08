'use client';

import { Container } from './matchScore.styled';
import { MatchScoreProps } from './matchScore.types';

export default function MatchScore({ homeScore, awayScore, className }: MatchScoreProps) {
  return (
    <Container className={className}>
      Match: {homeScore} - {awayScore}
    </Container>
  );
}

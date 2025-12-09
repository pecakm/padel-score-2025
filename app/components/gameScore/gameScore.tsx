'use client';

import { MaxGameScore } from '@/constants';

import { Container, Label, ScoreContainer, Score, Separator } from './gameScore.styled';
import { GameScoreProps } from './gameScore.types';
import { GameScoreLabels } from './gameScore.constants';

export default function GameScore({ homeScore, awayScore, isTieBreak, className }: GameScoreProps) {
  const homeScoreLabel = isTieBreak
    ? homeScore
    : awayScore !== MaxGameScore - 1
      ? GameScoreLabels[homeScore]
      : '';
  const awayScoreLabel = isTieBreak
    ? awayScore
    : homeScore !== MaxGameScore - 1
      ? GameScoreLabels[awayScore]
      : '';

  return (
    <Container className={className}>
      <Label>Game</Label>
      <ScoreContainer>
        <Score $isHome>{homeScoreLabel || '—'}</Score>
        <Separator>—</Separator>
        <Score>{awayScoreLabel || '—'}</Score>
      </ScoreContainer>
    </Container>
  );
}

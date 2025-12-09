export interface GameScoreProps {
  homeScore: number;
  awayScore: number;
  isTieBreak: boolean;
  className?: string;
};

export interface ScoreProps {
  $isHome?: boolean;
}

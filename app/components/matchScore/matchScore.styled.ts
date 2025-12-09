import styled from 'styled-components';

import { ScoreProps } from '../gameScore/gameScore.types';

export const Container = styled.div`
  width: 100%;
  max-width: 800px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border-radius: 1.5rem;
  padding: 2rem 2.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
  animation: slideInDown 0.6s cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, 
      rgba(0, 255, 255, 0.8) 0%, 
      rgba(138, 43, 226, 0.8) 50%, 
      rgba(0, 255, 255, 0.8) 100%);
    background-size: 200% 100%;
    animation: shimmer 3s linear infinite;
  }

  @keyframes slideInDown {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }

  @media (min-width: 768px) {
    border-radius: 2rem;
    padding: 3rem 4rem;
  }
`;

export const Label = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const ScoreContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const Score = styled.div<ScoreProps>`
  font-size: 4.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, 
    ${(props) => props.$isHome ? 'rgba(0, 255, 255, 1)' : 'rgba(138, 43, 226, 1)'} 0%, 
    ${(props) => props.$isHome ? 'rgba(0, 191, 255, 1)' : 'rgba(186, 85, 211, 1)'} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 30px ${(props) => props.$isHome ? 'rgba(0, 255, 255, 0.3)' : 'rgba(138, 43, 226, 0.3)'};
  line-height: 1;
  position: relative;

  @media (min-width: 768px) {
    font-size: 6rem;
  }
`;

export const Separator = styled.div`
  font-size: 3rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.3);
  line-height: 1;

  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

import styled from 'styled-components';

import { ScoreProps } from './gameScore.types';

export const Container = styled.div`
  width: 100%;
  max-width: 600px;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(12px);
  border-radius: 1.2rem;
  padding: 1.5rem 2rem;
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: 
    0 12px 40px rgba(0, 0, 0, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.06);
  position: relative;
  overflow: hidden;
  animation: slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s both;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, 
      rgba(0, 191, 255, 0.4) 0%, 
      rgba(138, 43, 226, 0.4) 100%);
  }

  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (min-width: 768px) {
    border-radius: 1.5rem;
    padding: 2rem 3rem;
  }
`;

export const Label = styled.div`
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 1rem;
  text-align: center;
`;

export const ScoreContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
`;

export const Score = styled.div<ScoreProps>`
  font-size: 2.5rem;
  font-weight: 600;
  color: ${(props) => props.$isHome ? 'rgba(0, 255, 255, 0.8)' : 'rgba(186, 85, 211, 0.8)'};
  line-height: 1;
  text-shadow: 0 0 15px ${(props) => props.$isHome ? 'rgba(0, 255, 255, 0.15)' : 'rgba(138, 43, 226, 0.15)'};
  position: relative;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const Separator = styled.div`
  font-size: 2rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.2);
  line-height: 1;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

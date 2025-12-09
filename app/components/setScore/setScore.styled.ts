import styled from 'styled-components';

import { ScoreProps } from './setScore.types';

export const Container = styled.div`
  width: 100%;
  max-width: 700px;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(15px);
  border-radius: 1.3rem;
  padding: 2rem 2.5rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 
    0 15px 50px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
  position: relative;
  overflow: hidden;
  animation: slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.1s both;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, 
      rgba(0, 191, 255, 0.6) 0%, 
      rgba(138, 43, 226, 0.6) 100%);
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
    border-radius: 1.8rem;
    padding: 2.5rem 3.5rem;
  }
`;

export const Label = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 1.2rem;
  text-align: center;
`;

export const ScoreContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;

export const Score = styled.div<ScoreProps>`
  font-size: 3.5rem;
  font-weight: 700;
  color: ${(props) => props.$isHome ? 'rgba(0, 255, 255, 0.9)' : 'rgba(186, 85, 211, 0.9)'};
  line-height: 1;
  text-shadow: 0 0 20px ${(props) => props.$isHome ? 'rgba(0, 255, 255, 0.2)' : 'rgba(138, 43, 226, 0.2)'};
  position: relative;

  @media (min-width: 768px) {
    font-size: 4.5rem;
  }
`;

export const Separator = styled.div`
  font-size: 2.5rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.25);
  line-height: 1;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

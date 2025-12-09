import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  z-index: 1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 4rem 2rem;
    gap: 3rem;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1.5rem;
  margin-top: 2rem;
  width: 100%;
  max-width: 600px;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 2rem;
  }
`;

export const Button = styled.button`
  flex: 1;
  padding: 1.5rem 2rem;
  border-radius: 1.2rem;
  background: linear-gradient(135deg, rgba(0, 255, 255, 0.15) 0%, rgba(138, 43, 226, 0.15) 100%);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }

  &:hover {
    transform: translateY(-2px);
    background: linear-gradient(135deg, rgba(0, 255, 255, 0.25) 0%, rgba(138, 43, 226, 0.25) 100%);
    border-color: rgba(0, 255, 255, 0.4);
    box-shadow: 
      0 12px 40px rgba(0, 255, 255, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(0);
    box-shadow: 
      0 4px 20px rgba(0, 255, 255, 0.15),
      inset 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  @media (min-width: 768px) {
    padding: 1.8rem 3rem;
    font-size: 2.4rem;
  }
`;

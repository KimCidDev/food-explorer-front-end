import styled, { keyframes } from 'styled-components';

const sizes = {
  small: {
    width: '25px',
    padding: '5px'
  },
  medium: {
    width: '60px',
    padding: '10px'
  },
  large: {
    width: '120px',
    padding: '15px'
  }
};

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background-color: transparent;
`;

export const breathingAnim = keyframes`
  0% {
    width: scale(0);
    opacity: 0;
  }
  25% {
    width: scale(0.25);
    opacity: 1;
  }
  50% {
    width: scale(0.5);
    opacity: 0.8;
  }
  75% {
    width: scale(0.8);
    opacity: 0.6;
  }
  100% {
    width: scale(0.6);
    opacity: 1;
  }
 `;

export const Circle = styled.div`
  height: ${({ size }) => sizes[size].width};
  width: ${({ size }) => sizes[size].width};
  border-style: solid;
  border-radius: 50%;
  border-color: ${({ theme }) => theme.COLORS.COOLEST_PURPLE};
  animation-name: ${breathingAnim};
  animation-duration: 10s;
  animation-iteration-count: infinite;
`;

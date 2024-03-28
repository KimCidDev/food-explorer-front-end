import styled, { keyframes } from 'styled-components';

const sizes = {
  small: {
    width: '45px',
    padding: '5px'
  },
  medium: {
    width: '80px',
    padding: '10px'
  },
  large: {
    width: '150px',
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
    transform: scale(0.1);
    opacity: 0.2;
  }
  50% {
    transform: scale(0.5);
    opacity: 0.8;
  }
  75% {
    transform: scale(0.8);
    opacity: 0.6;
  }
  100% {
    transform: scale(0.4);
    opacity: 0.4;
  }
 `;

export const Circle = styled.div`
  height: ${({ size }) => parseFloat(sizes[size].width)}px;
  width: ${({ size }) => parseFloat(sizes[size].width)}px;
  border-style: solid;
  border-radius: 50%;
  border-color: ${({ theme }) => theme.COLORS.COOLEST_PURPLE};
  animation-name: ${breathingAnim};
  animation-duration: 10s;
  animation-iteration-count: infinite;
`;

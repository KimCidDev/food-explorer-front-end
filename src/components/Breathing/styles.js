import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background-color: #330022;
`;

export const breathingAnim = keyframes`
  0% {
    width: 100px;
    height: 100px;
  }
  25% {
    width: 150px;
    height: 150px;
    opacity: 1;
  }
  50% {
    width: 155px;
    height: 155px;
    opacity: 0.8;
  }
  75% {
    width: 170px;
    height: 170px;
    opacity: 0.6;
  }
  100% {
    width: 100px;
    height: 100px;
    opacity: 1;
  }
 `;

export const Circle = styled.div`
  height: 100px;
  width: 100px;
  border-style: solid;
  border-radius: 50%;
  border-color: ${({ theme }) => theme.COLORS.COOLEST_PURPLE};
  animation-name: ${breathingAnim};
  animation-duration: 10s;
  animation-iteration-count: infinite;
`;

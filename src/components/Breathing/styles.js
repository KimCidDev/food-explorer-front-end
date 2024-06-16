import styled, { keyframes } from 'styled-components';

const sizes = {
  small: '45px',
  medium: '80px',
  large: '150px'
};

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

export const breathingAnim = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.5);
    opacity: 1;
  }
`;

export const Circle = styled.div`
  height: ${({ size }) => sizes[size]};
  width: ${({ size }) => sizes[size]};
  border: 3px solid ${({ theme }) => theme.COLORS.BUTTON_COLOR};
  border-radius: 50%;
  animation: ${breathingAnim} 2s infinite;
`;

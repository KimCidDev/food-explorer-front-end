// src/pages/SignIn/styles.js

import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    flex-direction: row;
    justify-content: space-around;
    padding: 0;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 40px 20px;
  background-color: ${({ theme }) => theme.COLORS.INPUT_BG};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h1 {
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
    margin-bottom: 20px;
  }

  .inputBox {
    width: 100%;
  }

  input[type='text'],
  input[type='password'] {
    width: 100%;
    padding: 10px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.COLORS.INPUT_BG};
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.PLACEHOLDER_COLOR};
    }
  }

  button {
    min-height: 40px;
    background-color: ${({ theme }) => theme.COLORS.BUTTON_COLOR};
    color: ${({ theme }) => theme.COLORS.FORM_BG};
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${({ theme }) => theme.COLORS.BUTTON_HOVER_COLOR};
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding: 40px 35px;

    h1 {
      margin-top: 20px;
      color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  user-select: none;
  margin-bottom: 30px;

  svg {
    transform: scale(1.5);
    user-select: none;
    fill: ${({ theme }) => theme.COLORS.LOGO_COLOR};
  }

  h1 {
    color: ${({ theme }) => theme.COLORS.LOGO_COLOR};
    font-size: 40px;
    font-family: 'Roboto Slab', sans-serif;
    letter-spacing: -1px;
    user-select: none;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    margin-bottom: 0;
  }
`;

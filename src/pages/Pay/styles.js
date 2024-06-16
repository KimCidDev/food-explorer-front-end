import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20px;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};

  h2 {
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
    font-size: 24px;
    margin-bottom: 20px;
  }

  h3 {
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
    font-size: 18px;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;

    button {
      width: 100%;
      max-width: 200px;
      align-self: center;
      background-color: ${({ theme }) => theme.COLORS.BUTTON_COLOR};

      &:hover {
        background-color: ${({ theme }) => theme.COLORS.BUTTON_HOVER_COLOR};
      }
    }
  }
`;

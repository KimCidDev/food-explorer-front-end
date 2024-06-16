import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding-bottom: 90px;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  display: flex;
  flex-direction: column;
  align-items: center;

  h2,
  h3 {
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
    margin: 20px 0;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 400px;
    padding: 20px;
    background-color: ${({ theme }) => theme.COLORS.FORM_BG};
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    button {
      margin-top: 20px;
      background-color: ${({ theme }) => theme.COLORS.BUTTON_COLOR};
      &:hover {
        background-color: ${({ theme }) => theme.COLORS.BUTTON_HOVER_COLOR};
      }
    }
  }
`;

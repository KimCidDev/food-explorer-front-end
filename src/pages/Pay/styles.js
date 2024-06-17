// src/pages/Pay/styles.js
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

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 20px;
  }

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;

    section {
      width: 100%;
      max-width: 400px;
      margin: 20px 0;
      text-align: center;
    }
  }

  h2 {
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
    margin-bottom: 20px;
  }

  .pay-button {
    width: 200px;
    background-color: ${({ theme }) => theme.COLORS.BUTTON_COLOR};
    &:hover {
      background-color: ${({ theme }) => theme.COLORS.BUTTON_HOVER_COLOR};
    }
  }

  .promo-image {
    margin-top: 30px;
    width: 80%;
    max-width: 600px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

// src/components/Header/styles.js

import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  color: #ffffff; /* Ensure text color is white */

  .logo {
    display: flex;
    align-items: center;

    h1 {
      font-size: 21px;
    }

    svg {
      height: 21px;
      fill: ${({ theme }) =>
        theme.COLORS.LOGO_COLOR}; /* Ensure logo color matches the theme */
    }
  }

  .searchAndCart {
    display: none;

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
      display: flex;
      align-items: center;
      justify-content: center;
      width: clamp(150px, 80%, 700px);
      gap: clamp(5px, 80%, 20px);

      h2 {
        min-width: 100px;
        font-size: clamp(10px, 1vw, 16px);
        color: #ffffff; /* Ensure text color is white */
        white-space: nowrap;
      }

      #searchInput {
        height: 45px;
        width: clamp(110px, 60%, 170px);
        padding: 0 16px;
        color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
        background-color: ${({ theme }) => theme.COLORS.INPUT_BG};
        border: 1px solid ${({ theme }) => theme.COLORS.PLACEHOLDER_COLOR};
        border-radius: 8px;
      }

      input {
        &::placeholder {
          font-size: clamp(6px, 10px, 1rem);
          color: ${({ theme }) => theme.COLORS.PLACEHOLDER_COLOR};
        }
      }

      button {
        width: clamp(100px, 90%, 150px);
        height: clamp(40px, 40px, 55px);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        padding: 0 5px;
        font-size: clamp(10px, 11px, 12px);
        font-weight: bold;
        white-space: nowrap;
        background-color: ${({ theme }) => theme.COLORS.BUTTON_COLOR};
        color: ${({ theme }) => theme.COLORS.FORM_BG};
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s ease;

        &:hover {
          background-color: ${({ theme }) => theme.COLORS.BUTTON_HOVER_COLOR};
        }
      }
    }
  }
`;

import { createGlobalStyle } from 'styled-components';
import { DEVICE_BREAKPOINTS } from './deviceBreakpoints';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    p {
      //font-size: 16px;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      /* Light and warm background color for mobile */
      body {
        background-color: ${({ theme }) => theme.COLORS.INPUT_BG};
      }
    }
    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      /* Peach puff color for medium devices */
      body {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
      }
    }
    @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
      /* Papaya whip color for large devices */
      body {
        background-color: ${({ theme }) => theme.COLORS.FORM_BG};
      }
    }
  }

  body {
    width: 100%;
    font-family: 'Roboto Slab', sans-serif;
    color: ${({ theme }) =>
      theme.COLORS.TEXT_COLOR}; /* Dark text color for readability */
  }

  p, span {
    font-size: 14px;
  }

  h1, h2, h3 {
    font-size: 24px; /* Increased font size for headings */
    font-family: "Poppins", sans-serif;
    font-weight: 600; /* Increased font weight for better visibility */
  }

  h2, p, svg {
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR}; /* Dark text color */
  }
`;

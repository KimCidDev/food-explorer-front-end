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
      body div {
        background-color: #FFE4C4; /* Light and warm background color for mobile */
      }

      p {
        //font-size: 0.8rem;
      }
    }
    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      body div {
        background-color: #FFDAB9; /* Peach puff color for medium devices */
      }
    }
    @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
      body div {
        background-color: #FFEFD5; /* Papaya whip color for large devices */
      }
    }
  }

  body {
    width: 100%;
    font-family: 'Roboto Slab', sans-serif;
    color: ${({ theme }) =>
      theme.COLORS.DARK_700}; /* Dark text color for readability */
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
    color: ${({ theme }) => theme.COLORS.DARK_700}; /* Dark text color */
  }
`;

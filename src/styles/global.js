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
      //background-color: #330022;
    }

      p {
        //font-size: 0.8rem;
      }
    }
    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      body div {
      //background-color: blue;
    }
    }
    @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
      body div {
      //background-color: purple;
    }
    }
  }

  body {
    width: 100%;
  }

  p, span {
    font-family: 'Roboto Slab', sans-serif;
    font-size: 14px;
  }
  
  h1, h2, h3 {
    font-size: 14px;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
  }

  h2, p, svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
  }

`;

import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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

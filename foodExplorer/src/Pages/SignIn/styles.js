import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 160px;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  > div {
    margin-bottom: 75px;
  }

  > div:nth-child(2) h1 {
    display: none;
  }

  > .logo h1 {
    font-size: 37px;
    font-weight: bold;
  }

  > .logo svg {
    font-size: 259px;
    fill: #333333;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 0;
    margin: 0 auto;

    > div:nth-child(2) {
    max-height: 80vh;
    max-width: 350px;

    margin: 0;
    border-radius: 8px;

    background-color: ${({ theme }) => theme.COLORS.DARK_700};
  }

  > div:nth-child(2) h1 {
    display: flex;

    font-size: 1.5rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100}
  }

    .logo {
      margin: 0 20px;
    }
  }
`;

export const Form = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  padding: 0 60px;

  > p {
    display: flex;
    color: white;
    align-items: flex-start;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    align-items: center;
    justify-content: center;
    align-items: center;
    max-width: 50vw;
    margin-bottom: 0;

    .logo h1 {
      word-wrap: nowrap;
    }
  }
`;

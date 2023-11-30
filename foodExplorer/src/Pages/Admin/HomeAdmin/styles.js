import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../../styles/deviceBreakpoints';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  padding-bottom: 90px;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  > div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 40px;

    .logo h1 {
      font-size: 21px;
    }

    .logo svg {
      height: 21px;
    }

    > .searchAndCart {
      display: none;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
      > .searchAndCart {
        display: flex;
        width: 50%;
        gap: 20px;

        input {
          border-radius: 8px;
          height: 32px;
        }

        button {
          height: 32px;

          padding: 0 10px;

          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;

          font-weight: bold;
          white-space: nowrap;
        }
      }
    }
  }

  > .banner {
    height: 120px;

    display: flex;
    align-items: center;
    background: linear-gradient(#091e26, #00131c);

    margin: 0 25px;
    border-radius: 3px;

    img {
      height: 165px;
      margin-bottom: 25px;
    }

    .textContent {
      h2 {
        color: white;
        font-size: 16px;
        font-weight: normal;
        white-space: nowrap;
      }

      p {
        color: white;
        font-size: 12px;
      }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
      display: flex;
      align-items: center;
      justify-content: space-around;
      overflow: hidden;

      img {
        height: 295px;
      }
    }
  }

  > .section h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
  }

  > div .addToBasket {
    display: none;
  }

  > .sectionMenu div button {
    height: 32px;
  }
`;

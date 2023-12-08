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

      input::placeholder {
        color: white;
      }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
      margin-bottom: 110px;

      > .searchAndCart {
        display: flex;
        width: 50%;
        gap: clamp(25px, 15%, 100px);

        #searchInput {
          height: 32px;
          width: clamp(240px, 95%, 400px);

          padding: 0 16px;

          background-color: ${({ theme }) => theme.COLORS.DARK_900};

          border: 1px solid ${({ theme }) => theme.COLORS.TINT_TOMATO_400};
          border-radius: 8px;
        }

        button {
          height: 32px;
          width: clamp(200px, 95%, 400px);

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

      img {
        height: 245px;
        clip-path: polygon(5% -9px, 100% 7.29%, 99.68% 80.02%, 8.41% 79.38%);
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

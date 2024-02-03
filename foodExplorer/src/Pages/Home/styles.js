import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

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
      margin-bottom: clamp(30px, 90%, 80px);
      padding: 0 120px;
      justify-content: space-between;

      #menuLink {
        display: none;

        svg:first-child {
          display: none;
        }
      }

      > .searchAndCart {
        display: flex;
        align-items: center;
        width: 55%;
        gap: 20px;

        h2 {
          min-width: 200px;
          color: ${({ theme }) => theme.COLORS.LIGHT_400};
        }

        #searchInput {
          height: 45px;
          width: 550px;

          color: ${({ theme }) => theme.COLORS.LIGHT_200};

          padding: 0 16px;
          background-color: ${({ theme }) => theme.COLORS.DARK_900};

          border: 1px solid ${({ theme }) => theme.COLORS.TINT_TOMATO_400};
          border-radius: 8px;
        }

        input {
          border-radius: 8px;
          height: 32px;
        }

        button {
          height: 56px;

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

  main {
    > .banner {
      display: flex;
      align-items: center;
      background: linear-gradient(#091e26, #00131c);

      margin: 0 25px;
      border-radius: 3px;

      .textContent {
        h2 {
          color: white;
          font-size: 16px;
          font-weight: normal;
          white-space: nowrap;
        }

        p {
          text-align: center;
          color: white;
          font-size: 12px;
        }
      }
    }

    > .section h1 {
      color: ${({ theme }) => theme.COLORS.LIGHT_200};
    }

    .section p {
      text-align: center;
    }

    .section .addToBasket {
      display: none;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
      margin: 0 120px;

      .banner {
        display: flex;
        align-items: center;
        justify-content: space-around;
        max-height: 300px;

        padding: 0 120px;
        margin-bottom: 62px;

        gap: clamp(25px, 100%, 40px);
        overflow: visible;

        img {
          width: clamp(350px, 100%, 450px);
        }

        .textContent {
          h2 {
            font-size: 32px;
          }

          p {
            margin-top: 5px;
            font-size: 14px;
          }
        }
      }
    }
  }
`;

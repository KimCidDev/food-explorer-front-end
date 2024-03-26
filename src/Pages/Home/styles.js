import styled, { keyframes } from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

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
      padding: 0 100px;
      justify-content: space-between;

      #menuLink {
        display: none;

        svg:first-child {
          display: none;
        }
      }

      .searchAndCart {
        display: flex;
        align-items: center;
        justify-content: center;

        width: clamp(150px, 80%, 700px);
        gap: clamp(5px, 80%, 20px);

        h2 {
          min-width: 100px;

          font-size: clamp(10px, 1vw, 16px);
          color: ${({ theme }) => theme.COLORS.LIGHT_400};
          white-space: nowrap;
        }

        #searchInput {
          height: 45px;
          width: clamp(110px, 60%, 170px);

          padding: 0 16px;

          color: ${({ theme }) => theme.COLORS.LIGHT_200};
          background-color: ${({ theme }) => theme.COLORS.DARK_900};
          border: 1px solid ${({ theme }) => theme.COLORS.TINT_TOMATO_400};
          border-radius: 8px;
        }

        input {
          &::placeholder {
            font-size: clamp(6px, 10px, 1rem);
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
        }
      }
    }
  }

  main {
    padding: 0 25px;

    > .banner {
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(#091e26, #00131c);

      margin: 25px;
      padding: 0 30px;

      gap: clamp(2vw, 5vw, 10vw);

      border-radius: 3px;

      img {
        width: clamp(20%, 30vw, 375px);
      }

      .textContent {
        display: flex;
        flex-direction: column;
        gap: 8px;

        h2 {
          font-weight: bold;
          white-space: nowrap;
          font-size: clamp(0.8vw, 18px, 2.5vw);
        }
      }

      .textContent p {
        text-align: left;
        color: white;
        font-size: clamp(0.8vw, 12px, 2vw);
        opacity: 0;
        animation: ${fadeIn} 4s ease forwards;
      }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      > .banner {
        align-items: center;
        margin-bottom: 50px;
      }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
      padding: 0;

      .banner {
        max-height: 300px;

        justify-content: center;

        margin: 30px 120px 62px 120px;

        gap: clamp(2vw, 5vw, 10vw);
        overflow: visible;

        img {
          width: clamp(20%, 30vw, 375px);
        }

        .textContent {
          width: auto;

          h2 {
            font-size: clamp(2vw, 14px, 4vw);
          }

          p {
            margin-top: 5px;
            font-size: clamp(1vw, 10px, 2vw);
          }
        }
      }
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    .banner {
      min-height: 50px;
      padding: 24px;
      img {
        display: none;
      }

      .textContent {
        p {
          display: none;
        }
      }
    }
  }
`;

export const BreathingContainer = styled.div`
  display: ${({ loading }) => (loading ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.DARK_400};
  z-index: 999;
`;

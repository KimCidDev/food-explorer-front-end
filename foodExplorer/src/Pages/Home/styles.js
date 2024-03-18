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
      // margin-bottom: clamp(30px, 90%, 80px);
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
        gap: clamp(10px, 1px, 120px);

        h2 {
          min-width: 100px;
          margin: 0 clamp(30px, 2vw, 100px);

          font-size: clamp(10px, 1vw, 16px);
          color: ${({ theme }) => theme.COLORS.LIGHT_400};
          white-space: nowrap;
        }

        #searchInput {
          height: 45px;
          width: clamp(110px, 60%, 170px);
          color: ${({ theme }) => theme.COLORS.LIGHT_200};
          padding: 0 16px;
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
          margin-right: 10px;

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
      background: linear-gradient(#091e26, #00131c);

      margin: 25px;
      border-radius: 3px;

      img {
        height: clamp();
      }

      .textContent {
        display: flex;
        flex-direction: column;
        gap: 8px;
        width: 100%;

        h2 {
          color: white;
          font-weight: bold;
          white-space: nowrap;
          font-size: clamp(9px, 14px, 24px);
        }

        p {
          text-align: left;
          color: white;
          font-size: clamp(3px, 11px, 12px);
        }
      }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      > .banner {
        justify-content: center;
        margin-bottom: 50px;
      }

      > .banner .textContent p {
        text-align: left;
      }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
      padding: 0;

      .banner {
        max-height: 300px;

        justify-content: center;
        align-items: center;

        margin: 0 120px 62px 120px;

        gap: clamp(25px, 100%, 40px);
        overflow: visible;

        img {
          width: clamp(150px, 250vw, 450px);
        }

        .textContent {
          width: auto;

          h2 {
            font-size: clamp(16px, 130%, 32px);
          }

          p {
            margin-top: 5px;
            font-size: 14px;
          }
        }
      }
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
      .banner {
        padding: 24px;
        img {
          display: none;
        }
      }
  }
`;

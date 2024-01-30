import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  overflow-y: auto;

  padding-bottom: 150px;

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
      margin-bottom: clamp(15px, 90%, 30px);

      > .searchAndCart {
        display: flex;
        width: 50%;
        gap: 20px;

        #searchInput {
          height: 45px;
          width: clamp(100px, 85%, 500px);

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

  > .section {
    display: flex;

    h1 {
      color: ${({ theme }) => theme.COLORS.LIGHT_200};
    }
  }

  > .section .childrenBox {
    display: flex;

    img {
      height: clamp(250px, 100%, 400px);
      width: clamp(250px, 100%, 400px);
      margin-right: 60px;
    }

    .textContent {
      display: flex;
      flex-direction: column;
      align-items: center;

      h1 {
        color: ${({ theme }) => theme.COLORS.LIGHT_200};
        font-size: 27px;
        display: flex;
        align-items: center;

        svg {
          font-size: 12px;
        }
      }

      p {
        text-align: center;
      }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
      flex-direction: row;
      align-items: center;
      justify-content: center;

      margin-top: 42px;

      .textContent {
        max-width: 65%;
        align-items: start;
        gap: 24px;

        p {
          text-align: left;
          flex-wrap: nowrap;
        }
      }

      .addToBasket {
        margin-top: 24px;
      }

      .tagsSection {
        justify-content: start;
        flex-wrap: nowrap;

        div {
          padding: 0 6px;
        }

        div:first-child {
          margin-left: 0;
        }

        p {
          font-size: 0.8rem;
        }
      }
    }
  }

  > .section .tagsSection {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    max-width: 450px;
    flex-wrap: wrap;
  }

  > .section .addToBasket {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    max-width: 450px;
    margin-top: 24px;

    > .howManyBox {
      display: flex;
      gap: 15px;
      margin-right: 16px;

      svg,
      p {
        font-size: 22px;
      }
    }

    > button {
      max-width: auto;
    }
  }
`;

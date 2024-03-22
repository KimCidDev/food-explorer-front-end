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

  > .section {
    display: flex;
    margin: 0 120px;

    h2 {
      color: ${({ theme }) => theme.COLORS.PURPLE_200};
    }
  }

  > .section .childrenBox {
    display: flex;
    gap: 50px;
    margin-top: 42px;

    img {
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

      .adminEditButton {
        width: 100%;

        display: flex;
        justify-content: center;
        align-items: center;

        button {
          width: 20vw;
        }
      }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 10px;

      img {
        height: clamp(20vw, 14px, 2.5vw);
      }

      .textContent {
        max-width: 65%;
        align-items: start;
        gap: 20px;

        p {
          color: ${({ theme }) => theme.COLORS.LIGHT_300};
          font-family: 'Poppins', sans-serif;
          font-size: clamp(2vw, 14px, 2.5vw);
          text-align: justify;
          flex-wrap: nowrap;
        }
      }

      .addToBasket {
        margin-top: 24px;

        .adminEditButton {
          justify-content: left;
        }

        > .howManyBox {
          gap: 32px;

          svg {
            font-size: 52px;
          }

          p {
            font-size: 32px;
          }
        }

        > .howManyBox button {
          margin-left: 60px;
          max-width: auto;
        }
      }

      .tagsSection {
        justify-content: left;
        gap: 20px;

        div {
          display: flex;
          margin: 0;
          height: 32px;
          padding: 0 15px;

          p {
            font-size: 1rem;
            color: ${({ theme }) => theme.COLORS.LIGHT_200};
          }
        }
      }
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    .section {
      margin: 0 20px;

      .goBackLink {
        h2 {
          font-size: clamp(2vw, 14px, 2.5vw);
        }
      }

      .childrenBox {
        display: flex;
        flex-direction: column;
        gap: 30px;

        img {
          margin: 0;
        }

        .textContent {
          margin: 0 40px;
          gap: 12px;

          p {
            text-align: justify;
          }
        }
      }
    }
  }

  .section .childrenBox {
    justify-content: center;
    align-items: center;
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
    align-items: center;
    width: 100%;
    max-width: 450px;
    margin-top: 24px;

    > .howManyBox {
      display: flex;
      width: 100%;
      align-items: center;
      gap: 15px;

      svg,
      p {
        font-size: 22px;
      }
    }
  }
`;

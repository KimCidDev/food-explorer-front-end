import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};

  .section {
    display: flex;

    .goBackLink {
      margin-left: auto;
      gap: clamp(0.2rem, 1vw, 0.3rem);

      svg {
        font-size: clamp(0.1rem, 0.9vw, 0.2rem);
      }

      h2 {
        font-size: clamp(1rem, 2.3vw, 1.6rem);
      }
    }

    .childrenBox {
      img {
        width: 100%;
        height: auto;
        max-width: 280px;
        object-fit: cover;
        margin-right: 60px;
      }

      .textContent {
        display: flex;
        flex-direction: column;
        align-items: center;

        h1 {
          color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
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
        gap: 10px;

        img {
          min-width: 250px;
          max-width: 100%;
        }

        .textContent {
          max-width: 65%;
          align-items: start;
          gap: 20px;

          p {
            color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
            font-family: 'Poppins', sans-serif;
            font-size: clamp(2vw, 14px, 2.5vw);
            text-align: justify;
          }
        }

        .addToBasket {
          margin-top: 24px;

          .adminEditButton {
            justify-content: left;
          }

          .howManyBox {
            gap: 32px;

            svg {
              font-size: 52px;
              color: ${({ theme }) => theme.COLORS.ICON_COLOR};
            }

            p {
              font-size: 32px;
            }

            button {
              margin-left: 60px;
            }
          }
        }
      }

      @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
        img {
          margin: 0;
        }

        .textContent {
          margin: 0 40px;
          gap: 15px;

          p {
            text-align: justify;
          }
        }
      }
    }
  }

  .tagsSection {
    display: flex;
    width: 100%;
    max-width: 450px;
    flex-wrap: wrap;
  }

  .addToBasket {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 450px;
    margin-top: 24px;

    .howManyBox {
      display: flex;
      width: 100%;
      align-items: center;
      gap: 15px;

      svg,
      p {
        font-size: 22px;
      }

      svg {
        color: ${({ theme }) => theme.COLORS.ICON_COLOR};
        cursor: pointer;
      }
    }
  }
`;

export const SectionWrapper = styled.div`
  .section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 25px 20px;

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      margin: 20px clamp(40px, 10%, 80px);

      .childrenBox {
        display: flex;
        max-height: 450px;
        flex-direction: row;
      }
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      .childrenBox {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 30px;

        .textContent {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          .tagsSection {
            justify-content: center;
            gap: 15px;
          }
        }
      }
    }
  }

  .goBackLink {
    display: flex;
    align-items: center;
    gap: 10px;

    h2 {
      cursor: pointer;
      color: ${({ theme }) => theme.COLORS.PRIMARY};
      font-size: 24px;
      font-weight: 500;
    }
  }

  .textContent {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
      align-items: flex-start;
      text-align: justify;
    }
  }
`;

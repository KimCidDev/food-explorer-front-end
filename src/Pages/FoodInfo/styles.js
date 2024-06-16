import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  padding-bottom: 150px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 clamp(0.8rem, 2vw, 2rem);

    background-color: red;

    .logo {
      h1 {
        color: ${({ theme }) => theme.COLORS.LOGO_COLOR};
        font-size: 200px;
      }
    }

    .searchAndCart {
      display: none;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
      margin-bottom: clamp(15px, 90%, 30px);
      padding: 0 120px;

      .searchAndCart {
        display: flex;
        align-items: center;
        width: 50%;
        gap: 20px;

        #searchInput {
          height: 45px;
          width: clamp(100px, 85%, 500px);
          padding: 0 16px;
          color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
          background-color: ${({ theme }) => theme.COLORS.INPUT_BG};
          border: 1px solid ${({ theme }) => theme.COLORS.BUTTON_COLOR};
          border-radius: 8px;
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
          background-color: ${({ theme }) => theme.COLORS.BUTTON_COLOR};
          color: ${({ theme }) => theme.COLORS.TEXT_COLOR};

          &:hover {
            background-color: ${({ theme }) => theme.COLORS.BUTTON_HOVER_COLOR};
          }
        }
      }
    }
  }

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
        max-width: 300px;
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
          min-width: 150px;
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
      margin: 20px clamp(80px, 70%, 120px);

      .childrenBox {
        margin: 30px;
        display: flex;
        flex-direction: row;
        gap: 40px;
      }
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
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

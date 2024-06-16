import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../../styles/deviceBreakpoints';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 90px;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};

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

    .searchAndCart {
      display: none;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
      .searchAndCart {
        display: flex;
        width: 50%;
        gap: 20px;

        #searchInput {
          height: 32px;
          width: clamp(240px, 95%, 400px);
          padding: 0 16px;
          background-color: ${({ theme }) => theme.COLORS.INPUT_BG};
          border: 1px solid ${({ theme }) => theme.COLORS.PLACEHOLDER_COLOR};
          border-radius: 8px;
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

  .section {
    padding: 20px;
    margin-bottom: 8px;

    h1 {
      color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
      font-size: 16px;
    }

    .childrenBox {
      display: flex;
      flex-direction: column;
      gap: 18px;
      height: 100%;

      h1 {
        color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
        margin-bottom: 20px;
      }

      .formTop {
        display: flex;
        flex-direction: column;
        gap: 24px;
        margin-bottom: 24px;

        #hiddenInput {
          height: 0;
          width: 0;
          display: none;
          margin: 0;
          padding: 0;
          border: none;
        }

        .dishImg label {
          display: flex;
          align-items: center;
          width: 100%;
          height: 50px;
          padding: 0 14px;
          gap: 8px;
          border: 1px solid ${({ theme }) => theme.COLORS.PLACEHOLDER_COLOR};
          border-radius: 8px;
          background-color: ${({ theme }) => theme.COLORS.INPUT_BG};

          svg {
            font-size: 21px;
          }
        }
      }

      .formMiddle {
        display: flex;
        flex-direction: column;
        gap: 24px;
        margin-bottom: 24px;

        .ingredientBox h3 {
          color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
          font-size: 14px;
          font-weight: normal;
        }

        .ingredientBox .tagBox {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          margin-top: 8px;
          padding: 16px;
          gap: 10px;
          background-color: ${({ theme }) => theme.COLORS.TAG_BG};
          border-radius: 8px;

          div {
            background-color: ${({ theme }) => theme.COLORS.SECONDARY};
            border-radius: 10px;
            padding: 10px;
            margin: 8px 0;
            p {
              color: ${({ theme }) => theme.COLORS.TAG_TEXT};
            }
          }
        }
      }

      .formBottom {
        display: flex;
        flex-direction: column;
        gap: 24px;
        margin-bottom: 24px;

        .description {
          width: 100%;
          height: 120px;
          border-radius: 8px;
          background-color: ${({ theme }) => theme.COLORS.INPUT_BG};

          h3 {
            margin: 0;
            padding: 0;
            color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
          }

          textarea {
            width: 100%;
            height: 80px;
            color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
            border-radius: 8px;
            border: none;
            background-color: transparent;
            margin: 0;

            &::placeholder {
              color: ${({ theme }) => theme.COLORS.PLACEHOLDER_COLOR};
              font-family: 'Roboto';
              font-style: italic;
            }
          }
        }

        .saveInfoBox {
          display: flex;
          gap: clamp(40px, 100px, 200px);

          button {
            width: 100%;
            max-width: 125px;
            background-color: ${({ theme }) => theme.COLORS.BUTTON_COLOR};
            border: 1px solid ${({ theme }) => theme.COLORS.BUTTON_COLOR};
            color: ${({ theme }) => theme.COLORS.FORM_BG};
            transition: background-color 0.3s ease;

            &:hover {
              background-color: ${({ theme }) =>
                theme.COLORS.BUTTON_HOVER_COLOR};
            }
          }

          button:first-child {
            background-color: ${({ theme }) => theme.COLORS.INPUT_BG};
            border: 1px solid ${({ theme }) => theme.COLORS.BUTTON_COLOR};
            color: ${({ theme }) => theme.COLORS.BUTTON_COLOR};

            &:hover {
              background-color: ${({ theme }) =>
                theme.COLORS.BUTTON_HOVER_COLOR};
              color: ${({ theme }) => theme.COLORS.FORM_BG};
            }
          }
        }
      }

      @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        .formTop {
          flex-direction: row;
          flex-wrap: wrap;
          gap: 32px;

          .inputBox:first-child {
            border: 0px solid black;
          }
        }

        .formMiddle {
          flex-direction: row;
          align-items: center;
          gap: 32px;

          .ingredientBox {
            width: 100vw;
          }

          .ingredientBox .tagBox {
            display: flex;
            margin-top: 8px;
            width: 100%;
          }
        }

        .formBottom {
          width: 100%;
          display: flex;
          justify-content: end;

          .description {
            width: 100%;

            textarea {
              resize: none;
              width: 100%;
            }
          }

          .saveInfoBox {
            width: 100%;
            display: flex;
            justify-content: end;
            gap: 30px;

            button {
              max-width: 125px;
            }

            button:first-child {
              background-color: ${({ theme }) => theme.COLORS.INPUT_BG};
              border: 1px solid ${({ theme }) => theme.COLORS.BUTTON_COLOR};
              color: ${({ theme }) => theme.COLORS.BUTTON_COLOR};
              max-width: 125px;

              &:hover {
                background-color: ${({ theme }) =>
                  theme.COLORS.BUTTON_HOVER_COLOR};
                color: ${({ theme }) => theme.COLORS.FORM_BG};
              }
            }
          }
        }
      }

      @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
        .formTop {
          max-width: 100%;
          flex-direction: row;
          gap: 32px;

          div {
            width: clamp(100%, 100%, 300px);
          }
        }

        .formMiddle {
          flex-direction: row;
          align-items: center;
          gap: 32px;

          .ingredientBox {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
        }

        .formBottom {
          width: 100%;
          display: flex;
          justify-content: end;

          .description {
            width: 100%;

            textarea {
              resize: none;
              width: 100%;
            }
          }

          button {
            width: 98px;
          }
        }
      }
    }
  }
`;

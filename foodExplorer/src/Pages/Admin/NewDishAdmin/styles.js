import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../../styles/deviceBreakpoints';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  padding-bottom: 90px;

  overflow-y: auto;

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
  }

  > .section {
    padding: 0 24px;

    margin-bottom: 8px;

    > h1 {
      color: ${({ theme }) => theme.COLORS.LIGHT_200};
    }

    > h1:first-child {
      font-size: 16px;
    }

    > .childrenBox {
      display: flex;
      flex-direction: column;

      gap: 18px;

      height: 100%;

      > h1 {
        color: ${({ theme }) => theme.COLORS.LIGHT_200};
      }

      > form {
        display: flex;
        flex-direction: column;

        > .formTop {
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
          }

          .dishImg label {
            display: flex;
            align-items: center;

            width: 100%;
            height: 50px;

            padding: 0 14px;
            gap: 8px;

            border-radius: 8px;
            border: none;

            background-color: ${({ theme }) => theme.COLORS.DARK_800};

            svg {
              font-size: 21px;
            }
          }
        }

        > .formMiddle {
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin-bottom: 24px;

          .ingredientBox h3 {
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            font-size: 14px;
            font-weight: normal;
          }

          .ingredientBox .tagBox {
            height: 45px;

            display: flex;
            align-items: center;

            margin-top: 8px;
            padding: 26px 14px;
            gap: 16px;

            background-color: ${({ theme }) => theme.COLORS.DARK_900};

            border-radius: 8px;

            > div {
              height: 32px;
              padding: 10px 16px;

              margin: 12px 0;

              border-radius: 10px;

              background-color: ${({ theme }) => theme.COLORS.LIGHT_600};

              p {
                color: ${({ theme }) => theme.COLORS.LIGHT_300};
              }
            }
          }
        }

        > .formBottom {
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin-bottom: 24px;

          .description {
            width: 100%;
            height: 120px;
            border-radius: 8px;

            background-color: ${({ theme }) => theme.COLORS.DARK_800};

            h3 {
              margin-bottom: 8px;
              padding-bottom: 8px;
              background-color: ${({ theme }) => theme.COLORS.DARK_400};
              color: ${({ theme }) => theme.COLORS.LIGHT_100};
            }

            > textarea {
              width: 100%;
              height: 100%;

              border-radius: 8px;
              border: none;

              background-color: transparent;

              &::placeholder {
                padding-top: 14px;
                padding-left: 14px;
                color: ${({ theme }) => theme.COLORS.LIGHT_500};
                font-family: 'Roboto';
              }
            }
          }
        }

        @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
          padding: 0 80px;

          > .formTop {
            max-width: 100%;

            flex-direction: row;
            gap: 32px;

            > div {
              width: clamp(100%, 100%, 300px);
            }

            > div:nth-child(2) {
              min-width: 170px;
              max-width: 220px;
            }
          }

          .formMiddle {
            flex-direction: row;
            align-items: center;

            gap: 32px;

            > h3 {
              margin-bottom: 130px;
            }

            > .ingredientBox .tagBox {
              margin-top: 8px;
            }

            > .inputBox input {
              width: 100%;
            }
          }

          .formBottom {
            width: 100%;

            display: flex;
            justify-content: end;

            > .description {
              width: 100%;

              textarea {
                resize: none;
                width: 100%;
              }
            }

            > button {
              display: block;
              margin-left: auto;
              margin-right: 0;
              width: 98px;
            }
          }
        }

        @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
          padding: 0 125px;

          > .formTop {
            max-width: 100%;
            flex-direction: row;
            gap: 32px;

            > div {
              width: clamp(100%, 100%, 300px);
            }
          }

          .formMiddle {
            flex-direction: row;
            align-items: center;

            gap: 32px;

            > h3 {
              margin-bottom: 130px;
            }

            > .ingredientBox .tagBox {
              margin-top: 8px;
            }
          }

          .formBottom {
            width: 100%;

            display: flex;
            justify-content: end;

            > .description {
              width: 100%;

              textarea {
                resize: none;
                width: 100%;
              }
            }

            > button {
              width: 98px;
            }
          }
        }
      }
    }
  }
`;

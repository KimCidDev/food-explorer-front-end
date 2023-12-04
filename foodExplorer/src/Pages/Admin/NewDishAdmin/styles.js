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

      > form {
        display: flex;
        flex-direction: column;
        gap: 24px;
      }

      > button {
        max-width: auto;
      }
    }

    > .childrenBox h1 {
      color: ${({ theme }) => theme.COLORS.LIGHT_200};
    }

    > .childrenBox h3 {
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      font-size: 14px;
      font-weight: normal;
    }

    > .childrenBox div p {
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    > .childrenBox input {
      width: 100%;
      background-color: ${({ theme }) => theme.COLORS.DARK_800};
    }

    > .childrenBox #dishImg {
      height: 0;
      width: 0;
      display: none;
      margin: 0;
      padding: 0;
    }

    > .childrenBox label {
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

    > .childrenBox .tagBox {
      height: 45px;

      display: flex;
      align-items: center;

      margin-top: -18px;
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

    > .childrenBox .description {
      width: 100%;
      height: 120px;

      margin-top: -18px;

      border-radius: 8px;

      background-color: ${({ theme }) => theme.COLORS.DARK_800};

      > textarea {
        width: 100%;
        height: 172px;

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

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
      padding: 0 125px;

      .formTop {
        display: flex;

        gap: 32px;
      }

      .formMiddle {
        display: flex;
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
        display: flex;
        justify-content: end;

        > button {
          width: 98px;
        }
      }

      /* > .childrenBox {
        display: grid;
        grid-template-columns: 250px auto;
        grid-template-rows: 80px 80px 80px auto;
        grid-template-areas:
         'title'
         'image name description'
      
        > .xisSalada {
          background-color: red;
          grid-area: content;
        } 
      }
      */
    }
  }
`;

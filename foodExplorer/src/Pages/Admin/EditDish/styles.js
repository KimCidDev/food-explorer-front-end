import styled from 'styled-components';

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

    > h1:first-child {
      font-size: 16px;
    }
  }

  > .section .childrenBox {
    display: flex;
    flex-direction: column;

    gap: 18px;

    height: 100%;

    > form {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
  }

  > .section h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
    font-size: 27px;
  }

  > .section .childrenBox h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
  }

  > .section .childrenBox h3 {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-size: 14px;
    font-weight: normal;
  }

  > .section .childrenBox div p {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  > .section .childrenBox input {
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
  }

  > .section .childrenBox #dishImg {
    height: 0;
    width: 0;
    display: none;
    margin: 0;
    padding: 0;
  }

  > .section .childrenBox label {
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


  > .section .childrenBox .tagBox {
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

  > .section .childrenBox .description {
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
        font-family: "Roboto";
      }
    }
  }

  .section .childrenBox .buttonOptions {
    display: flex;
    gap: 32px;

    button {
      background-color: ${({ theme }) => theme.COLORS.TINT_TOMATO_400};
    }

    button:first-child {
      background-color: ${({ theme }) => theme.COLORS.DARK_800};
    }
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
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
    align-items: left;

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
    margin-top: 8px;
  }

  > .section .childrenBox div p {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  > .section .childrenBox input {
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
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
      }
    }
  }
`;

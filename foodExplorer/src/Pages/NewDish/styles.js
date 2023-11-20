import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

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
    overflow-y: auto;

    height: 100%;

    > button {
      max-width: auto;
    }
  }

  > .section h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
    font-size: 27px;
  }

  > .section .childrenBox h1 {
    color: red;
  }

  > .section .childrenBox h3 {
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
    font-size: 14px;
    font-weight: normal;
    margin-top: 8px;
  }

  > .section .childrenBox .description {
    width: 100%;
    height: 172px;
    
    margin-top: 16px;
    border-radius: 8px;

    background-color: ${({ theme }) => theme.COLORS.DARK_800};

    > textarea {
      width: 100%;
      height: 172px;

      border-radius: 8px;
      border: none;

      background-color: transparent;

      &::placeholder {
        padding-left: 14px;
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
      }
    }
  }
`;

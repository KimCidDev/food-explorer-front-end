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
    padding: 0 56px;
  }

  > .section .childrenBox {
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 100%;
  }

  > .section img {
    height: 245px;
    width: 245px;
  }

  > .section h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
    font-size: 27px;
    display: flex;
    align-items: center;

    svg {
      font-size: 12px;
    }
  }

  > .section p {
    text-align: center;
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

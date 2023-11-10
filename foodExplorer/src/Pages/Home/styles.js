import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  

  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  > div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;


    .logo h1 {
      font-size: 21px;
    }

    .logo svg {
      height: 21px;
    }
  }

  > .banner {
    height: 120px;
    max-width: 560px;

    display: flex;
    align-items: center;
    background: linear-gradient(#091e26, #00131c);

    margin: 0 25px;
    border-radius: 3px;

    img {
      height: 145px;
    }

    .textContent {
      width: 100%;

      h2 {
        color: white;
        font-size: 18px;
        font-weight: bold;
      }

      p {
        color: white;
        font-size: 12px;
      }
    }
  }

  > .section h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
    margin-top: 30px;
  }

  > .sectionMenu {
    display: flex;
    gap: 16px;
  }

  > .sectionMenu div button {
    height: 32px;
  }
`;

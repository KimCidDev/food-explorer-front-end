import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  
  padding-bottom: 90px;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  > div:first-child {
    max-width: 500px;

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
      margin-bottom: 25px;
      margin-left: -25px;
    }

    .textContent {
      width: 100%;

      h2 {
        color: white;
        font-size: 16px;
        font-weight: normal;
        white-space: nowrap;
      }

      p {
        color: white;
        font-size: 12px;
      }
    }
  }

  > .section h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
  }

  > .sectionMenu div button {
    height: 32px;
  }
`;

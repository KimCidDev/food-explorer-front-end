import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  > .banner {
    height: 120px;
    max-width: 560px;

    display: flex;
    align-items: center;
    background: linear-gradient(#091E26, #00131C);

    margin: 0 25px;
    border-radius: 3px;

    img {
      height: 145px;
    }

    .textContent {
      widht: 100%;

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

  > .sectionMenu {
    display: flex;
    gap: 16px;
  }

  > .sectionMenu div button {
    height: 32px;
  }
`;

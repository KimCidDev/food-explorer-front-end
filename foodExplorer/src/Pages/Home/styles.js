import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  > .banner {
    height: 120px;
    width: 100%;

    display: flex;

    .textContent {
      h2 {
        color: white;
      }
      p {
        color: white;
      }
    }
  }

  > .itemSearchBox {
    padding: 0 30px;
  }
`;

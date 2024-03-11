import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  > .itemSearchBox {
    padding: 0 30px;

    h2 {
      height: 50px;

      margin-top: 36px;
      padding: 10px;

      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.LIGHT_700};
    }

    input {
      width: 100%;
    }

    .overviewBox {
      width: 80%;
      display: flex;
      justify-content: space-around;
      margin: 15px 0;
      padding: 5px 0;

      background-color: #8a5eff;
      border-radius: 10px;

      h3 {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }

      button {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};

  > .itemSearchBox {
    padding: 0 30px;

    h2 {
      height: 50px;
      margin-top: 36px;
      padding: 10px;
      color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.PLACEHOLDER_COLOR};
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
      background-color: ${({ theme }) => theme.COLORS.INPUT_BG};
      border-radius: 10px;

      .howManyBox {
        height: 20px;
        display: flex;
        gap: 15px;

        svg {
          height: 16px;

          path {
            fill: ${({ theme }) => theme.COLORS.ICON_COLOR} !important;
          }
        }
      }
    }

    h3 {
      color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
    }

    button {
      width: 20px;
      height: 20px;
      background-color: ${({ theme }) => theme.COLORS.BUTTON_COLOR};
      border: none;
      color: #fff;
      cursor: pointer;


      //olá
      &:hover {
        background-color: ${({ theme }) => theme.COLORS.BUTTON_HOVER_COLOR};
      }
    }
  }
`;

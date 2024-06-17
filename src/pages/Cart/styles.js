import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};

  header {
    margin-bottom: 8px;
  }

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
      display: flex;
      justify-content: space-around;
      gap: 40px;
      align-items: center;
      width: 100%;
      margin: 15px 0;
      padding: 10px;
      background-color: ${({ theme }) => theme.COLORS.INPUT_BG};
      border-radius: 10px;

      h3 {
        flex: 1;
        color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
      }

      .howManyBox {
        display: flex;
        align-items: center;
        gap: 15px;

        svg {
          height: 20px;
          width: 20px;
          cursor: pointer;

          path {
            fill: ${({ theme }) => theme.COLORS.TEXT_COLOR} !important;
          }
        }

        p {
          font-weight: bold;
          color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
        }
      }

      button {
        height: 40px;
        width: clamp(40px, 50%, 100px);
        background-color: ${({ theme }) => theme.COLORS.BUTTON_COLOR};
        border: none;
        border-radius: 8px;
        color: #fff;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
          background-color: ${({ theme }) => theme.COLORS.BUTTON_HOVER_COLOR};
        }

        svg {
          fill: ${({ theme }) => theme.COLORS.TEXT_COLOR} !important;
        }
      }
    }

    .proceedButton {
      width: 100%;
      height: 40px;
      background-color: ${({ theme }) => theme.COLORS.BUTTON_COLOR};
      border: none;
      color: #fff;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 20px;

      &:hover {
        background-color: ${({ theme }) => theme.COLORS.BUTTON_HOVER_COLOR};
      }
    }
  }
`;

export const SearchIcon = styled.div`
  svg {
    fill: ${({ theme }) => theme.COLORS.TEXT_COLOR};
  }
`;

export const ProceedButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.COLORS.BUTTON_COLOR};
  border: none;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  font-size: 1rem;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.BUTTON_HOVER_COLOR};
  }
`;

export const RemoveButton = styled.button`
  height: 40px;
  width: clamp(40px, 50%, 100px);
  background-color: ${({ theme }) => theme.COLORS.BUTTON_COLOR};
  border: none;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.BUTTON_HOVER_COLOR};
  }

  svg {
    fill: ${({ theme }) => theme.COLORS.TEXT_COLOR} !important;
  }
`;

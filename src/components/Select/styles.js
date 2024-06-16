import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.COLORS.TEXT_COLOR};

  p {
    margin-bottom: 8px;
  }

  .inputBox {
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.INPUT_BG};
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.COLORS.PLACEHOLDER_COLOR};
    padding: 0 16px;

    svg {
      margin-right: 8px;
      color: ${({ theme }) => theme.COLORS.ICON_COLOR};
    }

    select {
      width: 100%;
      height: 45px;
      border: none;
      background-color: transparent;
      color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
      padding: 0 8px;

      &::placeholder {
        color: ${({ theme }) => theme.COLORS.PLACEHOLDER_COLOR};
      }
    }
  }
`;

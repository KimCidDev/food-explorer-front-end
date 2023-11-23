import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  color: ${({ theme }) => theme.COLORS.LIGHT_500};

  p {
    margin-bottom: 8px;
  }

  > .inputBox {
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    border-radius: 10px;

    svg {
      margin-left: 16px;
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }

    select {
      width: 100%;
      height: 50px;

      margin: 0 14px;

      border-radius: 8px;
      border: none;

      color: ${({ theme }) => theme.COLORS.LIGHT_500};

      background-color: transparent;

      &::placeholder {
        padding-left: 14px;
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
      }
    }
  }
`;

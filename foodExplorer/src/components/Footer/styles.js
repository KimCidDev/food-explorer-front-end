import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  height: 77px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  position: fixed;
  bottom: 0;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  > div {
    svg {
      height: 18px;
      path {
        fill: ${({ theme }) => theme.COLORS.LIGHT_700};
      }
    }

    h1 {
      font-size: 18px;
      margin: 0;
      color: ${({ theme }) => theme.COLORS.LIGHT_700};
    }
  }

  > span {
    display: flex;
    align-items: center;
    font-size: 10px;

    svg{
      margin-right: 2px;
    }
  }
`;

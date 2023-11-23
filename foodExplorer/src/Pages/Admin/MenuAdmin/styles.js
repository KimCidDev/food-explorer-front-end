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
  }
`;

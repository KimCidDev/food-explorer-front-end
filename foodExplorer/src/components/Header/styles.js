import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 90px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding: 0 30px;

  margin-bottom: 30px;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  > h1 {
    font-size: 21px;
    padding-left: 8px;
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 24px;

  border: none;
  border-radius: 5px;

  padding: 4px 8px;

  margin: 12px;

  background-color: ${({ theme }) => theme.COLORS.DARK_1000};

  > p {
    font-size: 15px;
    color: ${({ theme }) => theme.COLORS.LIGHT_200}
  }
`
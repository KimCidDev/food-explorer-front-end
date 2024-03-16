import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 24px;

  border: none;
  border-radius: 5px;

  padding: 4px 8px;

  margin: 12px;

  background-color: ${({ theme }) => theme.COLORS.COOLEST_PURPLE};

  > p {
    font-size: 15px;
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
    white-space: nowrap;
  }
`;

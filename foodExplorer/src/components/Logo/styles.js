import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  h1 {
    margin-left: 10px;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-family: 'Roboto Slab', sans-serif;
  }
`;

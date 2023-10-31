import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.TINT_TOMATO_100};

  h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-family: 'Roboto Slab', serif;
  }
`;

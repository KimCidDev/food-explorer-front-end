import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  
`;

export const Form = styled.form`
  display: flex;
  margin: 0 30px;
`;

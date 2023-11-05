import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: 45px;

  border: none;
  border-radius: 5px;

  background-color: ${({ theme }) => theme.COLORS.TINT_TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  cursor: pointer;
`;

import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 10px;

  font-family: 'Roboto Slab', sans-serif;
  font-size: 14px;

  width: 100%;
  height: 45px;

  border: none;
  border-radius: 5px;

  text-decoration: none;

  background-color: ${({ theme }) => theme.COLORS.TINT_TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  cursor: pointer;
`;

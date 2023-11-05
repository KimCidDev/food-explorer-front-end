import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 45px;

  display: flex;
  justify-content: center;
  align-items: center;

  > span {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-weight: bold;
    font-size: 14px;

    cursor: pointer;
  }
`;

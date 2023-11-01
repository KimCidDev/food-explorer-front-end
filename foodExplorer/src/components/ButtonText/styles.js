import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 45px;

  display: flex;
  justify-content: center;

  padding-top: 32px;
  padding-bottom: 32px;

  > span {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-weight: bold;

    cursor: pointer;
  }
`;

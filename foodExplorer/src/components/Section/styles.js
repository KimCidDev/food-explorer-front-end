import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    padding-left: 24px;

    color: ${({ theme }) => theme.COLORS.LIGTH_300};
    font-family: 'Poppins';
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
  }

  .childrenBox {
    display: flex;

    padding-left: 24px;
  }
`;

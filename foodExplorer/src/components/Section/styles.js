import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 24px 24px 0 24px;

  h1 {
    //padding-left: 24px;

    color: ${({ theme }) => theme.COLORS.LIGTH_300};
    font-family: 'Poppins';
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
  }

  .childrenBox {
    display: flex;
    gap: 16px;

    margin-top: 14px;
  }
`;

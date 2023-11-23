import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 24px 24px 0 24px;

  h1 {
    color: ${({ theme }) => theme.COLORS.LIGTH_300};
    font-family: 'Poppins';
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
  }

  .childrenBox {
    display: flex;
    gap: 24px;

    margin-top: 14px;
  }
`;

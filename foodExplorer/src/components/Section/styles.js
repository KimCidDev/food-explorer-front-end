import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 24px 24px 0 24px;

  cursor: auto;

  .goBackLink {
    text-decoration: none;

    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
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

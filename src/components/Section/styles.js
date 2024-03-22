import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  cursor: auto;

  .goBackLink {
    display: flex;
    align-items: center;
    gap: 10px;

    h2 {
      text-decoration: none;
      border: none;

      display: flex;
      align-items: center;
      color: ${({ theme }) => theme.COLORS.COOLEST_PURPLE};
      font-family: 'Poppins';
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
    }
  }

  .childrenBox {
    margin: 15px 0;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    margin: 25px 120px;

    .childrenBox {
      margin: 30px 40px;
    }
  }
`;

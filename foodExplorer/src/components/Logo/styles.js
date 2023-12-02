import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 7px;

  .adminBox {
    display: flex;
    flex-direction: column;
    justify-content: end;
  }

  .adminBox p {
    text-align: right;
    font-size: 0.7rem;
    color: ${({ theme }) => theme.COLORS.TINT_CAKE_200};
  }

  h1 {
    // margin-left: 10px;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-family: 'Roboto Slab', sans-serif;
    letter-spacing: -1px;
  }
`;

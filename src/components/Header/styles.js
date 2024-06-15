import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  background-color: ${({ theme }) =>
    theme.COLORS.PRIMARY}; /* Updated to primary color */
  color: ${({ theme }) => theme.COLORS.FORM_BG}; /* Ensure text is readable */

  #menuLink {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.FORM_BG}; /* Ensure icon is readable */

    svg {
      margin-right: 8px;
    }
  }

  > h1 {
    font-size: 21px;
    padding-left: 8px;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding: 0 100px;
  }
`;

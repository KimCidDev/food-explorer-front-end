import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  height: 77px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  margin-top: 100px;

  position: fixed;
  bottom: 0;
  z-index: 10;

  background-color: ${({ theme }) =>
    theme.COLORS.PRIMARY}; /* Updated to primary color for better contrast */
  color: ${({ theme }) => theme.COLORS.FORM_BG}; /* Ensure text is readable */

  > div {
    display: flex;
    align-items: center;

    svg {
      height: 18px;
      path {
        fill: ${({ theme }) =>
          theme.COLORS.FORM_BG}; /* Ensure logo color is readable */
      }
    }

    h1 {
      font-size: 18px;
      margin: 0;
      color: ${({ theme }) =>
        theme.COLORS.FORM_BG}; /* Ensure text is readable */
    }
  }

  > span {
    display: flex;
    align-items: center;
    font-size: 10px;
    color: ${({ theme }) => theme.COLORS.FORM_BG}; /* Ensure text is readable */

    svg {
      margin-right: 2px;
      fill: ${({ theme }) =>
        theme.COLORS.FORM_BG}; /* Ensure icon color is readable */
    }
  }
`;

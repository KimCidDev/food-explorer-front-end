import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  color: ${({ theme }) => theme.COLORS.TEXT_COLOR}; /* Dark Grey Text Color */

  p {
    margin-bottom: 8px;
  }

  .inputBox {
    display: flex;
    align-items: center;
    padding: 0 14px; /* Consistent padding */

    background-color: ${({ theme }) =>
      theme.COLORS.INPUT_BG}; /* Light Grey Background Color */
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR}; /* Dark Grey Text Color */

    border-radius: 8px; /* Smooth the corners */
    border: 1px solid ${({ theme }) => theme.COLORS.PLACEHOLDER_COLOR}; /* Light Grey Border Color */

    svg {
      margin-right: 10px; /* Adjust margin for icon spacing */
      color: ${({ theme }) => theme.COLORS.ICON_COLOR}; /* Dark Grey Color */
    }

    input {
      color: ${({ theme }) =>
        theme.COLORS.TEXT_COLOR}; /* Dark Grey Text Color */
      width: 100%;
      height: 35px;
      padding: 0 14px; /* Consistent padding */

      border-radius: 8px;
      border: none;

      background-color: transparent;

      &::placeholder {
        color: ${({ theme }) =>
          theme.COLORS.PLACEHOLDER_COLOR}; /* Light Grey Placeholder Color */
      }
    }
  }

  input[type='checkbox'] {
    width: auto;
    margin: 0;
  }
`;

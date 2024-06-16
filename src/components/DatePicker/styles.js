import styled from 'styled-components';

export const Container = styled.div`
  .react-datepicker-wrapper {
    width: 100%;
  }

  .react-datepicker__input-container {
    width: 100%;
    input {
      width: 100%;
      padding: 10px;
      border-radius: 4px;
      border: 1px solid ${({ theme }) => theme.COLORS.PLACEHOLDER_COLOR};
      background-color: ${({ theme }) => theme.COLORS.INPUT_BG};
      color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
      font-size: 16px;
      &:focus {
        border-color: ${({ theme }) => theme.COLORS.BUTTON_COLOR};
      }
    }
  }
`;

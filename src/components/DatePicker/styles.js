import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  .react-datepicker {
    border: 1px solid ${({ theme }) => theme.COLORS.PLACEHOLDER_COLOR};
    border-radius: 8px;
    background-color: ${({ theme }) => theme.COLORS.FORM_BG};
  }

  .react-datepicker__header {
    background-color: ${({ theme }) => theme.COLORS.PRIMARY};
    border-bottom: none;
  }

  .react-datepicker__day--selected {
    background-color: ${({ theme }) => theme.COLORS.BUTTON_COLOR};
    color: #fff;
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  align-items: center;
  padding: 20px;
`;

export const Section = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 20px 0;
  padding: 20px;
  background-color: ${({ theme }) => theme.COLORS.FORM_BG};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-bottom: 20px;
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
  }
`;

export const DatePickerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const PaymentButton = styled.button`
  width: 100%;
  max-width: 200px;
  height: 50px;
  background-color: ${({ theme }) => theme.COLORS.BUTTON_COLOR};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.BUTTON_HOVER_COLOR};
  }
`;

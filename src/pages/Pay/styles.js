import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding-bottom: 90px;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    width: 100%;
    padding: 10px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.HEADER_BG};
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
    h2 {
      margin: 0;
    }
    svg {
      cursor: pointer;
    }
  }

  .contentWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    padding: 20px;
    gap: 20px;
  }

  .textWrapper {
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    .datePickerWrapper,
    .paymentWrapper {
      width: 100%;
      padding: 20px;
      background-color: ${({ theme }) => theme.COLORS.FORM_BG};
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      text-align: center;

      h3,
      h2 {
        margin-bottom: 20px;
        color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
      }
    }

    button {
      width: 100%;
      height: 40px;
      background-color: ${({ theme }) => theme.COLORS.BUTTON_COLOR};
      border: none;
      color: #fff;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;

      &:hover {
        background-color: ${({ theme }) => theme.COLORS.BUTTON_HOVER_COLOR};
      }
    }
  }

  .imageWrapper {
    width: 100%;
    max-width: 600px;
    img {
      width: 100%;
      border-radius: 10px;
      opacity: 0.7;
    }
  }
`;

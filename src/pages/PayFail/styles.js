import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};

  .content {
    text-align: center;
    margin: 2rem;
    padding: 2rem;
    background-color: ${({ theme }) => theme.COLORS.CARD_BACKGROUND};
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    h1 {
      color: ${({ theme }) => theme.COLORS.PRIMARY};
      margin-bottom: 1rem;
    }

    p {
      color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
      margin-bottom: 2rem;
    }
  }
`;

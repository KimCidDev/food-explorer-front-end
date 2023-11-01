import styled from 'styled-components';

export const Container = styled.div`
  > p {
    margin-bottom: 8px;

    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    align-self: flex-start;
  }

  > input {
    width: 100%;
    height: 48px;
    margin-bottom: 32px;
    
    border-radius: 8px;
    border: none;

    &::placeholder {
      padding-left: 14px;
    }
  }
`;

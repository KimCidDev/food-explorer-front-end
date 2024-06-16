import styled from 'styled-components';

export const Container = styled.div`
  display: inline-block;
  margin-right: 4px;
  background-color: ${({ theme }) => theme.COLORS.TAG_BG};
  color: ${({ theme }) => theme.COLORS.TAG_TEXT};
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 14px;

  p {
    margin: 0;
  }
`;

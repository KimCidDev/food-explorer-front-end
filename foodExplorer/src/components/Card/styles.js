import styled from 'styled-components';

export const Container = styled.div`
  min-width: 120px;
  max-width: 210px;
  height: 290px;

  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 25px;
  gap: 12px;

  background-color: ${({ theme }) => theme.COLORS.DARK_200};

  #save {
    position: absolute;
    top: 0;
    right: 0;

    margin: 15px;

    font-size: 22px;
  }

  h2 {
    width: 100%;
    text-align: center;
  }

  .sendAmount .howManyBox p {
    color: ${({ theme }) => theme.COLORS.TINT_CAKE_200};
    font-size: 16px;
  }

  .howManyBox {
    display: flex;
    align-items: center;

    padding: 5px 0;

    gap: 14px;
    font-size: 22px;
  }

  img {
    height: 88px;
  }

  button {
    height: 30px;
  }
`;

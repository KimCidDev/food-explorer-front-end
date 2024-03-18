import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  width: clamp(200px, 80%, 600px);
  height: 290px;

  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: solid 2px ${({ theme }) => theme.COLORS.GRADIENT_1};
  border-radius: 30px;

  padding: 25px;
  gap: 0px;

  background-color: ${({ theme }) => theme.COLORS.DARK_200};

  cursor: pointer;

  #save {
    position: absolute;
    top: 0;
    right: 0;

    margin: 15px;

    font-size: 22px;
  }

  h2 {
    font-weight: bold;
    width: 100%;
    text-align: center;
  }

  p {
    display: none;
    font-family: 'Roboto', sans-serif;
    font-size: 13px;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  #price {
    margin-top: 32px;
    display: flex;
    font-size: 18px;
    color: ${({ theme }) => theme.COLORS.TINT_CAKE_200};
    -webkit-font-smoothing: antialiased;
  }

  .sendAmount .howManyBox p {
    color: ${({ theme }) => theme.COLORS.TINT_CAKE_200};
    font-size: 16px;
  }

  .howManyBox {
    display: flex;
    align-items: center;

    padding: 5px 0;

    gap: 10px;
    font-size: 22px;

    p {
      font-size: 18px;
    }
  }

  img {
    height: 88px;
  }

  button {
    height: 30px;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    height: 500px;
    width: 400px;

    gap: 10px;

    img {
      height: 176px;
    }

    h2 {
      font-size: 24px;
      font-weight: bold;
    }

    p {
      display: flex;
    }

    #price {
      font-size: 28px;
    }

    .addToBasket {
      width: 200px;

      display: flex;
      justify-content: space-around;
      align-items: center;

      gap: 30px;

      .howManyBox {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 25px;
      }
      button {
        height: 32px;
        width: 100%;
        padding: 0 20px;
        font-weight: bold;
        width: clamp(100px, 70%, 400px);
      }
    }
  }
`;

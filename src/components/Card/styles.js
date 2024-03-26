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
  gap: clamp(1px, 4vw, 10px);

  border: solid 2px ${({ theme }) => theme.COLORS.GRADIENT_1};
  border-radius: 30px;

  padding: 25px;

  background-color: ${({ theme }) => theme.COLORS.DARK_200};

  cursor: pointer;

  .mainInfo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #save {
    position: absolute;
    top: 0;
    right: 0;

    margin: 15px;

    font-size: 22px;
  }

  h2 {
    margin-top: 5px;
    font-weight: bold;
    text-align: center;
    font-size: clamp(2.4vh, 18px, 2.5vw);
  }

  p {
    display: none;
  }

  #price {
    display: flex;
    font-size: clamp(2vh, 14px, 2.5vw);
    color: ${({ theme }) => theme.COLORS.TINT_CAKE_200};
    -webkit-font-smoothing: antialiased;
  }

  .addToBasket {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: clamp(10px, 3vw, 20px);

    margin-top: 10px;

    button {
      padding: 0 10px;
    }
  }

  .howManyBox {
    display: flex;
    align-items: center;

    gap: clamp(5px, 3vw, 14px);

    svg {
      font-size: clamp(30px, 4vw, 40px);
    }

    p {
      display: flex;
      font-size: clamp(10px, 2vw, 22px);
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

      font-family: 'Roboto', sans-serif;
      font-size: 13px;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    #price {
      font-size: 28px;
    }

    .addToBasket {
      width: 200px;

      display: flex;
      justify-content: space-around;
      align-items: center;

      .howManyBox {
        display: flex;
        align-items: center;
        justify-content: center;

        button {
          height: 32px;
          width: 100%;
          padding: 0 20px;
          font-weight: bold;
          width: clamp(100px, 70%, 400px);
        }
      }
    }
  }
`;

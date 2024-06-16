import styled, { keyframes } from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 90px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;

    .logo h1 {
      font-size: 21px;
    }

    .logo svg {
      height: 21px;
    }

    .searchAndCart {
      display: none;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
      padding: 0 100px;
      justify-content: space-between;

      #menuLink {
        display: none;

        svg:first-child {
          display: none;
        }
      }

      .searchAndCart {
        display: flex;
        align-items: center;
        justify-content: center;
        width: clamp(150px, 80%, 700px);
        gap: clamp(5px, 80%, 20px);

        h2 {
          min-width: 100px;
          font-size: clamp(10px, 1vw, 16px);
          color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
          white-space: nowrap;
        }

        #searchInput {
          height: 45px;
          width: clamp(110px, 60%, 170px);
          padding: 0 16px;
          color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
          background-color: ${({ theme }) => theme.COLORS.INPUT_BG};
          border: 1px solid ${({ theme }) => theme.COLORS.PLACEHOLDER_COLOR};
          border-radius: 8px;
        }

        input {
          &::placeholder {
            font-size: clamp(6px, 10px, 1rem);
            color: ${({ theme }) => theme.COLORS.PLACEHOLDER_COLOR};
          }
        }

        button {
          width: clamp(100px, 90%, 150px);
          height: clamp(40px, 40px, 55px);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 0 5px;
          font-size: clamp(10px, 11px, 12px);
          font-weight: bold;
          white-space: nowrap;
          background-color: ${({ theme }) => theme.COLORS.BUTTON_COLOR};
          color: ${({ theme }) => theme.COLORS.FORM_BG};
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s ease;

          &:hover {
            background-color: ${({ theme }) => theme.COLORS.BUTTON_HOVER_COLOR};
          }
        }
      }
    }
  }

  main {
    padding: 0 25px;

    .banner {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${({ theme }) => theme.COLORS.BACKGROUND};
      margin: 25px;
      padding: 30px;
      border-radius: 8px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      overflow: hidden;

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.5;
      }

      .textContent {
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: column;
        gap: 8px;
        text-align: center;

        h2 {
          font-weight: bold;
          white-space: nowrap;
          font-size: clamp(0.8vw, 18px, 2.5vw);
          color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
        }

        p {
          text-align: center;
          color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
          font-size: clamp(0.8vw, 12px, 2vw);
          opacity: 0;
          animation: ${fadeIn} 4s ease forwards;
        }
      }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      .banner {
        align-items: center;
        margin-bottom: 50px;
      }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
      padding: 0;

      .banner {
        max-height: 300px;
        justify-content: center;
        margin: 30px 120px 62px 120px;
        gap: clamp(2vw, 5vw, 10vw);
        overflow: hidden;

        .textContent {
          width: auto;

          h2 {
            font-size: clamp(2vw, 14px, 4vw);
          }

          p {
            margin-top: 5px;
            font-size: clamp(1vw, 10px, 2vw);
          }
        }
      }
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
      .banner {
        min-height: 50px;
        padding: 5px 12px;
        overflow: hidden;

        .textContent p {
          display: none;
        }
      }
    }
  }
`;

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

const wobbleOnce = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.8);
    animation-timing-function: ease-in;
  }
  75% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const wobbleAndHide = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.8);
    animation-timing-function: ease-in;
  }
  75% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
    opacity: 0;
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
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      text-align: left;
      padding: 20px;
      margin-top: 20px;
      background-color: ${({ theme }) => theme.COLORS.BANNER_BG};
      border: 3px solid orange; /* Temporary style for debugging */

      .textContent {
        margin-left: 20px;
      }

      img {
        max-width: 20%; /* Ensures image doesn't exceed 80% of the container's width */
        height: auto; /* Maintains aspect ratio */
        animation: ${wobbleOnce} 1.5s ease-in-out;
        animation-fill-mode: forwards; /* Ensures the animation stops after one run */
        animation-iteration-count: 1; /* Ensures the animation runs only once */
      }

      @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 5px 12px;

        .textContent {
          margin-left: 0;
          margin-top: 10px;
          width: 100%;
        }

        img {
          width: clamp(150px, 80%, 400px); /* Adjust the width using clamp */
          height: auto;
          animation: ${wobbleAndHide} 1.5s ease-in-out;
        }
      }
    }
  }
`;

export default Container;

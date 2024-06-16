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

const wobbleAnimation = keyframes`
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
      align-items: center;
      justify-content: space-around;
      background: ${({ theme }) => theme.COLORS.BACKGROUND};
      margin: 25px;
      padding: 0 45px;
      border: 3px solid ${({ theme }) => theme.COLORS.BUTTON_COLOR};
      border-radius: 33px;
      overflow: visible; /* Allow the image to overflow */
      height: 75vh; /* Make the banner take up 75% of the viewport height */
      position: relative;

      img {
        max-width: 50%;
        height: 35rem;
        object-fit: cover;
        margin: -50px 0; /* Make the image overflow the top and bottom */
        animation: ${wobbleAnimation} 1.5s ease-in-out;
      }

      .textContent {
        display: flex;
        flex-direction: column;
        gap: 8px;
        text-align: left;
        width: 45%;

        h2 {
          font-weight: bold;
          font-size: clamp(1.5rem, 3vw, 3rem);
          color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
        }

        p {
          font-size: clamp(1rem, 1.5vw, 1.5rem);
          color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
          animation: ${fadeIn} 4s ease forwards;
        }
      }
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
      .banner {
        background-color: red; /* Temporary style for debugging */
        border: 5px solid;
        flex-direction: column; /* Change to column for small screens */
        align-items: center;
        text-align: center;
        padding: 5px 12px;

        .textContent {
          width: 90%; /* Adjust width to avoid text overflow */
          p {
            display: none;
          }
        }

        img {
          max-width: 90%; /* Ensure image fits within the container */
          height: auto;
          margin: 0; /* Remove margin for better alignment */
          animation: ${wobbleAndHide} 1.5s ease-in-out; /* Apply the new animation */
        }
      }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      .banner {
        margin-bottom: 50px;
      }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
      padding: 0;

      .banner {
        margin: 30px 120px 62px 120px;

        .textContent {
          width: 45%;

          h2 {
            font-size: clamp(2vw, 2rem, 4vw);
          }

          p {
            margin-top: 5px;
            font-size: clamp(1vw, 1rem, 2vw);
          }
        }

        img {
          max-width: 50%;
        }
      }
    }
  }
`;

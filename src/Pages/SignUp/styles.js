import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  padding-top: 90px;

  background-color: ${({ theme }) =>
    theme.COLORS.LIGHT_100}; /* Updated to a lighter background color */

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 45px;
    user-select: none;

    svg {
      transform: scale(2.52);
      user-select: none;
    }

    h1 {
      color: ${({ theme }) =>
        theme.COLORS.DARK_700}; /* Darker text color for contrast */
      font-size: 52px;
      font-family: 'Roboto Slab', sans-serif;
      letter-spacing: -1px;
      user-select: none;
    }
  }

  > div {
    margin-bottom: 75px;
  }

  > div:nth-child(2) {
    gap: 1rem;
  }

  > div:nth-child(2) h1 {
    display: none;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 0;
    margin: 0 auto;

    > div:nth-child(2) {
      justify-content: center;
      gap: 1.6rem;

      max-height: 80vh;
      max-width: 350px;

      margin: 0;
      border-radius: 8px;

      background-color: ${({ theme }) =>
        theme.COLORS.LIGHT_200}; /* Lighter background color for form */
    }

    > div:nth-child(2) h1 {
      display: flex;

      font-size: 1.5rem;
      color: ${({ theme }) => theme.COLORS.DARK_700}; /* Darker text color */
    }
  }
`;

export const Form = styled.div`
  height: auto;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  padding: 40px 60px; /* Adjust padding for better spacing */

  background-color: ${({ theme }) =>
    theme.COLORS.LIGHT_200}; /* Set background color for the form */
  border-radius: 8px; /* Add border radius for rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add subtle shadow for depth */

  /* Set input width to 100% for responsiveness */
  input[type='text'],
  input[type='password'],
  input[type='checkbox'] {
    width: 100%;
  }

  .adminCheckbox {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 8px;

    div:first-child {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding-left: 0;

      .inputBox input[type='checkbox'] {
        height: 18px;
        width: 20px;
      }
    }
    .codeInput {
      margin-top: 0;
      width: 100%;
    }
  }

  button {
    min-height: 25px;
    background-color: ${({ theme }) =>
      theme.COLORS.GRADIENT_1}; /* Updated button color */
    color: ${({ theme }) => theme.COLORS.LIGHT_100}; /* Button text color */
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${({ theme }) =>
        theme.COLORS.GRADIENT_2}; /* Hover effect */
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding: 40px 35px; /* Adjust padding for large screens */

    h1 {
      margin-top: 20px;
      color: ${({ theme }) => theme.COLORS.DARK_700}; /* Darker text color */
    }

    span {
      margin-bottom: 20px;
    }
  }
`;

export const HiddenCode = styled.div`
  width: 40px;
  height: 40px;

  position: fixed;
  left: 80px;
  top: 620px;

  background-color: ${({ theme }) =>
    theme.COLORS.LIGHT_200}; /* Updated to lighter color */

  opacity: 0;
  z-index: 100;

  &:hover {
    transition: opacity 0.5s ease;
    opacity: 1;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    left: 100px;
    top: 10px;
    transition: opacity 1.5s ease;
    opacity: ${({ isHiddenCodeVisible }) => (isHiddenCodeVisible ? 1 : 0)};
    pointer-events: ${({ isHiddenCodeVisible }) =>
      isHiddenCodeVisible ? 'auto' : 'none'};
  }
`;

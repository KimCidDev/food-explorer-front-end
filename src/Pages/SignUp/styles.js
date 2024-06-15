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
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Center the content vertically */
  padding: 40px 20px; /* Add padding for better spacing on mobile screens */
  background-color: ${({ theme }) =>
    theme.COLORS.BACKGROUND}; /* Light Cream Background Color */

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px; /* Reduced gap for better alignment */
    user-select: none;
    margin-bottom: 30px; /* Add margin to separate logo and form */

    svg {
      transform: scale(1.5); /* Adjusted scale for better fit */
      user-select: none;
      fill: ${({ theme }) => theme.COLORS.LOGO_COLOR}; /* Purple Color */
    }

    h1 {
      color: ${({ theme }) => theme.COLORS.LOGO_COLOR}; /* Purple Color */
      font-size: 40px; /* Adjusted font size for better fit */
      font-family: 'Roboto Slab', sans-serif;
      letter-spacing: -1px;
      user-select: none;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    flex-direction: row;
    justify-content: space-around;
    padding: 0;
    margin: 0 auto;

    .logo {
      margin-bottom: 0; /* Remove margin on larger screens */
    }

    .form-container {
      max-width: 350px;
      border-radius: 8px;
      background-color: ${({ theme }) =>
        theme.COLORS.INPUT_BG}; /* Softer background color for form */
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add subtle shadow for depth */
      padding: 40px; /* Add padding for better spacing */
    }
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px; /* Ensure consistent gap */

  padding: 40px 20px; /* Adjust padding for better spacing */

  background-color: ${({ theme }) =>
    theme.COLORS.INPUT_BG}; /* Softer background color for the form */
  border-radius: 8px; /* Add border radius for rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add subtle shadow for depth */

  h1 {
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR}; /* Dark Grey Text Color */
    margin-bottom: 20px; /* Add margin bottom to separate from inputs */
  }

  .inputBox {
    width: 100%; /* Ensure input boxes take full width */
  }

  /* Set input width to 100% for responsiveness */
  input[type='text'],
  input[type='password'] {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid ${({ theme }) => theme.COLORS.PLACEHOLDER_COLOR}; /* Light Grey Border Color */
    border-radius: 4px;
    background-color: ${({ theme }) =>
      theme.COLORS.INPUT_BG}; /* Light Grey Background Color for Inputs */
    color: ${({ theme }) =>
      theme.COLORS.TEXT_COLOR}; /* Dark Grey Text Color for Inputs */

    &::placeholder {
      color: ${({ theme }) =>
        theme.COLORS.PLACEHOLDER_COLOR}; /* Placeholder text color */
    }
  }

  .adminCheckbox {
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;

    label {
      display: flex;
      align-items: center;
      cursor: pointer;

      input[type='checkbox'] {
        margin-right: 10px;
      }

      span {
        color: ${({ theme }) => theme.COLORS.TEXT_COLOR}; /* Label text color */
      }
    }
  }

  .codeInput {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid ${({ theme }) => theme.COLORS.PLACEHOLDER_COLOR}; /* Light Grey Border Color */
    border-radius: 4px;
    background-color: ${({ theme }) =>
      theme.COLORS.INPUT_BG}; /* Light Grey Background Color for Inputs */
    color: ${({ theme }) =>
      theme.COLORS.TEXT_COLOR}; /* Dark Grey Text Color for Inputs */

    &::placeholder {
      color: ${({ theme }) =>
        theme.COLORS.PLACEHOLDER_COLOR}; /* Placeholder text color */
    }
  }

  button {
    min-height: 40px; /* Adjust button height */
    background-color: ${({ theme }) =>
      theme.COLORS.BUTTON_COLOR}; /* Orange Button Color */
    color: ${({ theme }) => theme.COLORS.FORM_BG}; /* White Button Text Color */
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${({ theme }) =>
        theme.COLORS.BUTTON_HOVER_COLOR}; /* Light Orange Hover Effect */
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding: 40px 35px; /* Adjust padding for large screens */

    h1 {
      margin-top: 20px;
      color: ${({ theme }) =>
        theme.COLORS.TEXT_COLOR}; /* Dark Grey Text Color */
    }
  }
`;

export const HiddenCode = styled.div`
  position: absolute;
  top: 640px;
  width: 350px;
  height: 120px;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.SECONDARY}; /* Secondary color */
  opacity: ${({ isHiddenCodeVisible }) => (isHiddenCodeVisible ? 0.0 : 0)};
  transition: opacity 0.2s ease-in-out, transform 0.5s ease-in-out;

  &:hover {
    opacity: 1;
    transform: scale(2); /* Increase size on hover */
  }

  p {
    margin: 0;
    font-size: 2rem;
    transition: font-size 0.5s ease-in-out; /* Smooth font-size transition */
  }

  &:hover p {
    font-size: 8rem; /* Increase font size on hover */
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  user-select: none;

  svg {
    transform: scale(1.5);
    user-select: none;
    fill: ${({ theme }) => theme.COLORS.LOGO_COLOR}; /* Purple Color */
  }

  h1 {
    color: ${({ theme }) => theme.COLORS.LOGO_COLOR}; /* Purple Color */
    font-size: 40px; /* Adjusted font size for better fit */
    font-family: 'Roboto Slab', sans-serif;
    letter-spacing: -1px;
    user-select: none;
  }
`;

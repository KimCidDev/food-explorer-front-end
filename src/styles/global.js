import { createGlobalStyle } from 'styled-components';
import { DEVICE_BREAKPOINTS } from './deviceBreakpoints';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    p {
      //font-size: 16px;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      /* Light and warm background color for mobile */
      body {
        background-color: ${({ theme }) => theme.COLORS.INPUT_BG};
      }
    }
    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      /* Peach puff color for medium devices */
      body {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
      }
    }
    @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
      /* Papaya whip color for large devices */
      body {
        background-color: ${({ theme }) => theme.COLORS.FORM_BG};
      }
    }
  }

  body {
    width: 100%;
    font-family: 'Roboto Slab', sans-serif;
    color: ${({ theme }) =>
      theme.COLORS.TEXT_COLOR}; /* Dark text color for readability */
  }

  p, span {
    font-size: 14px;
  }

  h1, h2, h3 {
    font-size: 24px; /* Increased font size for headings */
    font-family: "Poppins", sans-serif;
    font-weight: 600; /* Increased font weight for better visibility */
  }

  /* General text color */
  h2, p {
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR}; /* Dark text color */
  }

  /* Specific rules for text on dark backgrounds */
  header, footer, .navbar {
    background-color: ${({ theme }) => theme.COLORS.PRIMARY};
    color: #FFFFFF; /* Light text color for dark background */
  }

  header h1, header h2, header h3, header p,
  footer h1, footer h2, footer h3, footer p,
  .navbar h1, .navbar h2, .navbar h3, .navbar p {
    color: #FFFFFF; /* Ensure all text within header, footer, and navbar is white */
  }

  .navbar a, header a, footer a {
    color: #FFFFFF; /* Ensure links are also white */
  }

  /* Buttons */
  button {
    background-color: ${({ theme }) => theme.COLORS.BUTTON_COLOR};
    color: #FFFFFF;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
  }

  button:hover {
    background-color: ${({ theme }) => theme.COLORS.BUTTON_HOVER_COLOR};
  }

  /* Input and Textarea */
  input, textarea {
    background-color: ${({ theme }) => theme.COLORS.INPUT_BG};
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
    border: 1px solid ${({ theme }) => theme.COLORS.PLACEHOLDER_COLOR};
    padding: 10px;
    margin: 10px 0;
    width: 100%;
    box-sizing: border-box;
  }

  input::placeholder, textarea::placeholder {
    color: ${({ theme }) => theme.COLORS.PLACEHOLDER_COLOR};
  }

  /* Form Container */
  .form-container {
    background-color: ${({ theme }) => theme.COLORS.FORM_BG};
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .icon {
    color: ${({ theme }) => theme.COLORS.ICON_COLOR};
  }
`;

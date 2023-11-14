import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  > div:first-child {
    max-width: 500px;

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
  }

  .section {
    padding-top: 0;
  }

  > .section h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
    display: flex;
    align-items: center;
    
    svg {
      font-size: 12px;
    }

  }

  > .section .childrenBox div {

    max-width: 100%;
    max-height: 100vh;
    width: 100%;
    height: 100vh;

  }

  > .section .childrenBox div img {
    height: 265px;
  }

  > .section .childrenBox div h2 {
    font-size: 40px;
  }
`;



      // add buttonText component, add tag component, add tag property to Card component
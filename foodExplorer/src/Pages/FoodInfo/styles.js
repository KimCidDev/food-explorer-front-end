import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  > div:first-child {
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

  > .section .childrenBox {
    display: flex;
    justify-content: center;

    height: 100vh;

    overflow-y: auto;
  }


  > .section .childrenBox div {
    padding-top: 0;

    background-color: ${({ theme}) => theme.COLORS.DARK_400}
  }

  > .section .childrenBox div img {
    height: 165px;
  }

  > .section .childrenBox div #save {
    display: none;
    height: 0;
    width: 0;
  }

  > .section .childrenBox div h2 {
    font-size: 27px;
    white-space: nowrap;
  }
`;



      // add buttonText component, add tag component, add tag property to Card component
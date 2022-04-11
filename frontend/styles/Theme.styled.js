// import { createGlobalStyle } from 'styled-components';
import * as styled from 'styled-components';

export const lightTheme = {
  body: '#fff',
  fontColor: '#333',
};

export const darkTheme = {
  body: '#333',
  fontColor: '#fff',
};

export const GlobalStyles = styled.createGlobalStyle`
  :root {
    --color-primary: #333;

    --navbar-height: 3.2rem;
    --footer-height: 30vh;

    --max-width: 1200px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    letter-spacing: 0.5px;
  }

  body {
    font-family: 'Poppins', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul,
  li {
    list-style: none;
  }

  button {
    border: none;
    background: transparent;
  }

  /* CLASSNAME */
  .btn {
    cursor: pointer;
    background: #fff;
    text-transform: capitalize;
    padding: 0.5rem 1rem;
    border-radius: 0.3rem;
    font-size: 1rem;
    font-weight: 700;
  }

  .btn-outline {
    cursor: pointer;
    background: transparent;
    border: 2px solid #fff;
    color: #fff;
    padding: calc(0.5rem - 2px) calc(1rem - 2px);
  }
`;

import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62%;
    }

    html, body, #root {
        min-height: 100%;
    }

    body {
        margin: 0;
        font-family: Roboto, Arial, Helvetica, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: #222;
        color: #eee;
        font-size: 2rem;
    }

    header {
        display: flex;
        align-items: center;
        position: fixed;
        top: 0;
        padding: 0 10vw;
        width: 100%;
        height: 8vh;
        background: #222;
        box-shadow: 4px 4px 4px 2px rgba(0, 0, 0, 0.2);
    }

    a, button {
        text-decoration: none;
        color: #666;
        cursor: pointer;
    }

`;
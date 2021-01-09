import { createGlobalStyle } from 'styled-components';
import { style } from '../config/style';

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
        font-family: ${style.font};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: ${style.colors.dark};
        color: ${style.colors.light};
        font-size: 2rem;
        max-width: 100%;
        overflow-x: hidden;
    }

    header {
        display: flex;
        align-items: center;
        position: fixed;
        top: 0;
        padding: 0 10vw;
        width: 100vw;
        height: 8vh;
        background: ${style.colors.dark};
        box-shadow: 4px 4px 4px 2px rgba(0, 0, 0, 0.2);

    }

    a, button {
        text-decoration: none;
        color: ${style.colors.primary};
        cursor: pointer;
    }

    @media(max-width: 30em) {
        body {
            font-size: 1.6rem;
        }

        header {
            display: none;
        }
        
    }

`;
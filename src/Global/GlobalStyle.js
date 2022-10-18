import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    *::before,
    *::after {
        box-sizing: border-box;
    }

    :root{
        --ff-one: 'Roboto', sans-serif;
        /*  */
        --fw-700: 700;
        --fw-400: 400;
        /*  */
        --clr-light: #FFFFFF;
        --clr-dark: #FFFFF;
        /*  */
        --bg-light: #ffffff;
        --bg-accent: #f9f9f9;
        --bg-dark: #000000;
        /*  */
    }

    body {
        min-height: 100vh;
        text-rendering: optimizeSpeed;
        counter-reset: x;
        line-height: 1;
    }

    ul[role='list'],
    ol[role='list'] {
        list-style: none;
    }

    html:focus-within {
        scroll-behavior: smooth;
    }

    a:not([class]) {
        text-decoration-skip-ink: auto;
    }

    img,
    picture {
        max-width: 100%;
        display: block;
    }

    input,
    button,
    textarea,
    select {
        font: inherit;
    }

    @media screen and (prefers-reduced-motion: reduce){
        html:focus-within {
            scroll-behavior: auto;
        }
        
        *,
        *::before,
        *::after {
            animation-duration: 0.01ms;
            animation-iteration-count: 1;
            transition-duration: 0.01ms;
            scroll-behavior: auto;
        }
    }
`;
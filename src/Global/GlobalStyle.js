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
        --clr-light: ${(props) => props.theme.clrLight};
        --clr-dark: ${(props) => props.theme.clrDark};
        /*  */
        --bg-light: ${(props) => props.theme.bgLight};
        --bg-accent: ${(props) => props.theme.accent};
        --bg-dark: ${(props) => props.theme.bgDark};
        --bg-navy: ${(props) => props.theme.bgNavy};
        /*  */
        --opSun: ${(props) => props.theme.opSun};
        --opMoon: ${(props) => props.theme.opMoon};
        /*  */
        --overlay: ${(props) => props.theme.overlay};
        --img: ${(props) => props.theme.imgClr};
    }

    * > * {
        transition: background-color 0.3s linear;
    }

    * + * {
        transition: color 0.3s linear;
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
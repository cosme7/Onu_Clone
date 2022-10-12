import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
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

    body{
        counter-reset: x;
    }
`;
import styled from "styled-components";

export const Container = styled.section`
    max-width: 1920px;
    min-height: 82.2vh;
    margin: 0 auto;
    padding: 1rem 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: clamp(1rem, 2vw, 2.2rem);
    background-color: var(--bg-light);

    h1{
        max-width: 40ch;
        font-size: clamp(2rem, 3vw, 3.5rem);
        font-family: var(--ff-one);
        font-weight: var(--fw-700);
        letter-spacing: 2px;
        color: var(--clr-dark);
        text-align: center;
    }

    div{
        max-width: 90%;
        margin: 0 auto;
        padding: 1rem;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: clamp(1rem, 2vw, 2.5rem);
    }

    @media screen and (max-width:48em){

        div{
            width: 100%;
        }
    }
`;

export const HomeTxt = styled.p`
    max-width: 80ch;
    font-size: clamp(1rem, 1.5vw, 1.5rem);
    font-family: var(--ff-one);
    font-weight: var(--fw-400);
    line-height: 1.5;
    color: var(--clr-dark);
    text-align: center;
`;
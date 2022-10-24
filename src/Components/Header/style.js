import styled from "styled-components";

export const Container = styled.section`
    max-width: 1920px;
    margin: 0 auto;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--bg-accent);
    position: relative;

    img{
        width: 50px;
        aspect-ratio: 1;
        filter: contrast(150%) brightness(150%);
    }

    @media screen and (max-width:38em){
        padding: 1rem 0.5rem;
        row-gap: 1rem;
        flex-direction: column;
        justify-content: center;
    }
`;

export const Skip = styled.a`
    padding: 0.5em 1em;
    border-radius: 5px;
    font-size: clamp(1rem, 1vw, 1.5rem);
    font-family: var(--ff-one);
    font-weight: var(--fw-700);
    color: var(--clr-light);
    background-color: var(--bg-navy);
    position: absolute;
    left: 2rem;
    bottom: -2rem;
    text-decoration: none;
    transform: translateY(-600%);
    transition: transform 0.3s ease-in-out;
    outline: none;

    :focus-visible{
        transform: translateY(0);
    }
`;

export const Nav = styled.nav`

    ul{
        display: flex;
        align-items: center;
        gap: clamp(0.5rem, 4vw, 5rem);
        list-style: none;
    }

    a{
        color: var(--clr-dark);
        text-decoration: none;
        outline: none;
    }

    li{
        font-size: clamp(1rem, 1.2vw, 1.5rem);
        font-family: var(--ff-one);
        font-weight: var(--fw-400);
        letter-spacing: 1px;
        text-transform: uppercase;
        position: relative;
    }

    li::after{
        content: '';
        width: 70%;
        border: 2px solid var(--bg-navy);
        display: block;
        position: absolute;
        left: 15%;
        bottom: -.35em;
        transform-origin: center;
        transition: transform 0.2s ease-in-out;
        transform: scaleX(0);
    }

    li:where(:hover, :focus-within)::after{
        transform: scaleX(1);
    }

    a:where(:hover, :focus){
        color: red;
    }

    @media screen and (max-width:38em){
        width: 100%;

        a{
            padding: 0;
        }

        ul{
            justify-content: space-between;
        }
    }
`;
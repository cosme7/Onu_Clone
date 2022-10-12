import styled from "styled-components";

export const Container = styled.section`
    max-width: 1920px;
    margin: 0 auto;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--bg-accent);

    img{
        width: 50px;
        aspect-ratio: 1;
    }

    @media screen and (max-width:38em){
        padding: 1rem 0.5rem;
        row-gap: 1rem;
        flex-direction: column;
        justify-content: center;
    }
`;

export const Nav = styled.nav`

    ul{
        display: flex;
        align-items: center;
        gap: clamp(0.5rem, 1.2vw, 1.5rem);
        list-style: none;
    }

    a{
        padding: 1rem;
        text-decoration: none;
        transition: outline 0.2s ease-in-out;
    }

    a:where(:hover, :focus){
        outline: 5px solid navy;
    }

    a:where(:hover, :focus) li{
        color: #e5243b;
    }

    li{
        margin-right: 0.5rem;
        font-size: clamp(0.75rem, 1.2vw, 1.5rem);
        font-family: var(--ff-one);
        font-weight: var(--fw-400);
        letter-spacing: 1px;
        text-transform: uppercase;
    }

    @media screen and (max-width:38em){
        width: 100%;

        a{
            padding: 0.5rem;
        }

        ul{
            justify-content: space-between;
            gap: 0;
        }
    }
`;
import styled from "styled-components";

export const Container = styled.section`
    max-width: 1920px;
    margin: 0 auto;
    padding: 1rem 2rem 0.5rem;
    border-top: 1px solid var(--bg-navy);
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--bg-light);  
    
    p{
        max-width: 40ch;
        font-size: clamp(1rem, 1.2vw, 1.5rem);
        font-family: var(--ff-one);
        font-weight: var(--fw-700);
        letter-spacing: 2px;
        color: var(--clr-dark);
        text-align: center;
    }

    @media screen and (max-width:38em){
        padding: 1rem 0.5rem;
        row-gap: 1rem;
        flex-direction: column;
        justify-content: center;
    }
`;

export const Social = styled.nav`
    display: flex;
    column-gap: clamp(1rem, 1.2vw, 1.5rem);

    img{
        width: 60px;
        aspect-ratio: 1;
        transition: transform 0.2s ease-in-out;
    }

    img:where(:hover, :focus){
        transform: scale(0.9);
    }
    
`;
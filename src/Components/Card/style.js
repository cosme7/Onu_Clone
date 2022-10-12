import styled from "styled-components";

export const Button = styled.button`
    width: 250px;
    padding: 1rem 0.5rem;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border: none;
    cursor: pointer;

    h4{
        margin-right: 1rem;
        font-family: var(--ff-one);
        font-size: clamp(1.5rem, 1.5vw, 2rem);
        color: var(--clr-light);
        text-align: center;
    }

    h4::before{
        counter-increment: x;
        content:  " " counter(x) " " ;
        font-size: clamp(3rem, 3vw, 3.7rem);    
        position: relative;
        top: 0.5rem;
    }

    img{
        width: 90px;
        aspect-ratio: 1;
    }

    :nth-child(1){
        background-color: #e5243b;
    }
    :nth-child(2){
        background-color: #dda83a;
    }
    :nth-child(3){
        background-color: #4c9f38;
    }
    :nth-child(4){
        background-color: #c5192d;
    }
    :nth-child(5){
        background-color: #dd1367;
    }
`;

export const ModalBox = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;
    background-color: var(--bg-dark);

    button{
        padding: 0.5em 1em;
        border-radius: 10px;
        font-size: clamp(1rem, 1.2vw, 1.4rem);
        font-family: var(--ff-one);
        font-weight: var(--fw-700);
        cursor: pointer;
    }

    img{
        width: 100%;
    }

    h2{
        font-size: clamp(2rem, 3vw, 3.5rem);
        font-family: var(--ff-one);
        font-weight: var(--fw-700);
        color: var(--clr-light);
    }

    p{
        max-width: 55ch;
        font-size: clamp(1rem, 1.5vw, 3.5rem);
        font-family: var(--ff-one);
        font-weight: var(--fw-400);
        color: var(--clr-light);
        text-align: center;
    }

    @media screen and (max-width:38em){
        padding: 1rem 0.5rem;
    }
`;
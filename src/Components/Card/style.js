import styled from "styled-components";

export const Button = styled.button`
    width: 250px;
    min-height: 20vh;
    padding: 0.5rem 0.5rem 1rem;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border: none;
    cursor: pointer;

    p{
        margin-right: 1rem;
        font-family: var(--ff-one);
        font-size: clamp(1.5rem, 1.5vw, 2rem);
        font-weight: var(--fw-700);
        color: var(--clr-light);
        text-align: center;
    }

    p::before{
        counter-increment: x;
        content:  " " counter(x) " " ;
        font-size: clamp(3rem, 3vw, 3.7rem);    
        position: relative;
        top: 0.5rem;
    }

    img{
        width: 80px;
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

export const Overlay = styled.div`
    width: 5rem;
    aspect-ratio: 1;
    border-radius: 50px;
    position: fixed;
    top: 50%;
    z-index: 1000;
    transform: ${({open}) => (open ? 'scale(1000)' : 'scale(0)')};
    transition: transform 0.4s ease-in-out;
    background-image: linear-gradient( rgb(0, 0, 0, 0), rgb(0, 0, 0, 0.5) );
`;

export const ModalBox = styled.div`
    width: 45%;
    min-height: 30vh;
    padding: 1rem 0.5rem;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: var(--bg-light);
    position: fixed;
    transform: ${({ open }) => (open ? 'scale(1)' : 'scale(0)')};
    transition: transform 0.3s ease-in-out;
    top: 5%;
    z-index: 2000;
    isolation: isolate;

    img{
        width: 100%;
        max-height: 400px;
        padding: 0.2rem;
        border-radius: 25px;
        object-fit: cover;
        outline: 5px solid var(--bg-dark);
    }

    h2{
        font-size: clamp(2rem, 3vw, 3.5rem);
        font-family: var(--ff-one);
        font-weight: var(--fw-700);
        color: var(--clr-dark);
    }

    p{
        max-width: 55ch;
        font-size: clamp(1rem, 1.2vw, 1.5rem);
        font-family: var(--ff-one);
        font-weight: var(--fw-400);
        color: var(--clr-dark);
        text-align: center;
    }

    button{
        padding: 0.5em 1em;
        border-radius: 25px;
        font-size: clamp(1rem, 1.2vw, 1.4rem);
        font-family: var(--ff-one);
        font-weight: var(--fw-700);
        background-color: var(--bg-dark);
        color: var(--clr-light);
        cursor: pointer;
        border: none;
    }

    button:hover{
        background-color: var(--bg-light);
        color: var(--clr-dark);
        outline: 2px solid var(--bg-dark);
    }

    @media screen and (max-width:48em){
        width: 100%;
    }
`;


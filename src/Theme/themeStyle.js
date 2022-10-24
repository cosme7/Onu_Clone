import styled from "styled-components"

export const ToggleBtn = styled.button`
    width: 3.5rem;
    aspect-ratio: 1;
    border-radius: 50px;
    font-size: 2.5rem;
    border: none;
    background-color: transparent;
    overflow: hidden;
    position: fixed; 
    z-index: 9999;
    bottom: 1.5rem;
    left: 45%;

    @media screen and (max-width: 25em){
        top: 0.9rem;
        left: 0.9rem;
    }

    ::before,
    ::after{
        width: 45px;
        aspect-ratio: 1;
        display: block;
        transition: transform 0.5s ease-in-out;
        position: absolute;
        top: 15%;
        left: 2%;
    }

    ::before{
        content: '🌞';
        transform: ${(props) => props.theme.opSun};
    }

    ::after{
        content: '🌝';
        transform: ${(props) => props.theme.opMoon};
    }
`;

export const lightTheme = {
    clrLight: 'white',
    clrDark: 'black',
    accent: '#f9f9f9',
    bgLight: 'white',
    bgDark: 'black',
    bgNavy: 'navy',
    opSun: 'translateY(100px)',
    overlay: 'rgb(0, 0, 0, 0.5)',
    imgClr: 'contrast(100%) brightness(100%)',
}

export const darkTheme = {
    clrLight: 'black',
    clrDark: 'white',
    accent: '#1c1e22',
    bgLight: 'black',
    bgDark: 'white',
    bgNavy: 'cyan',
    opMoon: 'translateY(-100px)',
    overlay: 'rgb(255, 255, 255, 0.5)',
    imgClr: 'contrast(0%) brightness(0%)'
}
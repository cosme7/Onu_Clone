import React from 'react';
import logo from '../../Assets/logo.png'
import * as S from './style'

export default function Header(){
    return (
        <>
        <header>
            <S.Container>
            <S.Skip href="#main-content" rel="noreferrer">Skip Navigation</S.Skip>
                <img src={logo} alt='Onu Logo' title='Onu Logo' />
                <S.Nav aria-label='header-primary'>
                    <ul>
                        <li><a href='https://csl-portfolio.netlify.app/' target="_blank" rel="noreferrer">portfólio</a></li>
                        <li><a href='https://pt.wikipedia.org/wiki/Vila_Kennedy' target="_blank" rel="noreferrer">Wikipédia</a></li>
                        <li><a href='https://www.linkedin.com/company/vainaweb/?originalSubdomain=br' target="_blank" rel="noreferrer">#VainaWeb</a></li>
                    </ul>
                </S.Nav>
            </S.Container>
        </header>    
        </>
    );
}
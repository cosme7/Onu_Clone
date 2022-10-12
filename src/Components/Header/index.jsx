import React from 'react';
import logo from '../../Assets/logo.png'
import * as S from './style'

export default function Header(){
    return (
        <>
        <header>
            <S.Container>
                <img src={logo} alt='Onu Logo' title='Onu Logo' />
                <S.Nav aria-label='header-primary'>
                    <ul>
                        <a href='https://github.com/cosme7/Portfolio' target="_blank" rel="noreferrer"><li>portfólio </li></a>
                        <a href='https://pt.wikipedia.org/wiki/Vila_Kennedy' target="_blank" rel="noreferrer"><li>Wikipédia</li></a>
                        <a href='https://www.linkedin.com/company/vainaweb/?originalSubdomain=br' target="_blank" rel="noreferrer"><li>#VainaWeb</li></a>
                    </ul>
                </S.Nav>
            </S.Container>
        </header>    
        </>
    );
}
import React from 'react';
import Health from '../../Components/Card/Health'
import Transport from '../../Components/Card/Transport'
import Safety from '../../Components/Card/Safety'
import Water from '../../Components/Card/Water'
import Trash from '../../Components/Card/Trash'
import * as S from './style';


export default function index(){
    return (
        <>
        <main>
            <S.Container>
                <h1>Os Objetivos de Desenvolvimento Sustentável na Vila Kennedy</h1>
                <S.HomeTxt>
                Os Objetivos de Desenvolvimento Sustentável são um apelo 
                global à ação para acabar com a pobreza, 
                proteger o meio ambiente e o clima e 
                garantir que as pessoas, em todos os 
                lugares, possam desfrutar de paz e de 
                prosperidade. Estes são os objetivos 
                para os quais as Nações Unidas estão 
                contribuindo a fim de que possamos 
                atingir a Agenda 2030 no Brasil.
                </S.HomeTxt>
                <div aria-label='card-content'>
                    <Transport />
                    <Health />
                    <Safety />
                    <Water />
                    <Trash />
                </div>
            </S.Container>
        </main>
        </>
    );
}